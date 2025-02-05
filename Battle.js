class Battle {
    constructor(scene, p1, p2, player, opponent) {
      if (p1.length === 0) {
        throw new Error("Party 1 has no Pokémon.");
      } else if (p2.length === 0) {
        throw new Error("Party 2 has no Pokémon.");
      }
      this.scene = scene;
      this.peer = new Peer();
      this.field = new ActiveField(); // Whole field (gravity/rooms)
      this.sides = [new ActiveSide(), new ActiveSide()]; // Player's side, Foe's side
      this.positions = []; // Battler positions
      this.battlers = [];
      this.sideSizes = [1, 1]; // Single battle, 1v1
      this.backdrop = "";
      this.backdropBase = null;
      this.time = 0;
      this.environment = "None"; // e.g. Tall grass, cave, still water
      this.turnCount = 0;
      this.decision = 0;
      this.caughtPokemon = [];
      this.player = Array.isArray(player) ? player : [player]; // Array of Player/NPCTrainer objects, or nil
      this.opponent = Array.isArray(opponent) ? opponent : [opponent]; // Array of NPCTrainer objects, or nil
      this.items = null;
      this.allyItems = null; // Array of items held by ally. This is just used for Mega Evolution for now.
      this.party1 = p1;
      this.party2 = p2;
      this.party1order = Array.from({ length: this.party1.length }, (_, i) => i);
      this.party2order = Array.from({ length: this.party2.length }, (_, i) => i);
      this.party1starts = [0];
      this.party2starts = [0];
      this.internalBattle = true;
      this.debug = false;
      this.canRun = true;
      this.canLose = false;
      this.canSwitch = true;
      this.switchStyle = true;
      this.showAnims = true;
      this.controlPlayer = false;
      this.expGain = true;
      this.moneyGain = true;
      this.disablePokeBalls = false;
      this.sendToBoxes = 1;
      this.rules = {};
      this.priority = [];
      this.priorityTrickRoom = false;
      this.choices = [];
      this.megaEvolution = [
        Array(this.player ? this.player.length : 1).fill(-1),
        Array(this.opponent ? this.opponent.length : 1).fill(-1)
      ];
      this.initialItems = [
        Array.from({ length: this.party1.length }, (_, i) => this.party1[i] ? this.party1[i].item_id : null),
        Array.from({ length: this.party2.length }, (_, i) => this.party2[i] ? this.party2[i].item_id : null)
      ];
      this.recycleItems = [Array(this.party1.length).fill(null), Array(this.party2.length).fill(null)];
      this.belch = [Array(this.party1.length).fill(false), Array(this.party2.length).fill(false)];
      this.battleBond = [Array(this.party1.length).fill(false), Array(this.party2.length).fill(false)];
      this.corrosiveGas = [Array(this.party1.length).fill(false), Array(this.party2.length).fill(false)];
      this.usedInBattle = [Array(this.party1.length).fill(false), Array(this.party2.length).fill(false)];
      this.successStates = [];
      this.lastMoveUsed = null;
      this.lastMoveUser = -1;
      this.switching = false;
      this.futureSight = false;
      this.commandPhase = false;
      this.endOfRound = false;
      this.moldBreaker = false;
      this.runCommand = 0;
      this.nextPickupUse = 0;
      this.struggle = new Move.Struggle(this, null);
      this.megaRings = [];
      for (const item of GameData.Item.each) {
        if (item.has_flag("MegaRing")) {
          this.megaRings.push(item.id);
        }
      }
      this.battleAI = new AI(this);
    }

    wildBattle() {
        return this.opponent === null;
      }
    
    trainerBattle() {
        return this.opponent !== null;
    }

    setBattleMode(mode) {
        switch (mode) {
            case "triple":
            case "3v3":
            this.sideSizes = [3, 3];
            break;
            case "3v2":
            this.sideSizes = [3, 2];
            break;
            case "3v1":
            this.sideSizes = [3, 1];
            break;
            case "2v3":
            this.sideSizes = [2, 3];
            break;
            case "double":
            case "2v2":
            this.sideSizes = [2, 2];
            break;
            case "2v1":
            this.sideSizes = [2, 1];
            break;
            case "1v3":
            this.sideSizes = [1, 3];
            break;
            case "1v2":
            this.sideSizes = [1, 2];
            break;
            default:
            this.sideSizes = [1, 1]; // Single, 1v1 (default)
            break;
        }
    }

    singleBattle() {
        return this.pbSideSize(0) === 1 && this.pbSideSize(1) === 1;
    }

    pbSideSize(index) {
        return this.sideSizes[index % 2];
    }

    maxBattlerIndex() {
        return this.pbSideSize(0) > this.pbSideSize(1)
            ? (this.pbSideSize(0) - 1) * 2
            : this.pbSideSize(1) * 2 - 1;
    }


    pbPlayer() {
        return this.player[0];
    }
    
    pbGetOwnerIndexFromBattlerIndex(idxBattler) {
        const trainer = this.opposes(idxBattler) ? this.opponent : this.player;
        if (!trainer) {
            return 0;
        }
        const n = this.pbSideSize(idxBattler % 2);
        if (trainer.length === 2) {
            return [0, 0, 1][Math.floor(idxBattler / 2)] || idxBattler / 2;
        }
        else if (trainer.length === 3) {
            return Math.floor(idxBattler / 2);
        }
        return 0;
    }
    
    pbGetOwnerFromBattlerIndex(idxBattler) {
        const idxTrainer = this.pbGetOwnerIndexFromBattlerIndex(idxBattler);
        const trainer = this.opposes(idxBattler) ? this.opponent : this.player;
        return trainer ? trainer[idxTrainer] : null;
    }
    
    pbGetOwnerIndexFromPartyIndex(idxBattler, idxParty) {
        let ret = -1;
        this.pbPartyStarts(idxBattler).forEach((start, i) => {
            if (start > idxParty) {
                return;
            }
            ret = i;
        });
        return ret;
    }

    pbGetOwnerFromPartyIndex(idxBattler, idxParty) {
        const idxTrainer = this.pbGetOwnerIndexFromPartyIndex(idxBattler, idxParty);
        const trainer = this.opposes(idxBattler) ? this.opponent : this.player;
        return trainer ? trainer[idxTrainer] : null;
    }
    
    pbGetOwnerName(idxBattler) {
        const idxTrainer = this.pbGetOwnerIndexFromBattlerIndex(idxBattler);
        if (this.opposes(idxBattler)) {
            return this.opponent[idxTrainer].full_name; // Opponent
        }
        else if (idxTrainer > 0) {
            return this.player[idxTrainer].full_name; // Ally trainer
        }
        else {
            return this.player[idxTrainer].name; // Player
        }
    }
    
    pbGetOwnerItems(idxBattler) {
        if (this.opposes(idxBattler)) {
          return this.items ? this.items[this.pbGetOwnerIndexFromBattlerIndex(idxBattler)] : [];
        } else {
          return this.ally_items ? this.ally_items[this.pbGetOwnerIndexFromBattlerIndex(idxBattler)] : [];
        }
    }

    pbIsOwner(idxBattler, idxParty) {
        const idxTrainer1 = this.pbGetOwnerIndexFromBattlerIndex(idxBattler);
        const idxTrainer2 = this.pbGetOwnerIndexFromPartyIndex(idxBattler, idxParty);
        return idxTrainer1 === idxTrainer2;
    }
    
    pbOwnedByPlayer(idxBattler) {
        if (this.opposes(idxBattler)) {
            return false;
        }
        return this.pbGetOwnerIndexFromBattlerIndex(idxBattler) === 0;
    }
    
    pbNumPositions(side, idxTrainer) {
        let ret = 0;
        for (let i = 0; i < this.pbSideSize(side); i++) {
            const t = this.pbGetOwnerIndexFromBattlerIndex(i * 2 + side);
            if (t === idxTrainer) {
                ret++;
            }
        }
        return ret;
    }

    pbParty(idxBattler) {
        return this.opposes(idxBattler) ? this.party2 : this.party1;
    }
    
    pbOpposingParty(idxBattler) {
        return this.opposes(idxBattler) ? this.party1 : this.party2;
    }
    
    pbPartyOrder(idxBattler) {
        return this.opposes(idxBattler) ? this.party2order : this.party1order;
    }
    
    pbPartyStarts(idxBattler) {
        return this.opposes(idxBattler) ? this.party2starts : this.party1starts;
    }
    
    pbPlayerDisplayParty(idxBattler = 0) {
        const partyOrders = this.pbPartyOrder(idxBattler);
        const [idxStart, _idxEnd] = this.pbTeamIndexRangeFromBattlerIndex(idxBattler);
        const ret = [];
        this.eachInTeamFromBattlerIndex(idxBattler, (pkmn, i) => {
            ret[partyOrders[i] - idxStart] = pkmn;
        });
        return ret;
    }
    
    pbAbleCount(idxBattler = 0) {
        const party = this.pbParty(idxBattler);
        let count = 0;
        party.forEach((pkmn) => {
            if (pkmn && pkmn.able) {
                count += 1;
            }
        });
        return count;
    }
    
    pbAbleNonActiveCount(idxBattler = 0) {
        const party = this.pbParty(idxBattler);
        const inBattleIndices = this.allSameSideBattlers(idxBattler).map((b) => b.pokemonIndex);
        let count = 0;
        party.forEach((pkmn, idxParty) => {
            if (pkmn && pkmn.able && !inBattleIndices.includes(idxParty)) {
                count += 1;
            }
        });
        return count;
    }
    
    pbAllFainted(idxBattler = 0) {
        return this.pbAbleCount(idxBattler) === 0;
    }
    
    pbTeamAbleNonActiveCount(idxBattler = 0) {
        const inBattleIndices = this.allSameSideBattlers(idxBattler).map((b) => b.pokemonIndex);
        let count = 0;
        this.eachInTeamFromBattlerIndex(idxBattler, (pkmn, i) => {
            if (pkmn && pkmn.able && !inBattleIndices.includes(i)) {
                count += 1;
            }
        });
        return count;
    }

    pbAbleTeamCounts(side) {
        const party = this.pbParty(side);
        const partyStarts = this.pbPartyStarts(side);
        const ret = [];
        let idxTeam = -1;
        let nextStart = 0;
    
        for (let i = 0; i < party.length; i++) {
            if (i >= nextStart) {
                idxTeam += 1;
                nextStart = idxTeam < partyStarts.length - 1 ? partyStarts[idxTeam + 1] : party.length;
            }
            if (!party[i] || !party[i].able) continue;
            if (!ret[idxTeam]) ret[idxTeam] = 0;
            ret[idxTeam] += 1;
        }
    
        return ret;
    }

    pbTeamIndexRangeFromBattlerIndex(idxBattler) {
        const partyStarts = this.pbPartyStarts(idxBattler);
        const idxTrainer = this.pbGetOwnerIndexFromBattlerIndex(idxBattler);
        const idxPartyStart = partyStarts[idxTrainer];
        const idxPartyEnd = idxTrainer < partyStarts.length - 1 ? partyStarts[idxTrainer + 1] : this.pbParty(idxBattler).length;
        return [idxPartyStart, idxPartyEnd];
    }
    
    pbTeamLengthFromBattlerIndex(idxBattler) {
        const [idxPartyStart, idxPartyEnd] = this.pbTeamIndexRangeFromBattlerIndex(idxBattler);
        return idxPartyEnd - idxPartyStart;
    }
    
    eachInTeamFromBattlerIndex(idxBattler, callback) {
        const party = this.pbParty(idxBattler);
        const [idxPartyStart, idxPartyEnd] = this.pbTeamIndexRangeFromBattlerIndex(idxBattler);
        for (let i = 0; i < party.length; i++) {
            if (party[i] && i >= idxPartyStart && i < idxPartyEnd) {
                callback(party[i], i);
            }
        }
    }
    
    eachInTeam(side, idxTrainer, callback) {
        const party = this.pbParty(side);
        const partyStarts = this.pbPartyStarts(side);
        const idxPartyStart = partyStarts[idxTrainer];
        const idxPartyEnd = idxTrainer < partyStarts.length - 1 ? partyStarts[idxTrainer + 1] : party.length;
        for (let i = 0; i < party.length; i++) {
            if (party[i] && i >= idxPartyStart && i < idxPartyEnd) {
                callback(party[i], i);
            }
        }
    }

    pbLastInTeam(idxBattler) {
        const party = this.pbParty(idxBattler);
        const partyOrders = this.pbPartyOrder(idxBattler);
        const [idxPartyStart, idxPartyEnd] = this.pbTeamIndexRangeFromBattlerIndex(idxBattler);
        let ret = -1;
    
        for (let i = 0; i < party.length; i++) {
            if (i < idxPartyStart || i >= idxPartyEnd) continue; // Check the team only
            if (!party[i] || !party[i].able) continue; // Can't copy a non-fainted Pokémon or egg
            if (ret < 0 || partyOrders[i] > partyOrders[ret]) {
                ret = i;
            }
        }
    
        return ret;
    }
    
    pbMaxLevelInTeam(side, idxTrainer) {
        let ret = 1;
        this.eachInTeam(side, idxTrainer, (pkmn, _i) => {
            if (pkmn.level > ret) {
                ret = pkmn.level;
            }
        });
        return ret;
    }

    eachBattler(callback) {
        this.battlers.forEach((b) => {
            if (b && !b.fainted) {
                callback(b);
            }
        });
    }
    
    allBattlers() {
        return this.battlers.filter((b) => b && !b.fainted);
    }
    
    eachSameSideBattler(idxBattler = 0, callback) {
        const index = typeof idxBattler === 'object' && idxBattler.hasOwnProperty('index') ? idxBattler.index : idxBattler;
        this.battlers.forEach((b) => {
            if (b && !b.fainted && !b.opposes(index)) {
                callback(b);
            }
        });
    }
    
    allSameSideBattlers(idxBattler = 0) {
        const index = typeof idxBattler === 'object' && idxBattler.hasOwnProperty('index') ? idxBattler.index : idxBattler;
        return this.battlers.filter((b) => b && !b.fainted && !b.opposes(index));
    }
    
    eachOtherSideBattler(idxBattler = 0, callback) {
        const index = typeof idxBattler === 'object' && idxBattler.hasOwnProperty('index') ? idxBattler.index : idxBattler;
        this.battlers.forEach((b) => {
            if (b && !b.fainted && b.opposes(index)) {
                callback(b);
            }
        });
    }
    
    allOtherSideBattlers(idxBattler = 0) {
        const index = typeof idxBattler === 'object' && idxBattler.hasOwnProperty('index') ? idxBattler.index : idxBattler;
        return this.battlers.filter((b) => b && !b.fainted && b.opposes(index));
    }
    
    pbSideBattlerCount(idxBattler = 0) {
        return this.allSameSideBattlers(idxBattler).length;
    }
    
    pbOpposingBattlerCount(idxBattler = 0) {
        return this.allOtherSideBattlers(idxBattler).length;
    }
    
    pbPlayerBattlerCount() {
        return this.allSameSideBattlers().filter((b) => b.pbOwnedByPlayer).length;
    }
    
    pbCheckGlobalAbility(abil) {
        for (const b of this.allBattlers()) {
            if (b.hasActiveAbility(abil)) {
                return b;
            }
        }
        return null;
    }
    
    pbCheckOpposingAbility(abil, idxBattler = 0, nearOnly = false) {
        const index = typeof idxBattler === 'object' && idxBattler.hasOwnProperty('index') ? idxBattler.index : idxBattler;
        for (const b of this.allOtherSideBattlers(index)) {
            if (!nearOnly || b.near(index)) {
                if (b.hasActiveAbility(abil)) {
                    return b;
                }
            }
        }
        return null;
    }

    pbGetOpposingIndicesInOrder(idxBattler) {
        const pbSideSize = (side) => {
          // Implement the pbSideSize function
          // This function should return the size of the specified side
        };
    
        const opposes = (idxBattler) => {
          // Implement the opposes function
          // This function should return true if the given index is on the opposing side
        };
    
        switch (pbSideSize(0)) {
            case 1:
                switch (pbSideSize(1)) {
                    case 1:   // 1v1 single
                        return opposes(idxBattler) ? [0] : [1];
                    case 2:   // 1v2
                        return opposes(idxBattler) ? [0] : [3, 1];
                    case 3:   // 1v3
                        return opposes(idxBattler) ? [0] : [3, 5, 1];
                }
                break;
            case 2:
                switch (pbSideSize(1)) {
                    case 1:   // 2v1
                        return opposes(idxBattler) ? [0, 2] : [1];
                    case 2:   // 2v2 double
                        return [[3, 1], [2, 0], [1, 3], [0, 2]][idxBattler];
                    case 3:   // 2v3
                        if (idxBattler < 3) {
                            return [[5, 3, 1], [2, 0], [3, 1, 5]][idxBattler];
                        }
                        else {
                            return [0, 2];
                        }
                }
                break;
            case 3:
                switch (pbSideSize(1)) {
                    case 1:   // 3v1
                        return opposes(idxBattler) ? [2, 0, 4] : [1];
                    case 2:   // 3v2
                        return [[3, 1], [2, 4, 0], [3, 1], [2, 0, 4], [1, 3]][idxBattler];
                    case 3:   // 3v3 triple
                        return [[5, 3, 1], [4, 2, 0], [3, 5, 1], [2, 0, 4], [1, 3, 5], [0, 2, 4]][idxBattler];
                }
                break;
        }
        return [idxBattler];
    }

    opposes(idxBattler1, idxBattler2 = 0) {
        if (typeof idxBattler1.index === 'function') {
            idxBattler1 = idxBattler1.index;
        }
        if (typeof idxBattler2.index === 'function') {
            idxBattler2 = idxBattler2.index;
        }
        return (idxBattler1 & 1) !== (idxBattler2 & 1);
    }
    
    nearBattlers(idxBattler1, idxBattler2) {
        if (idxBattler1 === idxBattler2) {
            return false;
        }
        if (this.pbSideSize(0) <= 2 && this.pbSideSize(1) <= 2) {
            return true;
        }
        const pairsArray = [[0, 4], [1, 5]];
        switch (this.pbSideSize(0)) {
            case 3:
                switch (this.pbSideSize(1)) {
                    case 3:
                        pairsArray.push([0, 1]);
                        pairsArray.push([4, 5]);
                        break;
                    case 2:
                        pairsArray.push([0, 1]);
                        pairsArray.push([3, 4]);
                        break;
                }
                break;
            case 2:
                pairsArray.push([0, 1]);
                pairsArray.push([2, 5]);
                break;
        }
        for (const pair of pairsArray) {
            if (pair.includes(idxBattler1) && pair.includes(idxBattler2)) {
                return false;
            }
        }
        return true;
    }

    pbRemoveFromParty(idxBattler, idxParty) {
        let party = this.pbParty(idxBattler);
        party[idxParty] = null;
        let partyOrders = this.pbPartyOrder(idxBattler);
        let partyStarts = this.pbPartyStarts(idxBattler);
        let idxTrainer = this.pbGetOwnerIndexFromPartyIndex(idxBattler, idxParty);
        let idxPartyStart = partyStarts[idxTrainer];
        let idxPartyEnd = (idxTrainer < partyStarts.length - 1) ? partyStarts[idxTrainer + 1] : party.length;
        let origPartyPos = partyOrders[idxParty]; // Position of erased Pokémon initially
        partyOrders[idxParty] = idxPartyEnd; // Put erased Pokémon last in the team
        for (let i = 0; i < party.length; i++) {
            if (i >= idxPartyStart && i < idxPartyEnd && partyOrders[i] < origPartyPos) {
                partyOrders[i]--; // Appeared after erased Pokémon; bump it up by 1
            }
        }
    }
    
    pbSwapBattlers(idxA, idxB) {
        if (!this.battlers[idxA] || !this.battlers[idxB]) return false;
        if (this.opposes(idxA, idxB)) return false;
        if (this.pbGetOwnerIndexFromBattlerIndex(idxA) !== this.pbGetOwnerIndexFromBattlerIndex(idxB)) return false;
        [this.battlers[idxA], this.battlers[idxB]] = [this.battlers[idxB], this.battlers[idxA]];
        [this.battlers[idxA].index, this.battlers[idxB].index] = [this.battlers[idxB].index, this.battlers[idxA].index];
        [this.choices[idxA], this.choices[idxB]] = [this.choices[idxB], this.choices[idxA]];
        this.scene.pbSwapBattlerSprites(idxA, idxB);
        let effectsToSwap = [
            PBEffects.Attract,
            PBEffects.BideTarget,
            PBEffects.CounterTarget,
            PBEffects.JawLock,
            PBEffects.LockOnPos,
            PBEffects.MeanLook,
            PBEffects.MirrorCoatTarget,
            PBEffects.Octolock,
            PBEffects.SkyDrop,
            PBEffects.TrappingUser
        ];
        for (let b of this.allBattlers()) {
            for (let i of effectsToSwap) {
                if (b.effects[i] === idxA) {
                    b.effects[i] = idxB;
                } else if (b.effects[i] === idxB) {
                    b.effects[i] = idxA;
                }
            }
        }
        return true;
    }

    pbFindBattler(idxParty, idxBattlerOther = 0) {
        for (let b of this.allSameSideBattlers(idxBattlerOther)) {
            if (b.pokemonIndex === idxParty) {
                return b;
            }
        }
        return null;
    }
    
    // Only used for Wish, as the Wishing Pokémon will no longer be in battle.
    pbThisEx(idxBattler, idxParty) {
        let party = this.pbParty(idxBattler);
        if (this.opposes(idxBattler)) {
            if (this.trainerBattle()) {
                return `The opposing ${party[idxParty].name}`;
            }
            else {
                return `The wild ${party[idxParty].name}`;
            }
        }
        if (!this.pbOwnedByPlayer(idxBattler)) {
            return `The ally ${party[idxParty].name}`;
        }
        return party[idxParty].name;
    }
    
    pbSetSeen(battler) {
        if (!battler || !this.internalBattle) {
            return;
        }
        if (battler instanceof Battler) {
            this.pbPlayer.pokedex.register(
                battler.displaySpecies,
                battler.displayGender,
                battler.displayForm,
                battler.shiny
            );
        }
        else {
          this.pbPlayer.pokedex.register(battler);
        }
    }
    
    pbSetCaught(battler) {
        if (!battler || !this.internalBattle) {
            return;
        }
        if (battler instanceof Battler) {
            this.pbPlayer.pokedex.registerCaught(battler.displaySpecies);
        }
        else {
            this.pbPlayer.pokedex.registerCaught(battler.species);
        }
    }
    
    pbSetDefeated(battler) {
        if (!battler || !this.internalBattle) {
            return;
        }
        if (battler instanceof Battler) {
            this.pbPlayer.pokedex.registerDefeated(battler.displaySpecies);
        }
        else {
            this.pbPlayer.pokedex.registerDefeated(battler.species);
        }
    }
    
    nextPickupUse() {
        this.nextPickupUse += 1;
        return this.nextPickupUse;
    }

    defaultWeather(value) {
        this.field.defaultWeather = value;
        this.field.weather = value;
        this.field.weatherDuration = -1;
    }
    
      // Returns the effective weather (note that weather effects can be negated)
    pbWeather() {
        if (this.allBattlers().some((b) => b.hasActiveAbility(['CLOUDNINE', 'AIRLOCK']))) {
            return 'None';
        }
        return this.field.weather;
    }
    
      // Used for causing weather by a move or by an ability.
    pbStartWeather(user, newWeather, fixedDuration = false, showAnim = true) {
        if (this.field.weather === newWeather) {
            return;
        }
        this.field.weather = newWeather;
        let duration = fixedDuration ? 5 : -1;
        if (duration > 0 && user && user.itemActive()) {
            duration = Battle.ItemEffects.triggerWeatherExtender(user.item, this.field.weather, duration, user, this);
        }
        this.field.weatherDuration = duration;
        const weatherData = GameData.BattleWeather.tryGet(this.field.weather);
        if (showAnim && weatherData) {
            this.showCommonAnimation(weatherData.animation);
        }
        this.hideAbilitySplash(user);
        switch (this.field.weather) {
            case 'Sun':
                this.display(_INTL('The sunlight turned harsh!'));
                break;
            case 'Rain':
                this.display(_INTL('It started to rain!'));
                break;
            case 'Sandstorm':
                this.display(_INTL('A sandstorm brewed!'));
                break;
            case 'Hail':
                this.display(_INTL('It started to hail!'));
                break;
            case 'HarshSun':
                this.display(_INTL('The sunlight turned extremely harsh!'));
                break;
            case 'HeavyRain':
                this.display(_INTL('A heavy rain began to fall!'));
                break;
            case 'StrongWinds':
                this.display(_INTL('Mysterious strong winds are protecting Flying-type Pokémon!'));
                break;
            case 'ShadowSky':
                this.display(_INTL('A shadow sky appeared!'));
                break;
        }
        // Check for end of primordial weather, and weather-triggered form changes
        this.allBattlers().forEach((b) => b.checkFormOnWeatherChange());
        this.pbEndPrimordialWeather();
    }

    pbEndPrimordialWeather() {
        if (this.field.weather === this.field.defaultWeather) return;
        const oldWeather = this.field.weather;
    
        // End Primordial Sea, Desolate Land, Delta Stream
        switch (this.field.weather) {
            case 'HarshSun':
                if (!this.pbCheckGlobalAbility('DESOLATELAND')) {
                    this.field.weather = 'None';
                    this.pbDisplay('The harsh sunlight faded!');
                }
                break;
            case 'HeavyRain':
                if (!this.pbCheckGlobalAbility('PRIMORDIALSEA')) {
                    this.field.weather = 'None';
                    this.pbDisplay('The heavy rain has lifted!');
                }
                break;
            case 'StrongWinds':
                if (!this.pbCheckGlobalAbility('DELTASTREAM')) {
                    this.field.weather = 'None';
                    this.pbDisplay('The mysterious air current has dissipated!');
                }
                break;
        }
    
        if (this.field.weather !== oldWeather) {
            // Check for form changes caused by the weather changing
            this.allBattlers().forEach((b) => b.pbCheckFormOnWeatherChange());
            // Start up the default weather
            if (this.field.defaultWeather !== 'None') {
                this.pbStartWeather(null, this.field.defaultWeather);
            }
        }
    }
    
    pbStartWeatherAbility(newWeather, battler, ignorePromal = false) {
        if (!ignorePromal && ['HarshSun', 'HeavyRain', 'StrongWinds'].includes(this.field.weather)) return;
        if (this.field.weather === newWeather) return;
        this.pbShowAbilitySplash(battler);
        if (!Scene.USE_ABILITY_SPLASH) {
            this.pbDisplay(`${battler.pbThis()}'s ${battler.abilityName} activated!`);
        }
        let fixedDuration = false;
        if (Settings.FIXED_DURATION_WEATHER_FROM_ABILITY && !['HarshSun', 'HeavyRain', 'StrongWinds'].includes(newWeather)) {
            fixedDuration = true;
        }
        this.pbStartWeather(battler, newWeather, fixedDuration);
        // NOTE: The ability splash is hidden again in def pbStartWeather.
    }

    defaultTerrain(value) {
        this.field.defaultTerrain = value;
        this.field.terrain = value;
        this.field.terrainDuration = -1;
    }
    
    pbStartTerrain(user, newTerrain, fixedDuration = true) {
        if (this.field.terrain === newTerrain) return;
        this.field.terrain = newTerrain;
        let duration = fixedDuration ? 5 : -1;
        if (duration > 0 && user && user.itemActive()) {
            duration = Battle.ItemEffects.triggerTerrainExtender(user.item, newTerrain, duration, user, this);
        }
        this.field.terrainDuration = duration;
        const terrainData = GameData.BattleTerrain.tryGet(this.field.terrain);
        if (terrainData) {
            this.showCommonAnimation(terrainData.animation);
        }
        if (user) {
            this.hideAbilitySplash(user);
        }
        switch (this.field.terrain) {
            case 'Electric':
                this.display(_INTL('An electric current runs across the battlefield!'));
                break;
            case 'Grassy':
                this.display(_INTL('Grass grew to cover the battlefield!'));
                break;
            case 'Misty':
                this.display(_INTL('Mist swirled about the battlefield!'));
                break;
            case 'Psychic':
                this.display(_INTL('The battlefield got weird!'));
                break;
        }
        this.allBattlers.forEach(b => b.abilityOnTerrainChange());
        this.allBattlers.forEach(b => b.itemTerrainStatBoostCheck());
    }

    pbDisplay(msg, block) {
        this.scene.pbDisplayMessage(msg, block);
    }
    
    pbDisplayBrief(msg) {
        this.scene.pbDisplayMessage(msg, true);
    }

    pbDisplayPaused(msg, block) {
        this.scene.pbDisplayPausedMessage(msg, block);
    }

    pbDisplayConfirm(msg) {
        return this.scene.pbDisplayConfirmMessage(msg);
    }

    pbShowCommands(msg, commands, defaultValue = -1) {
        return this.scene.pbShowCommands(msg, commands, defaultValue);
    }

    pbAnimation(move, user, targets, hitNum = 0) {
        if (this.showAnims) {
            this.scene.pbAnimation(move, user, targets, hitNum);
        }
    }
    
    pbCommonAnimation(name, user = null, targets = null) {
        if (this.showAnims) {
            this.scene.pbCommonAnimation(name, user, targets);
        }
    }

    pbShowAbilitySplash(battler, delay = false, logTrigger = true) {
        if (logTrigger) {
            console.log(`[Ability triggered] ${battler.pbThis}'s ${battler.abilityName}`);
        }
        if (!Scene.USE_ABILITY_SPLASH) {
            return;
        }
        this.scene.pbShowAbilitySplash(battler);
        if (delay) {
            let timerStart = performance.now();
            while (performance.now() - timerStart < 1000) { // 1 second
                this.scene.pbUpdate();
            }
        }
    }

    pbHideAbilitySplash(battler) {
        if (!Scene.USE_ABILITY_SPLASH) {
            return;
        }
        this.scene.pbHideAbilitySplash(battler);
    }

    pbReplaceAbilitySplash(battler) {
        if (!Scene.USE_ABILITY_SPLASH) {
            return;
        }
        this.scene.pbReplaceAbilitySplash(battler);
    }
  }