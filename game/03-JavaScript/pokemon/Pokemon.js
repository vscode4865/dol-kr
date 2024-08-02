  class Pokemon {
    constructor(pokemonData, name, level, region = null, traitInput, genderInput) {
        this.id = Pokemon.generateId();
        this.name = name;
        this.species = pokemonData.name;
        this.isNickname = false;
        this.type = pokemonData.type; // 타입
        this.level = level;
        this.experience = 0;
        this.personality = Pokemon.generatePersonality(); // 성격
        if (traitInput){this.trait = traitInput;} else {this.trait = Pokemon.generateTrait(pokemonData.possibleTraits, pokemonData.hiddenTrait);}
        if (genderInput){this.gender = genderInput} else {this.gender = this.determineGender(pokemonData.genderRatio);} // 성별 결정
        this.experienceGroup = pokemonData.experienceGroup;
        this.regionalForm = this.determineRegionalForm(pokemonData, region);
        this.friendship = pokemonData.friendship;
        this.location = null;
        this.items = null;
        this.usedItems = null;
        this.traded = false;
        this.learnableSkills = setup.LearnableSkills[this.name]; // 배울 수 있는 기술 목록 설정
        this.knownSkills = []; // 현재 알고 있는 기술 목록 초기화
        this.rank = {attackRank: 0, defenseRank: 0, specialAttackRank:0, specialDefenseRank: 0,speedRank: 0, criticalRank: 0, accuracyRank: 0, evasionRank: 0,}; // 공격력 및 방어력 랭크 추가
        this.trainer = null;
        this.statusCon = [];


        this.effortValues = { HP: 0, Attack: 0, Defense: 0, SpecialAttack: 0, SpecialDefense: 0, Speed: 0 }; // 노력치
        this.baseStats = pokemonData.baseStats || Pokemon.generateDefaultBaseStats(); // 종족치
      
        // 성격에 따른 스탯 모디파이어 설정
        this.personalityModifiers = Pokemon.getPersonalityModifiers(this.personality);
        
        // 개체치
        this.individualValues = {
          HP: Pokemon.generateIV(),
          Attack: Pokemon.generateIV(),
          Defense: Pokemon.generateIV(),
          SpecialAttack: Pokemon.generateIV(),
          SpecialDefense: Pokemon.generateIV(),
          Speed: Pokemon.generateIV(),
        };
  
        // 스탯 추가
        this.stats = {
          maxHP: this.calculateHP(),
          currentHP: this.calculateHP(),
          Attack: this.calculateStat('Attack'),
          Defense: this.calculateStat('Defense'),
          SpecialAttack: this.calculateStat('SpecialAttack'),
          SpecialDefense: this.calculateStat('SpecialDefense'),
          Speed: this.calculateStat('Speed'),
        };

        //주석
  
        if (this.regionalForm) {
          this.type = this.regionalForm.type;
          this.gender = this.determineGender(this.regionalForm.genderRatio);
          this.baseStats = this.regionalForm.baseStats;
          this.trait = Pokemon.generateTrait(this.regionalForm.possibleTraits, this.regionalForm.hiddenTrait || pokemonData.hiddenTrait);
        }
  
        // 진화 정보 업데이트
        if (region && pokemonData.regionalForms) {
          const regionalForm = pokemonData.regionalForms.find(form => form.region === region);
          if (regionalForm) {
            if (regionalForm.evolvesTo) {
              this.evolvesTo = regionalForm.evolvesTo;
            }
            else {
              this.evolvesTo = pokemonData.evolvesTo;
            }
          }
        }
        else {
          this.evolvesTo = pokemonData.evolvesTo;
        }

        if (pokemonData.megaEvolvesTo) {
          this.megaEvolvesTo = pokemonData.megaEvolvesTo;
        }
    }

    static generateId() {
      return Math.floor(100000 + Math.random() * 900000);
    }

    determineRegionalForm(pokemonData, region) {
      if (!pokemonData.regionalForms || !region || region === null) return null;
      
      return pokemonData.regionalForms.find(form => form.region === region);
    }

    // 성별 결정
    determineGender(genderRatio) {
      if (genderRatio === null) return "무성"; // 성별 없음
      const random = Math.random(); // 0과 1 사이의 난수 생성
      return random < genderRatio ? "여성" : "남성";
    }

    // 성격 생성 메서드
    static generatePersonality() {
      const personalities = ["노력", "외로움", "고집", "개구쟁이", "용감", "대담", "온순", "장난꾸러기", "촐랑", "무사태평", "조심", "의젓", "수줍음", "덜렁", "냉정", "차분", "얌전", "신중", "변덕", "건방", "겁쟁이", "성급", "명랑", "천진난만", "성실",];
      return personalities[Math.floor(Math.random() * personalities.length)];
    }
    
    // 성격에 따른 능력치 증감 모디파이어
    static getPersonalityModifiers(personality) {
      const modifiers = {
        Attack: 1,
        Defense: 1,
        SpecialAttack: 1,
        SpecialDefense: 1,
        Speed: 1,
      };
      
      switch (personality) {
        case "노력":
          break;
        case "외로움":
          modifiers.Attack = 1.1;
          modifiers.Defense = 0.9;
          break;
        case "고집":
          modifiers.Attack = 1.1;
           modifiers.SpecialAttack = 0.9;
          break;
        case "개구쟁이":
          modifiers.Attack = 1.1;
          modifiers.SpecialDefense = 0.9;
          break;
        case "용감":
          modifiers.Attack = 1.1;
          modifiers.Speed = 0.9;
          break;
        case "대담":
          modifiers.Defense = 1.1;
          modifiers.Attack = 0.9;
          break;
        case "온순":
          break;
        case "장난꾸러기":
          modifiers.Defense = 1.1;
          modifiers.SpecialAttack = 0.9;
          break;
        case "촐랑":
          modifiers.Defense = 1.1;
          modifiers.SpecialDefense = 0.9;
          break;
        case "무사태평":
          modifiers.Defense = 1.1;
          modifiers.Speed = 0.9;
          break;
        case "조심":
          modifiers.SpecialAttack = 1.1;
          modifiers.Attack = 0.9;
          break;
        case "의젓":
          modifiers.SpecialAttack = 1.1;
          modifiers.Defense = 0.9;
          break;
        case "수줍음":
          break;
        case "덜렁":
          modifiers.SpecialAttack = 1.1;
          modifiers.SpecialDefense = 0.9;
          break;
        case "냉정":
          modifiers.SpecialAttack = 1.1;
          modifiers.Speed = 0.9;
          break;
        case "차분":
          modifiers.SpecialDefense = 1.1;
          modifiers.Attack = 0.9;
          break;
        case "얌전":
          modifiers.SpecialDefense = 1.1;
          modifiers.Defense = 0.9;
          break;
        case "신중":
          modifiers.SpecialDefense = 1.1;
          modifiers.SpecialAttack = 0.9;
          break;
        case "변덕":
          break;
        case "건방":
          modifiers.SpecialDefense = 1.1;
          modifiers.Speed = 0.9;
          break;
        case "겁쟁이":
          modifiers.Speed = 1.1;
          modifiers.Attack = 0.9;
          break;
        case "성급":
          modifiers.Speed = 1.1;
          modifiers.Defense = 0.9;
          break;
        case "명랑":
          modifiers.Speed = 1.1;
          modifiers.SpecialAttack = 0.9;
          break;
        case "천진난만":
          modifiers.Speed = 1.1;
          modifiers.SpecialDefense = 0.9;
          break;
         case "성실":
          break;
        // 필요시 더 많은 성격 추가 가능
        default:
          break;
      }
      
      return modifiers;
    }

    // 개체값 생성 메서드
    static generateIV() {
      return Math.floor(Math.random() * 32); // 0에서 31까지의 무작위 값
    }

    static generateDefaultBaseStats() {
      // 포켓몬의 기본 종족치를 반환.
      return { maxHP: 50, currentHP: 50, Attack: 50, Defense: 50, SpecialAttack: 50, SpecialDefense: 50, Speed: 50 };
    }

    // 위치 (지방)
    setLocation(string) {
      this.location = string;
    }

    // 친밀도
    gainFriendship(amount) {
      this.friendship += amount;
    }

    // 시간 설정, 임시
    setTime(amount) {
      this.time = amount;
    }


    // 특성 및 숨겨진 특성 결정 메서드
    static generateTrait(possibleTraits, hiddenTrait, region) {
      const hiddenTraitProbabilities = {
        default: 0, // 기본 확률
        specialRegion: 0.20 // 특정 지역에서의 확률
      };

      const regionHiddenTraitProbability = hiddenTraitProbabilities[region] || hiddenTraitProbabilities.default;

      if (Math.random() < regionHiddenTraitProbability) {
        return hiddenTrait; // 숨겨진 특성 반환
      }
      else {
        // 기존 특성 선택 로직
        if (!Array.isArray(possibleTraits) || possibleTraits.length === 0) {
          console.error('possibleTraits는 유효한 배열이어야 합니다.');
          return null; // 또는 기본값을 반환
        }
        return possibleTraits[Math.floor(Math.random() * possibleTraits.length)];
      }
    }

    static updateTrait(thisaa, nowTrait, possibleTraits, hiddenTrait, region){

      if (thisaa.isHiddenTrait === true){
        return hiddenTrait;
      }
      else {
        // 기존 특성 선택 로직
        if (!Array.isArray(possibleTraits) || possibleTraits.length === 0) {
          console.log('possibleTraits는 유효한 배열이어야 합니다.');
          return null; // 또는 기본값을 반환
        }
        else if (thisaa.isMegaEvolution === true){
          return thisaa.originalTarit;
        }
        else if(thisaa.trait === nowTrait[0]){
          console.log("0번");
          return possibleTraits[0];
        }
        else if(thisaa.trait === nowTrait[1]){
          console.log("1번");
          return possibleTraits[1];
        }
      }
    }

    static updateMegaTrait(possibleTraits, region){
      return possibleTraits[0];
    }

    gainExperience(amount) {
      if (this.level == 100){
        this.experience += 0;
      }
      else{
        this.experience += amount;
        this.checkLevelUp();
        return(`${amount}만큼의 경험치를 얻었다!`);
      }
    }

    // 레벨업 필요 경험치 계산
    calculateExperienceForNextLevel() {
      const n = this.level + 1;
      let requiredExperience;
      switch (this.experienceGroup) {
        case "Fast":
          requiredExperience = (4 * Math.pow(n, 3)) / 5;
          break;
        case "Slightly Fast":
          requiredExperience = Math.pow(n, 3);
          break;
        case "Slightly Slow":
          requiredExperience = (6 / 5) * Math.pow(n, 3) - 15 * Math.pow(n, 2) + 100 * n - 140;
          break;
        case "Slow":
          requiredExperience = (5 * Math.pow(n, 3)) / 4;
          break;
        case "Erratic":
          if (n < 50) {
            requiredExperience = (Math.pow(n, 3) * (100 - n)) / 50;
          } else if (n < 68) {
            requiredExperience = (Math.pow(n, 3) * (150 - n)) / 100;
          } else if (n < 98) {
            requiredExperience = (Math.pow(n, 3) * (1911 - 10 * n)) / 3;
          } else if (n < 100) {
            requiredExperience = (Math.pow(n, 3) * (160 - n)) / 100;
          }
          break;
        case "Fluctuating":
          if (n < 15) {
            requiredExperience = (Math.pow(n, 3) * ((n + 1) / 3 + 24)) / 50;
          } else if (n < 36) {
            requiredExperience = (Math.pow(n, 3) * (n + 14)) / 50;
          } else if (n < 100) {
            requiredExperience = (Math.pow(n, 3) * (n / 2 + 32)) / 50;
          }
          break;
        default:
          throw new Error("Unknown experience group");
      }
      return requiredExperience;
    }
    
    // 레벨 업
    checkLevelUp() {
      let leveledUp = false;
      while (this.experience >= this.calculateExperienceForNextLevel()) {
        if (this.level == 100){
          this.experience = 0;
          break;
        }
        this.experience -= this.calculateExperienceForNextLevel();
        this.level++;
        console.log(`${this.name}은(는) 레벨 ${this.level}로 레벨업했다!`);
        leveledUp = true;
        this.evolve(); // 레벨업 후 진화 확인
        this.checkLevelUpSkills();
      }
      // 레벨업이 있었다면 스탯을 업데이트합니다.
      if (leveledUp) {
        this.updateStats();
      }
    }

    checkLevelUpSkills() {
      const levelSkills = setup.LevelUpSkills[this.name];
      if (levelSkills && levelSkills[this.level]) {
          const skillName = levelSkills[this.level];
          if (this.learnSkill(skillName)) {
            return(`${this.name}이(가) 레벨 ${this.level}에 ${skillName}을(를) 배웠습니다.`);
          }
      }
    }

    // 스탯 업데이트 메서드
    updateStats() {
      const temporaryHP = this.stats.maxHP;
      const temporaryHP2 = temporaryHP - this.stats.currentHP
      this.stats.maxHP = this.calculateHP();
      this.stats.currentHP = this.stats.maxHP - temporaryHP2;
      this.stats.Attack = this.calculateStat('Attack');
      this.stats.Defense = this.calculateStat('Defense');
      this.stats.SpecialAttack = this.calculateStat('SpecialAttack');
      this.stats.SpecialDefense = this.calculateStat('SpecialDefense');
      this.stats.Speed = this.calculateStat('Speed');
      return(`${this.name}의 스탯이 업데이트되었습니다.`);
    }

    // HP 스탯 계산
    calculateHP() {
      const a = this.baseStats.HP;
      const b = this.individualValues.HP;
      const c = this.effortValues.HP;
      const Lv = this.level;
      return Math.floor((2 * a + b + c / 4 + 100) * (Lv / 100)) + 10;
    }

    // 그외 스탯 계산
    calculateStat(statName) {
      const a = this.baseStats[statName];
      const b = this.individualValues[statName];
      const c = this.effortValues[statName];
      const Lv = this.level;
      const d = this.personalityModifiers[statName];
      const TemporaryStatValues = Math.floor(((2 * a + b + c / 4) * (Lv / 100)) + 5);
      return Math.floor(TemporaryStatValues * d);
    }

    learnSkill(skillName) {
      const skill = setup.Skills.find(s => s.name === skillName);
      if (this.learnableSkills.includes(skillName) && !this.knownSkills.some(s => s.name === skillName)) {
        this.knownSkills.push(skill);
        return(`${this.name}이(가) ${skillName}을(를) 배웠습니다.`);
      }
      else {
        return(`${this.name}은(는) ${skillName}을(를) 배울 수 없습니다.`);
      }
    }

    movescoreThreshold() {
      const minSkill = Math.min(this.trainer.skill, 100);
      return 0.6 + (0.35 * Math.pow(minSkill / 100.0, 0.5)); // 0.635 to 0.95
    }


    useSkill(skillName, opponent) {
      const opponent2 = opponent;
      const skill = this.knownSkills.find(s => s.name === skillName);
      const skillName2 = skillName;
      if (!skill) {
        return `//////${this.knownSkills[0].name}, 이 포켓몬은 해당 기술을 사용할 수 없습니다.`;
      }
      else if (skill.PP <= 0) {
        return `${skillName}의 PP가 부족합니다!`;
      }


      if (skill.PP == 0) {
        skill.PP = 0;
      }
      else {
        skill.PP -= 1; // PP 감소
      }


      if (skill.category === "변화") {
        if (skill.rank) {
          return this.applyRankChange(skillName2, opponent2);
        }
        if (skill.statusCon) {
          opponent.statusCon = skill.statusCon;
          return opponent.statusCon
        }
      }
      // 기술 사용 로직
      let damage = this.calculateDamage(skillName2, opponent2);
      //let damage = (this.stats.Attack  + skill.power) - opponent.stats.Defense;
      if (damage < 0) damage = 0; // 최소 피해량 보장
      opponent.stats.currentHP -= damage;
      return damage;
    }

    calculateDamage(skillName, opponent) {
      const opponent3 = opponent;
      const skill = this.knownSkills.find(s => s.name === skillName);
      const skill2 = skillName;
      const trait = this.trait
      // 예시: 데미지 계산을 위한 파라미터 사용 예시
      let calculateAttack = 1; // 공격 또는 특수공격 스탯
      let calculateDefense = 1; // 방어 또는 특방 스탯
      let critical = this.calculateCritical(); // 급소
      let randomFactor = this.getRandomFactor(); // 랜덤 수
      let stab = 1; //자속보정
      let typeModifier = this.calculateType(skill2, opponent3);
      let battleWeather = "rain";
      let battleWeatherModifier = 1;

      if (critical == false) {
        critical = 1;
      }
      else if (critical == true) {
        critical = 1.5;
      }
      

      if (this.type.includes(skill.type)) {
        stab = this.trait == "적응력" ? 2 : 1.5;
      }

      if (trait === "날씨부정" || trait === "에어록") {
        battleWeatherModifier = 1;
      }
      else if (battleWeather === "rain") {
        battleWeatherModifier = (skill.type === "물") ? 1.5 : ((skill.type === "불꽃") ? 0.5 : 1);
      }
      else if (battleWeather === "sun") {
        if (skill.type === "불꽃" || skill === "하이드로스팀") {
          battleWeatherModifier = 1.5;
        } else if (skill.type === "물") {
          battleWeatherModifier = 0.5;
        }
      }

      // AA와 BB 계산
      if (skill == "속임수") {
        calculateAttack = opponent.stats.Attack;
        calculateDefense = opponent.stats.Defense;
      }
      else if (skill == "바디프레스") {
        calculateAttack = this.stats.Defense;
        calculateDefense = opponent.stats.Defense;
      }
      else {
        // 물리 공격이거나 특수 공격인 경우에 대한 처리
        if (skill.category == "물리") {
          calculateAttack = this.stats.Attack;
          calculateDefense = opponent.stats.Defense;
        }
        else if (skill.category == "특수") {
          calculateAttack = this.stats.SpecialAttack;
          calculateDefense = (skill.physicalSpecial == true) ? opponent.stats.Defense : opponent.stats.SpecialDefense;
        }
      }

  
      // 데미지 계산
      let damage1 = (((((2 * this.level)/ 5 + 2) * skill.power * (calculateAttack/calculateDefense)) / 50 + 2) * battleWeatherModifier * critical * randomFactor * stab * typeModifier);
      return Math.floor(damage1);
    }

    calculateType(skillName, opponent) {
      const skill = this.knownSkills.find(s => s.name === skillName);
      let typeEffectiveness = 1; // 기본 효과값 설정
    
      const effectiveness = setup.typeCompatibility;
    
      // 스킬 유형에 따른 효과 계산
      const typeRules = effectiveness[skill.type];
      if (typeRules) {
        for (const [effect, types] of Object.entries(typeRules)) {
          let match = false; // 일치 여부를 확인하는 변수
          if (effect === "매우강함" || effect === "매우약함") {
            match = types.some(typeCombo => typeCombo.every(type => opponent.type.includes(type)));
          } else {
            match = types.some(type => opponent.type.includes(type));
          }
          
          if (match) {
            switch (effect) {
              case "강함":
                return 2;
              case "약함":
                return 0.5;
              case "매우강함":
                return 4;
              case "매우약함":
                return 0.25;
              case "무효":
                return 0;
              default:
                return 1;
            }
          }
        }
      }
    
      return typeEffectiveness;
    }

    
    getRandomFactor() {
      // 랜덤 수 생성 로직
      const randomValues = [85, 87, 89, 90, 92, 94, 96, 98, 86, 88, 91, 93, 95, 97, 99, 100];
      const weights = [7.69, 7.69, 7.69, 7.69, 7.69, 7.69, 7.69, 7.69, 5.13, 5.13, 5.13, 5.13, 5.13, 5.13, 5.13, 2.56]; // 확률 가중치
      let totalWeight = weights.reduce((acc, val) => acc + val, 0);
      let randomNum = Math.random() * totalWeight;
  
      for (let i = 0; i < randomValues.length; i++) {
          if (randomNum < weights[i]) {
            const temporaryRandomValues = randomValues[i];
            const temporaryRandomValues2 = temporaryRandomValues / 100
            return Math.round(temporaryRandomValues2);
          }
          randomNum -= weights[i];
        }
    }

    applyRankChange(skill, opponent) {
      let target = skill.target === 0 ? this : opponent;
      const rankTypes = {
        "attackRank": "공격력",
        "defenceRank": "방어력",
        "specialAttackRank": "특수공격력",
        "specialDefenseRank": "특수방어력",
        "speedRank": "스피드",
        "criticalRank": "크리티컬",
        "accuracyRank": "명중률",
        "evasionRank": "회피율"
      };
      const rankType = rankTypes[skill.rank];
    
      if (!rankType) {
        console.log("랭크 변화 기술을 사용하는 중 알 수 없는 오류가 발생했습니다.");
        return;
      }
    
      let currentRank = target.rank[`${skill.rank}`];
      let maxRank = skill.rank === "criticalRank" ? 3 : 6; // criticalRank에 대한 조건 추가
      if (currentRank >= maxRank) {
        return `${target.name}의 ${rankType} 랭크는 이미 최대치다!`;
      }
      else {
        target.rank[`${skill.rank}`] += skill.rankChange;
        // 랭크가 maxRank를 초과하지 않도록 조정
        if(target.rank[`${skill.rank}`] > maxRank) {
          target.rank[`${skill.rank}`] = maxRank;
        }
        return `${target.name}의 ${rankType} 랭크가 ${skill.rankChange > 0 ? '증가' : '감소'}했다.`;
      }
    }

    calculateCritical(){
      switch(this.rank.criticalRank){
        case 0:
          return Math.random() < 0.0417
        case 1:
          return Math.random() < 0.125
        case 2:
          return Math.random() < 0.5
        case 3:
          return Math.random() < 1
      }
    }

    /*
    statusConLoseHP(opponent, statusCon) {
      if (this.statusCon.includes("맹독")){

        const dotPoison = this.stats.maxHP / 8;
        const _currentHP = this.stats.currentHP;
        this.stats.currentHP = _currentHP - dotPoison;
      }
      for (; this.statusCon.includes("맹독"); ){

      }
    }
    */
    
    
    heal(amount) {
      this.stats.currentHP += amount;
      if (this.stats.currentHP > this.stats.maxHP) {
        this.stats.currentHP = this.stats.maxHP; // 최대 체력을 초과하지 않도록 함
      }
      return (`${this.name}의 체력이 ${amount}만큼 회복되다.`);
    }

    // 상태 이상 회복 메서드
    healStatus(conditions) {
      conditions.forEach(condition => {
        const index = this.statusCon.indexOf(condition);
        if (index > -1) {
          this.statusCon.splice(index, 1); // 상태 이상 제거
          return (`${this.name}의 상태 이상 "${condition}"이(가) 회복되었다.`);
        }
      });
    }
    
    setNickname(name){
      this.name = name;
      this.isNickname = true;
    }


    checkPP(skillName) {
      const skill = this.knownSkills[skillName];
      return skill.PP
    }

    attackOpponent(opponent) {
      // 상대 포켓몬 공격 로직
      let damage = this.stats.Attack - opponent.stats.Defense;
      if (damage < 0) damage = 0;
      opponent.stats.HP -= damage;
      return damage;
    }

    // 아이템
    hasItem(string) {
      this.items = string;
      return;
    }

    useItem(string, ) {
      this.usedItems = string;
      this.evolve();
      return;
    }

    setTrainer(trainer) {
      const settrainer = setup.Battler.find(s => s.name === trainer);
      this.trainer = settrainer;
      return;
    }

    evolve() {
      if (!this.evolvesTo) return;
    
      const evolveRegion = ["알로라", "가라르", "히스이", "팔데아"];
    
      // evolvesTo가 배열인 경우와 아닌 경우 모두를 처리할 수 있도록 수정
      const evolvesToArray = Array.isArray(this.evolvesTo) ? this.evolvesTo : [this.evolvesTo];
      
      for (const evolveTo of evolvesToArray) {
        const canEvolve = this.checkEvolutionCondition(evolveTo);
        // 진화 조건을 충족하는 첫 번째 경우에 대해서만 진화 처리
        if (canEvolve) {
          const thisPokemon = this;
          const thisPokemonName = setup.pokemonData.find(pokemon => pokemon.name === this.species);
          const evolvedPokemonData = setup.pokemonData.find(pokemon => pokemon.name === evolveTo.name);
          
          if (!evolvedPokemonData) continue; // 진화 대상 정보가 없으면 건너뜀
          const updatePokemonData = (data) => {
            this.species = data.name;
            if(this.isNickname == false){
              this.name = data.name;
            }
            this.type = data.type;
            this.baseStats = data.baseStats;
            this.trait = Pokemon.updateTrait(thisPokemon, thisPokemonName.possibleTraits, data.possibleTraits, data.hiddenTrait);
            this.evolvesTo = data.evolvesTo;
            this.updateStats();
            
          };
    
          if (evolvedPokemonData.regionalForms) {
            const regionalEvolution = evolvedPokemonData.regionalForms.find(form => evolveRegion.includes(form.region));
            const evolvedPokemonRegion = regionalEvolution.region;
            const updateRegionalPokemonData = (data) => {
              this.regionalForm = data.regionalForms;
              this.species = regionalEvolution.name || data.name;
              if(this.isNickname == false){
                this.name = regionalEvolution.name || data.name;
              }
              this.type = regionalEvolution.type || data.type;
              this.baseStats = regionalEvolution.baseStats || data.baseStats;
              this.trait = Pokemon.updateTrait(thisPokemon, thisPokemonName.possibleTraits, regionalEvolution.possibleTraits, regionalEvolution.hiddenTrait || thisPokemon, thisPokemon.possibleTraits, data.possibleTraits, data.hiddenTrait);
              this.evolvesTo = regionalEvolution.evolvesTo || data.evolvesTo;
              
            };
            
            if (canEvolve && this.regionalForm && evolvedPokemonData.regionalForms) {
              // 진화 전 개체가 리전폼인데 진화 후 개체도 리전폼일 경우
              console.log(`${this.name}은(는) ${this.evolvesTo.name}(으)로 진화했다!`);
              updateRegionalPokemonData(evolvedPokemonData);
            }
            else if (canEvolve && (this.regionalForm == null) && (this.location == evolvedPokemonRegion)) {
              // 진화 전 개체는 일반형인데, 진화 후 개체중에 리전폼이 있고, 현재 위치가 해당 리전폼이 나타나는 지방일 경우. (피카츄 -> 알로라 라이츄)
              console.log(`${this.name}은(는) ${this.evolvesTo.name}(으)로 진화했다!`);
              updateRegionalPokemonData(evolvedPokemonData);
            }
            else if(canEvolve) {
              // 진화 전 개체 데이터에 리전폼 형태가 있긴 한데, 개체 자체는 일반형인 경우
              console.log(`${this.name}은(는) ${this.evolvesTo.name}(으)로 진화했다!`);
              updatePokemonData(evolvedPokemonData);
            }
          }
          else if (this.isMegaEvolution === true){
            console.log(`${this.species}은(는) ${evolveTo.name}(으)로 되돌아왔다!`);
            this.species = data.name;
            this.type = data.type;
            this.baseStats = data.baseStats;
            this.trait = this.originalTarit;
            this.originalTarit = null;
            this.evolvesTo = data.evolvesTo;
            this.updateStats();
          }
          else {
            updatePokemonData(evolvedPokemonData);
            return(`${this.name}은(는) ${evolveTo.name}(으)로 진화했다!`);
          }
          
          break; // 조건을 만족하는 첫 번째 진화 대상으로 처리 후 반복 중단
        }
      }
    }
    
    checkEvolutionCondition(evolutionData) {
      let conditionsMet = true;
    
      if (evolutionData.atLevel) {
        conditionsMet = conditionsMet && this.level >= evolutionData.atLevel;
      }
    
      if (evolutionData.time) {
        if (evolutionData.time === "night") {
          conditionsMet = conditionsMet && (this.time >= 18 || this.time < 6);
        }
        // 'day'와 같은 다른 시간 조건 추가
      }

      if (evolutionData.traded && evolutionData.hasItem) {
        conditionsMet = conditionsMet && this.traded == evolutionData.traded && this.items == evolutionData.hasItem;
        this.items = null;
      }
    
      if (evolutionData.hasItem) {
        conditionsMet = conditionsMet && this.items == evolutionData.hasItem;
      }

      if (evolutionData.usediItem) {
        conditionsMet = conditionsMet && this.usedItems == evolutionData.usediItem;
        this.usedItems = null;
      }
    
      if (evolutionData.gender) {
        conditionsMet = conditionsMet && this.gender == evolutionData.gender;
      }
    
      if (evolutionData.friendship) {
        conditionsMet = conditionsMet && this.friendship >= evolutionData.friendship;
      }

      if (evolutionData.traded) {
        conditionsMet = conditionsMet && this.traded == evolutionData.traded;
      }

      if (evolutionData.not_region) {
        conditionsMet = conditionsMet && this.location != evolutionData.not_region;
      }
    
      return conditionsMet;
    }

    megaEvolve(){
      if (!this.megaEvolvesTo) return;

      const megaEvolvesToArray = Array.isArray(this.megaEvolvesTo) ? this.megaEvolvesTo : [this.megaEvolvesTo];

      for (const megaEvolvesTo of megaEvolvesToArray) {
        const canMegaEvolve = this.checkEvolutionCondition(megaEvolvesTo);
        // 진화 조건을 충족하는 첫 번째 경우에 대해서만 진화 처리
        if (canMegaEvolve) {
          const thisPokemon = this;
          const thisPokemonName = setup.pokemonData.find(pokemon => pokemon.name === this.species);
          const evolvedPokemonData = setup.megaEvolutionData.find(pokemon => pokemon.name === megaEvolvesTo.name);
          
          if (!evolvedPokemonData) continue; // 진화 대상 정보가 없으면 건너뜀
          const updatePokemonData = (data) => {
            this.isMegaEvolution = true;
            this.originalTarit = this.trait;
            this.species = data.name;
            this.type = data.type;
            this.baseStats = data.baseStats;
            this.trait = Pokemon.updateMegaTrait(data.possibleTraits);
            this.evolvesTo = data.evolvesTo;
            this.updateStats();
            
          };
          console.log(`${this.name}은(는) ${evolveTo.name}(으)로 메가진화했다!`);
          updatePokemonData(evolvedPokemonData);
          
          break; // 조건을 만족하는 첫 번째 진화 대상으로 처리 후 반복 중단
        }
      }

    }

  }
window.Pokemon = Pokemon;

class SummonPokemon {
  static summonPokemon3(summonTargetPokemon, name, level, region = null, traitInput, genderInput) {
    const pokemonData = setup.pokemonData[summonTargetPokemon];
    return new Pokemon(pokemonData, name, level, region, traitInput, genderInput);
  }
}
window.SummonPokemon = SummonPokemon;

var pokemonStorage = [];

function addPokemonToStorage(pokemon) {
    pokemonStorage[pokemon.id] = pokemon;
}


// 파티에 포켓몬 추가 함수 수정
function addPokemonToParty(pokemon, trainer) {
  if (setup.trainerParty[trainer].length < 6) {
    setup.trainerParty[trainer].push(pokemon);
  } else {
    console.log(`${trainer} 파티에 더 이상 포켓몬을 추가할 수 없습니다.`);
  }
}
window.addPokemonToParty = addPokemonToParty;


//const AAA = SummonPokemon.summonPokemon3(1, "이상해씨", 1)



//AAA.gainExperience(1);
//console.log(AAA);
//console.log(window.AAA);
