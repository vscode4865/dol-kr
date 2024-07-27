function pbItemMenu(idxBattler, _firstAction) {
    let visibleSprites = pbFadeOutAndHide(this.sprites);
    let oldLastPocket = $bag.last_viewed_pocket;
    let oldChoices = $bag.last_pocket_selections.slice();
    if (this.bagLastPocket) {
      $bag.last_viewed_pocket = this.bagLastPocket;
      $bag.last_pocket_selections = this.bagChoices.slice();
    } else {
      $bag.reset_last_selections();
    }
    let itemScene = new PokemonBag_Scene();
    itemScene.pbStartScene($bag, true, (item) => {
      let useType = GameData.Item.get(item).battle_use;
      return useType && useType > 0;
    }, false);
    let wasTargeting = false;
    while (true) {
      let item = itemScene.pbChooseItem();
      if (!item) break;
      item = GameData.Item.get(item);
      let itemName = item.name;
      let useType = item.battle_use;
      let cmdUse = -1;
      let commands = [];
      if (useType && useType !== 0) {
        commands[cmdUse = commands.length] = _INTL("Use");
      }
      commands[commands.length] = _INTL("Cancel");
      let command = itemScene.pbShowCommands(_INTL("{1} is selected.", itemName), commands);
      if (cmdUse >= 0 && command === cmdUse) {
        switch (useType) {
          case 1:
          case 2:
          case 3:
            switch (useType) {
              case 1:
                if (this.battle.pbTeamLengthFromBattlerIndex(idxBattler) === 1) {
                  if (yield(item.id, useType, this.battle.battlers[idxBattler].pokemonIndex, -1, itemScene)) break;
                }
                break;
              case 3:
                if (this.battle.pbPlayerBattlerCount === 1) {
                  if (yield(item.id, useType, this.battle.battlers[idxBattler].pokemonIndex, -1, itemScene)) break;
                }
                break;
            }
            itemScene.pbFadeOutScene();
            let party = this.battle.pbParty(idxBattler);
            let partyPos = this.battle.pbPartyOrder(idxBattler);
            let [partyStart, _partyEnd] = this.battle.pbTeamIndexRangeFromBattlerIndex(idxBattler);
            let modParty = this.battle.pbPlayerDisplayParty(idxBattler);
            let pkmnScene = new PokemonParty_Scene();
            let pkmnScreen = new PokemonPartyScreen(pkmnScene, modParty);
            pkmnScreen.pbStartScene(_INTL("Use on which Pokémon?"), this.battle.pbNumPositions(0, 0));
            let idxParty = -1;
            while (true) {
              pkmnScene.pbSetHelpText(_INTL("Use on which Pokémon?"));
              idxParty = pkmnScreen.pbChoosePokemon();
              if (idxParty < 0) break;
              let idxPartyRet = -1;
              partyPos.forEach((pos, i) => {
                if (pos === idxParty + partyStart) {
                  idxPartyRet = i;
                }
              });
              if (idxPartyRet < 0) continue;
              let pkmn = party[idxPartyRet];
              if (!pkmn || pkmn.egg) continue;
              let idxMove = -1;
              if (useType === 2) {
                idxMove = pkmnScreen.pbChooseMove(pkmn, _INTL("Restore which move?"));
                if (idxMove < 0) continue;
              }
              if (yield(item.id, useType, idxPartyRet, idxMove, pkmnScene)) break;
            }
            pkmnScene.pbEndScene();
            if (idxParty >= 0) break;
            itemScene.pbFadeInScene();
            break;
          case 4:
            let idxTarget = -1;
            if (this.battle.pbOpposingBattlerCount(idxBattler) === 1) {
              this.battle.allOtherSideBattlers(idxBattler).forEach((b) => {
                idxTarget = b.index;
              });
              if (yield(item.id, useType, idxTarget, -1, itemScene)) break;
            } else {
              wasTargeting = true;
              itemScene.pbFadeOutScene();
              let tempVisibleSprites = visibleSprites.slice();
              tempVisibleSprites["commandWindow"] = false;
              tempVisibleSprites["targetWindow"] = true;
              idxTarget = pbChooseTarget(idxBattler, GameData.Target.get(:Foe), tempVisibleSprites);
              if (idxTarget >= 0) {
                if (yield(item.id, useType, idxTarget, -1, this)) break;
              }
              wasTargeting = false;
              pbFadeOutAndHide(this.sprites);
              itemScene.pbFadeInScene();
            }
            break;
          case 5:
            if (yield(item.id, useType, idxBattler, -1, itemScene)) break;
            break;
        }
      }
    }
  }



function pbGetMoveScores() {
    let choices = [];
    let score;
    for (let idxMove = 0; idxMove < this.user.battler.moves.length; idxMove++) {
      let origMove = this.user.battler.moves[idxMove];
      // Unchoosable moves aren't considered
      if (!this.battle.pbCanChooseMove1111(this.user.index, idxMove, false)) {
        if (origMove.pp === 0 && origMove.totalPP > 0) {
          PBDebug.logAI(`${this.user.name} cannot use ${origMove.name} (no PP left)`);
        } else {
          PBDebug.logAI(`${this.user.name} cannot choose to use ${origMove.name}`);
        }
        continue;
      }
      // Set up move in class variables
      this.setUpMoveCheck(origMove);
      // Predict whether the move will fail (generally)
      if (this.trainer.hasSkillFlag("PredictMoveFailure") && this.pbPredictMoveFailure()) {
        PBDebug.logAI(`${this.user.name} is considering using ${origMove.name}...`);
        PBDebug.logScoreChange(MOVE_FAIL_SCORE - MOVE_BASE_SCORE, "move will fail");
        this.addMoveToChoices(choices, idxMove, MOVE_FAIL_SCORE);
        continue;
      }
      // Get the move's target type
      let targetData = this.move.pbTarget(this.user.battler);
      if (this.move.functionCode === "CurseTargetOrLowerUserSpd1RaiseUserAtkDef1" &&
          this.move.roughType === "GHOST" && this.user.hasActiveAbility(["LIBERO", "PROTEAN"])) {
        targetData = GameData.Target.get((Settings.MECHANICS_GENERATION >= 8) ? "RandomNearFoe" : "NearFoe");
      }
      switch (targetData.numTargets) {
        case 0:   // No targets, affects the user or a side or the whole field
            // Includes: BothSides, FoeSide, None, User, UserSide
            PBDebug.logAI(`${this.user.name} is considering using ${origMove.name}...`);
            score = MOVE_BASE_SCORE;
            try {
                score = this.pbGetMoveScore();
            } catch (e) {
                PBDebug.logOnError(e);
            }
            this.addMoveToChoices(choices, idxMove, score);
            break;
        case 1:   // One target to be chosen by the trainer
            // Includes: Foe, NearAlly, NearFoe, NearOther, Other, RandomNearFoe, UserOrNearAlly
            let redirectedTarget = this.getRedirectedTarget(targetData);
            let numTargets = 0;
            for (let b of this.battle.allBattlers) {
                if (redirectedTarget && b.index !== redirectedTarget) continue;
                if (!this.battle.pbMoveCanTarget(this.user.battler.index, b.index, targetData)) continue;
                if (targetData.targetsFoe && !this.user.battler.opposes(b)) continue;
                PBDebug.logAI(`${this.user.name} is considering using ${origMove.name} against ${b.name} (${b.index})...`);
                score = MOVE_BASE_SCORE;
                try {
                    score = this.pbGetMoveScore([b]);
                }
                catch (e) {
                    PBDebug.logOnError(e);
                }
                this.addMoveToChoices(choices, idxMove, score, b.index);
                numTargets++;
            }
            if (numTargets === 0) {
                PBDebug.log("     no valid targets");
            }
            break;
        default:   // Multiple targets at once
            // Includes: AllAllies, AllBattlers, AllFoes, AllNearFoes, AllNearOthers, UserAndAllies
            let targets = [];
            for (let b of this.battle.allBattlers) {
                if (!this.battle.pbMoveCanTarget(this.user.battler.index, b.index, targetData)) continue;
                targets.push(b);
            }
            PBDebug.logAI(`${this.user.name} is considering using ${origMove.name}...`);
            score = MOVE_BASE_SCORE;
            try {
                score = this.pbGetMoveScore(targets);
            }
            catch (e) {
                PBDebug.logOnError(e);
            }
            this.addMoveToChoices(choices, idxMove, score);
            break;
        }
    }
    this.battle.moldBreaker = false;
    return choices;
}





function pbCanChooseMove1111(idxBattler, idxMove, showMessages, sleepTalk = false) {
    const battler = this.battlers[idxBattler];
    const move = battler.moves[idxMove];
    if (!move) {
      return false;
    }
    if (move.pp === 0 && move.totalPp > 0 && !sleepTalk) {
      if (showMessages) {
        this.pbDisplayPaused('There\'s no PP left for this move!');
      }
      return false;
    }
    if (battler.effects.Encore > 0) {
      const idxEncoredMove = battler.pbEncoredMoveIndex();
      if (idxEncoredMove >= 0 && idxMove !== idxEncoredMove) {
        return false;
      }
    }
    return this.pbCanChooseMove2222(battler, move, true, showMessages, sleepTalk);
}

function pbCanChooseMove2222(move, commandPhase, showMessages = true, specialUsage = false) {
    // Disable
    if (this.effects[PBEffects.DisableMove] === move.id && !specialUsage) {
      if (showMessages) {
        let msg = _INTL("{1}'s {2} is disabled!", this.pbThis(), move.name);
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Heal Block
    if (this.effects[PBEffects.HealBlock] > 0 && move.healingMove()) {
      if (showMessages) {
        let msg = _INTL("{1} can't use {2} because of Heal Block!", this.pbThis(), move.name);
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Gravity
    if (this.battle.field.effects[PBEffects.Gravity] > 0 && move.unusableInGravity()) {
      if (showMessages) {
        let msg = _INTL("{1} can't use {2} because of gravity!", this.pbThis(), move.name);
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Throat Chop
    if (this.effects[PBEffects.ThroatChop] > 0 && move.soundMove()) {
      if (showMessages) {
        let msg = _INTL("{1} can't use {2} because of Throat Chop!", this.pbThis(), move.name);
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Choice Band/Gorilla Tactics
    if (this.effects[PBEffects.ChoiceBand] && move.id !== this.effects[PBEffects.ChoiceBand]) {
      let choicedMove = GameData.Move.tryGet(this.effects[PBEffects.ChoiceBand]);
      if (choicedMove) {
        if (this.hasActiveItem([PBItems.CHOICEBAND, PBItems.CHOICESPECS, PBItems.CHOICESCARF])) {
          if (showMessages) {
            let msg = _INTL("The {1} only allows the use of {2}!", this.itemName(), choicedMove.name);
            (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
          }
          return false;
        } else if (this.hasActiveAbility(PBAbilities.GORILLATACTICS)) {
          if (showMessages) {
            let msg = _INTL("{1} can only use {2}!", this.pbThis(), choicedMove.name);
            (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
          }
          return false;
        }
      }
    }
    // Taunt
    if (this.effects[PBEffects.Taunt] > 0 && move.statusMove() && !specialUsage) {
      if (showMessages) {
        let msg = _INTL("{1} can't use {2} after the taunt!", this.pbThis(), move.name);
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Torment
    if (this.effects[PBEffects.Torment] && !this.effects[PBEffects.Instructed] && !specialUsage &&
        this.lastMoveUsed && move.id === this.lastMoveUsed && move.id !== this.battle.struggle.id) {
      if (showMessages) {
        let msg = _INTL("{1} can't use the same move twice in a row due to the torment!", this.pbThis());
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Imprison
    if (this.battle.allOtherSideBattlers(this.index).some(b => b.effects[PBEffects.Imprison] && b.pbHasMove(move.id))) {
      if (showMessages) {
        let msg = _INTL("{1} can't use its sealed {2}!", this.pbThis(), move.name);
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Assault Vest (prevents choosing status moves but doesn't prevent executing them)
    if (this.hasActiveItem(PBItems.ASSAULTVEST) && move.statusMove() && move.functionCode !== "UseMoveTargetIsAboutToUse" && commandPhase) {
      if (showMessages) {
        let msg = _INTL("The effects of the {1} prevent status moves from being used!", this.itemName());
        (commandPhase) ? this.battle.pbDisplayPaused(msg) : this.battle.pbDisplay(msg);
      }
      return false;
    }
    // Belch
    return !move.pbCanChooseMove4444(this, commandPhase, showMessages);
}

function pbCanChooseMove4444(user, commandPhase, showMessages) {
    if (!user.belched) {
      if (showMessages) {
        let msg = `${user.pbThis()} hasn't eaten any held berry, so it can't possibly belch!`;
        if (commandPhase) {
          this.battle.pbDisplayPaused(msg);
        } else {
          this.battle.pbDisplay(msg);
        }
      }
      return false;
    }
    return true;
}

