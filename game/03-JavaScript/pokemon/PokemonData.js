setup.pokemonData = [
    { 
        "name": "0번 포켓몬",
        "type": ["노말"],
        "possibleTraits": ["싱크로"],
        "experienceGroup": "Slow",
        "baseStats": { "HP": 1, "Attack": 1, "Defense": 1, "SpecialAttack": 1, "SpecialDefense": 1, "Speed": 1 },
        "genderRatio": null,
        "evolvesTo": null,
        "friendship": 0
    },
    { 
        "name": "이상해씨",
        "type": ["풀", "독"],
        "possibleTraits": ["심록"],
        "hiddenTrait": "엽록소",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 45, "Attack": 49, "Defense": 49, "SpecialAttack": 65, "SpecialDefense": 65, "Speed": 45 },
        "evolvesTo": {"name": "이상해풀", "atLevel": 16},
        "genderRatio": 0.125,
        "friendship": 50
    },
    { 
        "name": "이상해풀",
        "type": ["풀", "독"],
        "possibleTraits": ["심록"],
        "hiddenTrait": "엽록소",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 60, "Attack": 62, "Defense": 63, "SpecialAttack": 80, "SpecialDefense": 80, "Speed": 60 },
        "evolvesTo": {"name": "이상해꽃", "atLevel": 32},
        "genderRatio": 0.125,
        "friendship": 50
    },
    { 
        "name": "이상해꽃",
        "type": ["풀", "독"],
        "possibleTraits": ["심록"],
        "hiddenTrait": "엽록소",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 80, "Attack": 82, "Defense": 83, "SpecialAttack": 100, "SpecialDefense": 100, "Speed": 80 },
        "genderRatio": 0.125,
        "evolvesTo": null,
        "megaEvolvesTo": {"name": "메가이상해꽃", "hasItem": "이상해꽃나이트"},
        "friendship": 50
    },
    { 
        "name": "파이리",
        "type": ["불꽃"],
        "possibleTraits": ["맹화"],
        "hiddenTrait": "선파워",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 39, "Attack": 52, "Defense": 43, "SpecialAttack": 60, "SpecialDefense": 50, "Speed": 65 },
        "evolvesTo": {"name": "리자드", "atLevel": 16},
        "genderRatio": 0.125,
        "friendship": 50
    },
    { 
        "name": "리자드",
        "type": ["불꽃"],
        "possibleTraits": ["맹화"],
        "hiddenTrait": "선파워",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 58, "Attack": 64, "Defense": 58, "SpecialAttack": 80, "SpecialDefense": 65, "Speed": 80 },
        "evolvesTo": {"name": "리자몽", "atLevel": 36},
        "genderRatio": 0.125,
        "friendship": 50
    },
    { 
        "name": "리자몽",
        "type": ["불꽃", "비행"],
        "possibleTraits": ["맹화"],
        "hiddenTrait": "선파워",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 78, "Attack": 84, "Defense": 78, "SpecialAttack": 109, "SpecialDefense": 85, "Speed": 100 },
        "genderRatio": 0.125,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "꼬부기",
        "type": ["물"],
        "possibleTraits": ["급류"],
        "hiddenTrait": "젖은접시",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 44, "Attack": 48, "Defense": 65, "SpecialAttack": 50, "SpecialDefense": 64, "Speed": 43 },
        "evolvesTo": {"name": "어니부기", "atLevel": 16},
        "genderRatio": 0.125,
        "friendship": 50
    },
    { 
        "name": "어니부기",
        "type": ["물"],
        "possibleTraits": ["급류"],
        "hiddenTrait": "젖은접시",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 59, "Attack": 63, "Defense": 80, "SpecialAttack": 65, "SpecialDefense": 80, "Speed": 58 },
        "evolvesTo": {"name": "거북왕", "atLevel": 36},
        "genderRatio": 0.125,
        "friendship": 50
    },
    { 
        "name": "거북왕",
        "type": ["물"],
        "possibleTraits": ["급류"],
        "hiddenTrait": "젖은접시",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 79, "Attack": 83, "Defense": 100, "SpecialAttack": 85, "SpecialDefense": 105, "Speed": 78 },
        "genderRatio": 0.125,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "캐터피",
        "type": ["벌레"],
        "possibleTraits": ["인분"],
        "hiddenTrait": "도주",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 45, "Attack": 30, "Defense": 35, "SpecialAttack": 20, "SpecialDefense": 20, "Speed": 45 },
        "evolvesTo": {"name": "단데기", "atLevel": 7},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "단데기",
        "type": ["벌레"],
        "possibleTraits": ["탈피"],
        "hiddenTrait": "탈피",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 50, "Attack": 20, "Defense": 55, "SpecialAttack": 25, "SpecialDefense": 25, "Speed": 30 },
        "evolvesTo": {"name": "버터플", "atLevel": 10},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "버터플",
        "type": ["벌레", "비행"],
        "possibleTraits": ["복안"],
        "hiddenTrait": "색안경",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 45, "Defense": 50, "SpecialAttack": 90, "SpecialDefense": 80, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "뿔충이",
        "type": ["벌레", "독"],
        "possibleTraits": ["인분"],
        "hiddenTrait": "도주",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 40, "Attack": 35, "Defense": 30, "SpecialAttack": 20, "SpecialDefense": 20, "Speed": 50 },
        "evolvesTo": {"name": "딱충이", "atLevel": 7},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "딱충이",
        "type": ["벌레", "독"],
        "possibleTraits": ["탈피"],
        "hiddenTrait": "탈피",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 45, "Attack": 25, "Defense": 50, "SpecialAttack": 25, "SpecialDefense": 25, "Speed": 35 },
        "evolvesTo": {"name": "독침붕", "atLevel": 10},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "독침붕",
        "type": ["벌레", "독"],
        "possibleTraits": ["벌레의알림"],
        "hiddenTrait": "스나이퍼",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 65, "Attack": 90, "Defense": 40, "SpecialAttack": 45, "SpecialDefense": 80, "Speed": 75 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "구구",
        "type": ["노말", "비행"],
        "possibleTraits": ["날카로운눈", "갈지자걸음"],
        "hiddenTrait": "부풀린가슴",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 40, "Attack": 45, "Defense": 40, "SpecialAttack": 35, "SpecialDefense": 35, "Speed": 56 },
        "evolvesTo": {"name": "피죤", "atLevel": 18},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "피죤",
        "type": ["노말", "비행"],
        "possibleTraits": ["날카로운눈", "갈지자걸음"],
        "hiddenTrait": "부풀린가슴",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 63, "Attack": 60, "Defense": 55, "SpecialAttack": 50, "SpecialDefense": 50, "Speed": 71 },
        "evolvesTo": {"name": "피죤투", "atLevel": 36},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "피죤투",
        "type": ["노말", "비행"],
        "possibleTraits": ["날카로운눈", "갈지자걸음"],
        "hiddenTrait": "부풀린가슴",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 83, "Attack": 80, "Defense": 75, "SpecialAttack": 70, "SpecialDefense": 70, "Speed": 101 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "꼬렛",
        "type": ["노말"],
        "possibleTraits": ["도주", "근성"],
        "hiddenTrait": "의욕",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 30, "Attack": 56, "Defense": 35, "SpecialAttack": 25, "SpecialDefense": 35, "Speed": 72 },
        "evolvesTo": {"name": "레트라", "atLevel": 20},
        "genderRatio": 0.5,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["노말", "악"],
                "possibleTraits": ["의욕", "먹보"],
                "hiddenTrait": "두꺼운지방",
                "baseStats": { "HP": 30, "Attack": 56, "Defense": 35, "SpecialAttack": 25, "SpecialDefense": 35, "Speed": 72 }
            }
        ]
    },
    { 
        "name": "레트라",
        "type": ["노말"],
        "possibleTraits": ["도주", "근성"],
        "hiddenTrait": "의욕",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 55, "Attack": 81, "Defense": 60, "SpecialAttack": 50, "SpecialDefense": 70, "Speed": 97 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["노말", "악"],
                "possibleTraits": ["의욕", "먹보"],
                "hiddenTrait": "두꺼운지방",
                "baseStats": { "HP": 75, "Attack": 71, "Defense": 70, "SpecialAttack": 40, "SpecialDefense": 80, "Speed": 77 }
            }
        ]
    },
    { 
        "name": "깨비참",
        "type": ["노말", "비행"],
        "possibleTraits": ["날카로운눈"],
        "hiddenTrait": "스나이퍼",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 40, "Attack": 60, "Defense": 30, "SpecialAttack": 31, "SpecialDefense": 31, "Speed": 70 },
        "evolvesTo": {"name": "깨비드릴조", "atLevel": 20},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "깨비드릴조",
        "type": ["노말", "비행"],
        "possibleTraits": ["날카로운눈"],
        "hiddenTrait": "스나이퍼",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 65, "Attack": 90, "Defense": 65, "SpecialAttack": 61, "SpecialDefense": 61, "Speed": 100 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "아보",
        "type": ["독"],
        "possibleTraits": ["위협", "탈피"],
        "hiddenTrait": "긴장감",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 35, "Attack": 60, "Defense": 44, "SpecialAttack": 40, "SpecialDefense": 54, "Speed": 55 },
        "evolvesTo": {"name": "아보크", "atLevel": 22},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "아보크",
        "type": ["독"],
        "possibleTraits": ["위협", "탈피"],
        "hiddenTrait": "긴장감",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 95, "Defense": 69, "SpecialAttack": 65, "SpecialDefense": 79, "Speed": 80 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "피카츄",
        "type": ["전기"],
        "possibleTraits": ["정전기"],
        "hiddenTrait": "피뢰침",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 35, "Attack": 55, "Defense": 40, "SpecialAttack": 50, "SpecialDefense": 50, "Speed": 90 },
        "evolvesTo": {"name": "라이츄", "usediItem": "천둥의돌"},
        "genderRatio": 0.5,
        "friendship": 50
    },
    { 
        "name": "라이츄",
        "type": ["전기"],
        "possibleTraits": ["정전기"],
        "hiddenTrait": "피뢰침",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 90, "Defense": 55, "SpecialAttack": 90, "SpecialDefense": 80, "Speed": 110 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["전기", "에스퍼"],
                "possibleTraits": ["서핑테일"],
                "hiddenTrait": "서핑테일",
                "baseStats": { "HP": 60, "Attack": 85, "Defense": 50, "SpecialAttack": 95, "SpecialDefense": 85, "Speed": 110 }
            }
        ]
    },
    { 
        "name": "모래두지",
        "type": ["땅"],
        "possibleTraits": ["모래숨기"],
        "hiddenTrait": "모래헤치기",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 50, "Attack": 75, "Defense": 85, "SpecialAttack": 20, "SpecialDefense": 30, "Speed": 40 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "고지", "atLevel": 22},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["얼음", "강철"],
                "possibleTraits": ["눈숨기"],
                "hiddenTrait": "눈치우기",
                "baseStats": { "HP": 50, "Attack": 75, "Defense": 90, "SpecialAttack": 10, "SpecialDefense": 35, "Speed": 40 },
                "evolvesTo": {"name": "고지", "usediItem": "얼음의돌"}
            }
        ]
    },
    { 
        "name": "고지",
        "type": ["땅"],
        "possibleTraits": ["모래숨기"],
        "hiddenTrait": "모래헤치기",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 75, "Attack": 100, "Defense": 110, "SpecialAttack": 45, "SpecialDefense": 55, "Speed": 65 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["얼음", "강철"],
                "possibleTraits": ["눈숨기"],
                "hiddenTrait": "눈치우기",
                "baseStats": { "HP": 75, "Attack": 100, "Defense": 120, "SpecialAttack": 25, "SpecialDefense": 65, "Speed": 65 }
            }
        ]
    },
    { 
        "name": "니드런♀",
        "type": ["독"],
        "possibleTraits": ["독가시", "투쟁심"],
        "hiddenTrait": "의욕",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 55, "Attack": 47, "Defense": 52, "SpecialAttack": 40, "SpecialDefense": 40, "Speed": 41 },
        "genderRatio": 1,
        "evolvesTo": {"name": "니드리나", "atLevel": 16},
        "friendship": 50
    },
    { 
        "name": "니드리나",
        "type": ["독"],
        "possibleTraits": ["독가시", "투쟁심"],
        "hiddenTrait": "의욕",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 70, "Attack": 62, "Defense": 67, "SpecialAttack": 55, "SpecialDefense": 55, "Speed": 56 },
        "genderRatio": 1,
        "evolvesTo": {"name": "니드퀸", "usediItem": "달의돌"},
        "friendship": 50
    },
    { 
        "name": "니드퀸",
        "type": ["독", "땅"],
        "possibleTraits": ["독가시", "투쟁심"],
        "hiddenTrait": "우격다짐",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 90, "Attack": 92, "Defense": 87, "SpecialAttack": 75, "SpecialDefense": 85, "Speed": 76 },
        "genderRatio": 1,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "니드런♂",
        "type": ["독"],
        "possibleTraits": ["독가시", "투쟁심"],
        "hiddenTrait": "의욕",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 46, "Attack": 57, "Defense": 40, "SpecialAttack": 40, "SpecialDefense": 40, "Speed": 50 },
        "genderRatio": 0,
        "evolvesTo": {"name": "니드리노", "atLevel": 16},
        "friendship": 50
    },
    { 
        "name": "니드리노",
        "type": ["독"],
        "possibleTraits": ["독가시", "투쟁심"],
        "hiddenTrait": "의욕",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 61, "Attack": 72, "Defense": 57, "SpecialAttack": 55, "SpecialDefense": 55, "Speed": 65 },
        "genderRatio": 0,
        "evolvesTo": {"name": "니드킹", "usediItem": "달의돌"},
        "friendship": 50
    },
    { 
        "name": "니드킹",
        "type": ["독", "땅"],
        "possibleTraits": ["독가시", "투쟁심"],
        "hiddenTrait": "우격다짐",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 81, "Attack": 102, "Defense": 77, "SpecialAttack": 85, "SpecialDefense": 75, "Speed": 85 },
        "genderRatio": 0,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "삐삐",
        "type": ["페어리"],
        "possibleTraits": ["헤롱헤롱바디", "매직가드"],
        "hiddenTrait": "프렌드가드",
        "experienceGroup": "Fast",
        "baseStats": { "HP": 70, "Attack": 45, "Defense": 48, "SpecialAttack": 60, "SpecialDefense": 65, "Speed": 35 },
        "genderRatio": 0.75,
        "evolvesTo": {"name": "픽시", "usediItem": "달의돌"},
        "friendship": 140
    },
    { 
        "name": "픽시",
        "type": ["페어리"],
        "possibleTraits": ["헤롱헤롱바디", "매직가드"],
        "hiddenTrait": "천진",
        "experienceGroup": "Fast",
        "baseStats": { "HP": 95, "Attack": 70, "Defense": 73, "SpecialAttack": 95, "SpecialDefense": 90, "Speed": 60 },
        "genderRatio": 0.75,
        "evolvesTo": null,
        "friendship": 140
    },
    { 
        "name": "식스테일",
        "type": ["불꽃"],
        "possibleTraits": ["타오르는불꽃"],
        "hiddenTrait": "가뭄",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 38, "Attack": 41, "Defense": 40, "SpecialAttack": 50, "SpecialDefense": 65, "Speed": 65 },
        "genderRatio": 0.75,
        "evolvesTo": {"name": "나인테일", "usediItem": "불꽃의돌"},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["얼음"],
                "possibleTraits": ["눈숨기"],
                "hiddenTrait": "눈퍼뜨리기",
                "baseStats": { "HP": 38, "Attack": 41, "Defense": 40, "SpecialAttack": 50, "SpecialDefense": 65, "Speed": 65 },
                "evolvesTo": {"name": "나인테일", "usediItem": "얼음의돌"}
            }
        ]
    },
    { 
        "name": "나인테일",
        "type": ["불꽃"],
        "possibleTraits": ["타오르는불꽃"],
        "hiddenTrait": "가뭄",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 73, "Attack": 76, "Defense": 75, "SpecialAttack": 81, "SpecialDefense": 100, "Speed": 100 },
        "genderRatio": 0.75,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["얼음", "페어리"],
                "possibleTraits": ["눈숨기"],
                "hiddenTrait": "눈퍼뜨리기",
                "baseStats": { "HP": 73, "Attack": 67, "Defense": 75, "SpecialAttack": 81, "SpecialDefense": 100, "Speed": 109 }
            }
        ]
    },
    { 
        "name": "푸린",
        "type": ["노말", "페어리"],
        "possibleTraits": ["헤롱헤롱바디", "승기"],
        "hiddenTrait": "프렌드가드",
        "experienceGroup": "Fast",
        "baseStats": { "HP": 115, "Attack": 45, "Defense": 20, "SpecialAttack": 45, "SpecialDefense": 25, "Speed": 20 },
        "genderRatio": 0.75,
        "evolvesTo": {"name": "푸크린", "usediItem": "달의돌"},
        "friendship": 50
    },
    { 
        "name": "푸크린",
        "type": ["노말", "페어리"],
        "possibleTraits": ["헤롱헤롱바디", "승기"],
        "hiddenTrait": "통찰",
        "experienceGroup": "Fast",
        "baseStats": { "HP": 140, "Attack": 70, "Defense": 45, "SpecialAttack": 85, "SpecialDefense": 50, "Speed": 45 },
        "genderRatio": 0.75,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "주뱃",
        "type": ["독", "비행"],
        "possibleTraits": ["정신력"],
        "hiddenTrait": "틈새포착",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 40, "Attack": 45, "Defense": 35, "SpecialAttack": 30, "SpecialDefense": 40, "Speed": 55 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "골뱃", "atLevel": 22},
        "friendship": 50
    },
    { 
        "name": "골뱃",
        "type": ["독", "비행"],
        "possibleTraits": ["정신력"],
        "hiddenTrait": "틈새포착",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 75, "Attack": 80, "Defense": 70, "SpecialAttack": 65, "SpecialDefense": 75, "Speed": 90 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "크로뱃", "friendship": 160},
        "friendship": 50
    },
    { 
        "name": "뚜벅쵸",
        "type": ["풀", "독"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "도주",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 45, "Attack": 50, "Defense": 55, "SpecialAttack": 75, "SpecialDefense": 65, "Speed": 30 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "냄새꼬", "atLevel": 21},
        "friendship": 50
    },
    { 
        "name": "냄새꼬",
        "type": ["풀", "독"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "악취",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 60, "Attack": 65, "Defense": 70, "SpecialAttack": 85, "SpecialDefense": 75, "Speed": 40 },
        "genderRatio": 0.5,
        "evolvesTo": [
            {"name": "라플레시아", "usediItem": "리프의돌"},
            {"name": "아르코", "usediItem": "태양의돌"}
        ],
        "friendship": 50
    },
    { 
        "name": "라플레시아",
        "type": ["풀", "독"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "포자",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 75, "Attack": 80, "Defense": 85, "SpecialAttack": 110, "SpecialDefense": 90, "Speed": 50 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "파라스",
        "type": ["벌레", "풀"],
        "possibleTraits": ["포자", "건조피부"],
        "hiddenTrait": "습기",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 35, "Attack": 70, "Defense": 55, "SpecialAttack": 45, "SpecialDefense": 55, "Speed": 25 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "파라섹트", "atLevel": 24},
        "friendship": 50
    },
    { 
        "name": "파라섹트",
        "type": ["벌레", "풀"],
        "possibleTraits": ["포자", "건조피부"],
        "hiddenTrait": "습기",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 95, "Defense": 80, "SpecialAttack": 60, "SpecialDefense": 80, "Speed": 30 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "콘팡",
        "type": ["벌레", "독"],
        "possibleTraits": ["복안", "색안경"],
        "hiddenTrait": "도주",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 55, "Defense": 50, "SpecialAttack": 40, "SpecialDefense": 55, "Speed": 45 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "도나리", "atLevel": 31},
        "friendship": 50
    },
    { 
        "name": "도나리",
        "type": ["벌레", "독"],
        "possibleTraits": ["인분", "색안경"],
        "hiddenTrait": "미라클스킨",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 70, "Attack": 65, "Defense": 60, "SpecialAttack": 90, "SpecialDefense": 75, "Speed": 90 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "디그다",
        "type": ["땅"],
        "possibleTraits": ["모래숨기", "개미지옥"],
        "hiddenTrait": "모래의힘",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 10, "Attack": 55, "Defense": 25, "SpecialAttack": 35, "SpecialDefense": 45, "Speed": 95 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "닥트리오", "atLevel": 26},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["땅", "강철"],
                "possibleTraits": ["모래숨기", "컬리헤어"],
                "hiddenTrait": "모래의힘",
                "baseStats": { "HP": 10, "Attack": 55, "Defense": 30, "SpecialAttack": 35, "SpecialDefense": 45, "Speed": 90 }
            }
        ]
    },
    { 
        "name": "닥트리오",
        "type": ["땅"],
        "possibleTraits": ["모래숨기", "개미지옥"],
        "hiddenTrait": "모래의힘",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 35, "Attack": 100, "Defense": 50, "SpecialAttack": 50, "SpecialDefense": 70, "Speed": 120 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["땅", "강철"],
                "possibleTraits": ["모래숨기", "컬리헤어"],
                "hiddenTrait": "모래의힘",
                "baseStats": { "HP": 35, "Attack": 100, "Defense": 60, "SpecialAttack": 50, "SpecialDefense": 70, "Speed": 110 }
            }
        ]
    },
    { 
        "name": "나옹",
        "type": ["노말"],
        "possibleTraits": ["픽업", "테크니션"],
        "hiddenTrait": "긴장감",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 40, "Attack": 45, "Defense": 35, "SpecialAttack": 40, "SpecialDefense": 40, "Speed": 90 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "페르시온", "atLevel": 28},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["악"],
                "possibleTraits": ["픽업", "테크니션"],
                "hiddenTrait": "주눅",
                "baseStats": { "HP": 40, "Attack": 35, "Defense": 35, "SpecialAttack": 50, "SpecialDefense": 40, "Speed": 90 },
                "evolvesTo": {"name": "페르시온", "friendship": 160}
            },
            {
                "region": "가라르",
                "type": ["강철"],
                "possibleTraits": ["픽업", "단단한발톱"],
                "hiddenTrait": "긴장감",
                "baseStats": { "HP": 50, "Attack": 65, "Defense": 55, "SpecialAttack": 40, "SpecialDefense": 40, "Speed": 40 },
                "evolvesTo": {"name": "나이킹", "atLevel": 28}
            }
        ]
    },
    { 
        "name": "페르시온",
        "type": ["노말"],
        "possibleTraits": ["유연", "테크니션"],
        "hiddenTrait": "긴장감",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 65, "Attack": 70, "Defense": 60, "SpecialAttack": 65, "SpecialDefense": 65, "Speed": 115 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["악"],
                "possibleTraits": ["픽업", "테크니션"],
                "hiddenTrait": "주눅",
                "baseStats": { "HP": 65, "Attack": 60, "Defense": 60, "SpecialAttack": 75, "SpecialDefense": 65, "Speed": 115 }
            }
        ]
    },
    { 
        "name": "고라파덕",
        "type": ["물"],
        "possibleTraits": ["습기", "날씨부정"],
        "hiddenTrait": "쓱쓱",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 50, "Attack": 52, "Defense": 48, "SpecialAttack": 65, "SpecialDefense": 50, "Speed": 55 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "골덕", "atLevel": 33},
        "friendship": 50
    },
    { 
        "name": "골덕",
        "type": ["물"],
        "possibleTraits": ["습기", "날씨부정"],
        "hiddenTrait": "쓱쓱",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 80, "Attack": 82, "Defense": 78, "SpecialAttack": 95, "SpecialDefense": 80, "Speed": 85 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "망키",
        "type": ["격투"],
        "possibleTraits": ["의기양양", "분노의경혈"],
        "hiddenTrait": "오기",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 40, "Attack": 80, "Defense": 35, "SpecialAttack": 35, "SpecialDefense": 45, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "성원숭", "atLevel": 28},
        "friendship": 50
    },
    { 
        "name": "성원숭",
        "type": ["격투"],
        "possibleTraits": ["의기양양", "분노의경혈"],
        "hiddenTrait": "오기",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 65, "Attack": 105, "Defense": 60, "SpecialAttack": 60, "SpecialDefense": 70, "Speed": 95 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "가디",
        "type": ["불꽃"],
        "possibleTraits": ["타오르는불꽃", "위협"],
        "hiddenTrait": "정의의마음",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 55, "Attack": 70, "Defense": 45, "SpecialAttack": 70, "SpecialDefense": 50, "Speed": 60 },
        "genderRatio": 0.25,
        "evolvesTo": {"name": "윈디", "usediItem": "불꽃의돌"},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "히스이",
                "type": ["불꽃", "바위"],
                "possibleTraits": ["타오르는불꽃", "위협"],
                "hiddenTrait": "돌머리",
                "baseStats": { "HP": 60, "Attack": 75, "Defense": 45, "SpecialAttack": 65, "SpecialDefense": 50, "Speed": 55 }
            }
        ]
    },
    { 
        "name": "윈디",
        "type": ["불꽃"],
        "possibleTraits": ["타오르는불꽃", "위협"],
        "hiddenTrait": "정의의마음",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 90, "Attack": 110, "Defense": 80, "SpecialAttack": 100, "SpecialDefense": 80, "Speed": 95 },
        "genderRatio": 0.25,
        "evolvesTo": {"name": "윈디", "atLevel": 28},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "히스이",
                "type": ["불꽃", "바위"],
                "possibleTraits": ["타오르는불꽃", "위협"],
                "hiddenTrait": "돌머리",
                "baseStats": { "HP": 95, "Attack": 115, "Defense": 80, "SpecialAttack": 95, "SpecialDefense": 80, "Speed": 90 }
            }
        ]
    },
    { 
        "name": "발챙이",
        "type": ["물"],
        "possibleTraits": ["저수", "습기"],
        "hiddenTrait": "쓱쓱",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 40, "Attack": 50, "Defense": 40, "SpecialAttack": 40, "SpecialDefense": 40, "Speed": 90 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "슈륙챙이", "atLevel": 25},
        "friendship": 50
    },
    { 
        "name": "슈륙챙이",
        "type": ["물"],
        "possibleTraits": ["저수", "습기"],
        "hiddenTrait": "쓱쓱",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 65, "Attack": 65, "Defense": 65, "SpecialAttack": 50, "SpecialDefense": 50, "Speed": 90 },
        "genderRatio": 0.5,
        "evolvesTo": [
            {"name": "강챙이", "usediItem": "물의돌"},
            {"name": "왕구리", "hasItem": "왕의징표석", "traded": true}
        ],
        "friendship": 50
    },
    { 
        "name": "강챙이",
        "type": ["물"],
        "possibleTraits": ["저수", "습기"],
        "hiddenTrait": "쓱쓱",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 90, "Attack": 95, "Defense": 95, "SpecialAttack": 70, "SpecialDefense": 90, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "캐이시",
        "type": ["에스퍼"],
        "possibleTraits": ["싱크로", "정신력"],
        "hiddenTrait": "매직가드",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 25, "Attack": 20, "Defense": 15, "SpecialAttack": 105, "SpecialDefense": 55, "Speed": 90 },
        "genderRatio": 0.25,
        "evolvesTo": {"name": "윤겔라", "atLevel": 16},
        "friendship": 50
    },
    { 
        "name": "윤겔라",
        "type": ["에스퍼"],
        "possibleTraits": ["싱크로", "정신력"],
        "hiddenTrait": "매직가드",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 40, "Attack": 35, "Defense": 30, "SpecialAttack": 120, "SpecialDefense": 70, "Speed": 105 },
        "genderRatio": 0.25,
        "evolvesTo": {"name": "후딘", "traded": true},
        "friendship": 50
    },
    { 
        "name": "후딘",
        "type": ["에스퍼"],
        "possibleTraits": ["싱크로", "정신력"],
        "hiddenTrait": "매직가드",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 55, "Attack": 50, "Defense": 45, "SpecialAttack": 135, "SpecialDefense": 95, "Speed": 120 },
        "genderRatio": 0.25,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "알통몬",
        "type": ["격투"],
        "possibleTraits": ["근성", "노가드"],
        "hiddenTrait": "불굴의마음",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 70, "Attack": 80, "Defense": 50, "SpecialAttack": 35, "SpecialDefense": 35, "Speed": 35 },
        "genderRatio": 0.25,
        "evolvesTo": {"name": "근육몬", "atLevel": 28},
        "friendship": 50
    },
    { 
        "name": "근육몬",
        "type": ["격투"],
        "possibleTraits": ["근성", "노가드"],
        "hiddenTrait": "불굴의마음",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 80, "Attack": 100, "Defense": 70, "SpecialAttack": 50, "SpecialDefense": 60, "Speed": 45 },
        "genderRatio": 0.25,
        "evolvesTo": {"name": "괴력몬", "traded": true},
        "friendship": 50
    },
    { 
        "name": "괴력몬",
        "type": ["격투"],
        "possibleTraits": ["근성", "노가드"],
        "hiddenTrait": "불굴의마음",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 90, "Attack": 130, "Defense": 80, "SpecialAttack": 65, "SpecialDefense": 85, "Speed": 55 },
        "genderRatio": 0.25,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "모다피",
        "type": ["풀", "독"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "먹보",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 50, "Attack": 75, "Defense": 35, "SpecialAttack": 70, "SpecialDefense": 30, "Speed": 40 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "우츠동", "atLevel": 21},
        "friendship": 50
    },
    { 
        "name": "우츠동",
        "type": ["풀", "독"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "먹보",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 65, "Attack": 90, "Defense": 50, "SpecialAttack": 85, "SpecialDefense": 45, "Speed": 55 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "우츠보트", "usediItem": "리프의돌"},
        "friendship": 50
    },
    { 
        "name": "우츠보트",
        "type": ["풀", "독"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "먹보",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 80, "Attack": 105, "Defense": 65, "SpecialAttack": 100, "SpecialDefense": 70, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "왕눈해",
        "type": ["물", "독"],
        "possibleTraits": ["클리어바디", "해감액"],
        "hiddenTrait": "젖은접시",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 40, "Attack": 40, "Defense": 35, "SpecialAttack": 50, "SpecialDefense": 100, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "독파리", "atLevel": 30},
        "friendship": 50
    },
    { 
        "name": "독파리",
        "type": ["물", "독"],
        "possibleTraits": ["클리어바디", "해감액"],
        "hiddenTrait": "젖은접시",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 80, "Attack": 70, "Defense": 65, "SpecialAttack": 80, "SpecialDefense": 120, "Speed": 100 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "꼬마돌",
        "type": ["바위", "땅"],
        "possibleTraits": ["옹골참", "돌머리"],
        "hiddenTrait": "모래숨기",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 40, "Attack": 80, "Defense": 100, "SpecialAttack": 30, "SpecialDefense": 30, "Speed": 20 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "데구리", "atLevel": 25},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["바위", "전기"],
                "possibleTraits": ["옹골참", "자력"],
                "hiddenTrait": "일렉트릭스킨",
                "baseStats": { "HP": 40, "Attack": 80, "Defense": 100, "SpecialAttack": 30, "SpecialDefense": 30, "Speed": 20 }
            }
        ]
    },
    { 
        "name": "데구리",
        "type": ["바위", "땅"],
        "possibleTraits": ["옹골참", "돌머리"],
        "hiddenTrait": "모래숨기",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 55, "Attack": 95, "Defense": 115, "SpecialAttack": 45, "SpecialDefense": 45, "Speed": 35 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "딱구리", "traded": true},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["바위", "전기"],
                "possibleTraits": ["옹골참", "자력"],
                "hiddenTrait": "일렉트릭스킨",
                "baseStats": { "HP": 55, "Attack": 95, "Defense": 115, "SpecialAttack": 45, "SpecialDefense": 45, "Speed": 35 }
            }
        ]
    },
    { 
        "name": "딱구리",
        "type": ["바위", "땅"],
        "possibleTraits": ["옹골참", "돌머리"],
        "hiddenTrait": "모래숨기",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 80, "Attack": 120, "Defense": 130, "SpecialAttack": 55, "SpecialDefense": 65, "Speed": 45 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["바위", "전기"],
                "possibleTraits": ["옹골참", "자력"],
                "hiddenTrait": "일렉트릭스킨",
                "baseStats": { "HP": 80, "Attack": 120, "Defense": 130, "SpecialAttack": 55, "SpecialDefense": 65, "Speed": 45 }
            }
        ]
    },
    { 
        "name": "포니타",
        "type": ["불꽃"],
        "possibleTraits": ["도주", "타오르는불꽃"],
        "hiddenTrait": "불꽃몸",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 50, "Attack": 85, "Defense": 55, "SpecialAttack": 65, "SpecialDefense": 65, "Speed": 90 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "날쌩마", "atLevel": 40},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "가라르",
                "type": ["에스퍼"],
                "possibleTraits": ["도주", "파스텔베일"],
                "hiddenTrait": "위험예지",
                "baseStats": { "HP": 50, "Attack": 85, "Defense": 55, "SpecialAttack": 65, "SpecialDefense": 65, "Speed": 90 }
            }
        ]
    },
    { 
        "name": "날쌩마",
        "type": ["불꽃"],
        "possibleTraits": ["도주", "타오르는불꽃"],
        "hiddenTrait": "불꽃몸",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 65, "Attack": 100, "Defense": 70, "SpecialAttack": 80, "SpecialDefense": 80, "Speed": 105 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "가라르",
                "type": ["에스퍼", "페어리"],
                "possibleTraits": ["도주", "파스텔베일"],
                "hiddenTrait": "위험예지",
                "baseStats": { "HP": 65, "Attack": 100, "Defense": 70, "SpecialAttack": 80, "SpecialDefense": 80, "Speed": 105 }
            }
        ]
    },
    { 
        "name": "야돈",
        "type": ["물", "에스퍼"],
        "possibleTraits": ["마이페이스", "둔감"],
        "hiddenTrait": "재생력",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 90, "Attack": 65, "Defense": 65, "SpecialAttack": 40, "SpecialDefense": 40, "Speed": 15 },
        "genderRatio": 0.5,
        "evolvesTo": [
            {"name": "야도란", "atLevel": 37},
            {"name": "야도킹", "hasItem": "왕의징표석", "traded": true}
        ],
        "friendship": 50,
        "regionalForms": [
            {
                "region": "가라르",
                "type": ["에스퍼"],
                "possibleTraits": ["마이페이스", "먹보"],
                "baseStats": { "HP": 90, "Attack": 65, "Defense": 65, "SpecialAttack": 40, "SpecialDefense": 40, "Speed": 15 },
                "evolvesTo": [
                    {"name": "야도란", "usedItem": "가라두구팔찌"},
                    {"name": "야도킹", "usedItem": "가라두구머리장식"}
                ]
            }
        ]
    },
    { 
        "name": "야도란",
        "type": ["물", "에스퍼"],
        "possibleTraits": ["마이페이스", "둔감"],
        "hiddenTrait": "재생력",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 95, "Attack": 75, "Defense": 110, "SpecialAttack": 100, "SpecialDefense": 80, "Speed": 30 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "가라르",
                "type": ["독", "에스퍼"],
                "possibleTraits": ["마이페이스", "퀵드로"],
                "baseStats": { "HP": 95, "Attack": 100, "Defense": 95, "SpecialAttack": 100, "SpecialDefense": 70, "Speed": 30 }
            }
        ]
    },
    { 
        "name": "코일",
        "type": ["전기", "강철"],
        "possibleTraits": ["옹골참", "자력"],
        "hiddenTrait": "애널라이즈",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 25, "Attack": 35, "Defense": 70, "SpecialAttack": 95, "SpecialDefense": 55, "Speed": 45 },
        "genderRatio": null,
        "evolvesTo": {"name": "레어코일", "atLevel": 30},
        "friendship": 50
    },
    { 
        "name": "레어코일",
        "type": ["전기", "강철"],
        "possibleTraits": ["옹골참", "자력"],
        "hiddenTrait": "애널라이즈",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 50, "Attack": 60, "Defense": 95, "SpecialAttack": 120, "SpecialDefense": 70, "Speed": 70 },
        "genderRatio": null,
        "evolvesTo": {"name": "자포코일", "usediItem": "천둥의돌"},
        "friendship": 50
    },
    { 
        "name": "파오리",
        "type": ["노말", "비행"],
        "possibleTraits": ["날카로운눈", "정신력"],
        "hiddenTrait": "오기",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 52, "Attack": 90, "Defense": 55, "SpecialAttack": 58, "SpecialDefense": 62, "Speed": 60 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "가라르",
                "type": ["격투"],
                "possibleTraits": ["불굴의마음"],
                "hiddenTrait": "배짱",
                "baseStats": { "HP": 52, "Attack": 95, "Defense": 55, "SpecialAttack": 58, "SpecialDefense": 62, "Speed": 55 },
                "evolvesTo": {"name": "창파나이트", "atLevel": 10000}
            }
        ]
    },
    { 
        "name": "두두",
        "type": ["노말", "비행"],
        "possibleTraits": ["도주", "일찍기상"],
        "hiddenTrait": "갈지자걸음",
        "baseStats": { "HP": 35, "Attack": 85, "Defense": 45, "SpecialAttack": 35, "SpecialDefense": 35, "Speed": 75 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "두트리오", "atLevel": "31"},
        "friendship": 50
    },
    { 
        "name": "두트리오",
        "type": ["노말", "비행"],
        "possibleTraits": ["도주", "일찍기상"],
        "hiddenTrait": "갈지자걸음",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 110, "Defense": 70, "SpecialAttack": 60, "SpecialDefense": 60, "Speed": 110 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "쥬쥬",
        "type": ["물"],
        "possibleTraits": ["두꺼운지방", "촉촉바디"],
        "hiddenTrait": "아이스바디",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 65, "Attack": 45, "Defense": 55, "SpecialAttack": 45, "SpecialDefense": 70, "Speed": 45 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "쥬레곤", "atLevel": "34"},
        "friendship": 50
    },
    { 
        "name": "쥬레곤",
        "type": ["물"],
        "possibleTraits": ["두꺼운지방", "촉촉바디"],
        "hiddenTrait": "아이스바디",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 90, "Attack": 70, "Defense": 80, "SpecialAttack": 70, "SpecialDefense": 95, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "질퍽이",
        "type": ["독"],
        "possibleTraits": ["악취", "점착"],
        "hiddenTrait": "독수",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 80, "Attack": 80, "Defense": 50, "SpecialAttack": 40, "SpecialDefense": 50, "Speed": 25 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "질뻐기", "atLevel": "38"},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["독", "악"],
                "possibleTraits": ["독수", "먹보"],
                "hiddenTrait": "화학의힘",
                "baseStats": { "HP": 80, "Attack": 80, "Defense": 50, "SpecialAttack": 40, "SpecialDefense": 50, "Speed": 25 }
            }
        ]
    },
    { 
        "name": "질뻐기",
        "type": ["독"],
        "possibleTraits": ["악취", "점착"],
        "hiddenTrait": "독수",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 105, "Attack": 105, "Defense": 75, "SpecialAttack": 65, "SpecialDefense": 100, "Speed": 50 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["독", "악"],
                "possibleTraits": ["독수", "먹보"],
                "hiddenTrait": "화학의힘",
                "baseStats": { "HP": 105, "Attack": 105, "Defense": 75, "SpecialAttack": 65, "SpecialDefense": 100, "Speed": 50 }
            }
        ]
    },
    { 
        "name": "셀러",
        "type": ["물"],
        "possibleTraits": ["조가비갑옷", "스킬링크"],
        "hiddenTrait": "방진",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 30, "Attack": 65, "Defense": 100, "SpecialAttack": 45, "SpecialDefense": 25, "Speed": 40 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "파르셀", "usediItem": "물의돌"},
        "friendship": 50
    },
    { 
        "name": "파르셀",
        "type": ["물", "얼음"],
        "possibleTraits": ["조가비갑옷", "스킬링크"],
        "hiddenTrait": "방진",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 50, "Attack": 95, "Defense": 180, "SpecialAttack": 85, "SpecialDefense": 45, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "고오스",
        "type": ["고스트", "독"],
        "possibleTraits": ["부유"],
        "hiddenTrait": "부유",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 30, "Attack": 35, "Defense": 30, "SpecialAttack": 100, "SpecialDefense": 35, "Speed": 80 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "고우스트", "atLevel": 25},
        "friendship": 50
    },
    { 
        "name": "고우스트",
        "type": ["고스트", "독"],
        "possibleTraits": ["부유"],
        "hiddenTrait": "부유",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 45, "Attack": 50, "Defense": 45, "SpecialAttack": 115, "SpecialDefense": 55, "Speed": 95 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "팬텀", "traded": true},
        "friendship": 50
    },
    { 
        "name": "팬텀",
        "type": ["고스트", "독"],
        "possibleTraits": ["저주받은바디"],
        "hiddenTrait": "저주받은바디",
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 60, "Attack": 65, "Defense": 60, "SpecialAttack": 130, "SpecialDefense": 75, "Speed": 110 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "롱스톤",
        "type": ["바위", "땅"],
        "possibleTraits": ["옹골참", "돌머리"],
        "hiddenTrait": "깨어진갑옷",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 35, "Attack": 45, "Defense": 160, "SpecialAttack": 30, "SpecialDefense": 45, "Speed": 70 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "강철톤", "hasItem":"강철코트", "traded": true},
        "friendship": 50
    },
    { 
        "name": "슬리프",
        "type": ["에스퍼"],
        "possibleTraits": ["불면", "예지몽"],
        "hiddenTrait": "정신력",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 48, "Defense": 45, "SpecialAttack": 43, "SpecialDefense": 90, "Speed": 42 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "슬리퍼", "atLevel": 26},
        "friendship": 50
    },
    { 
        "name": "슬리퍼",
        "type": ["에스퍼"],
        "possibleTraits": ["불면", "예지몽"],
        "hiddenTrait": "정신력",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 85, "Attack": 73, "Defense": 70, "SpecialAttack": 73, "SpecialDefense": 115, "Speed": 67 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "크랩",
        "type": ["물"],
        "possibleTraits": ["괴력집게", "조가비갑옷"],
        "hiddenTrait": "우격다짐",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 30, "Attack": 105, "Defense": 90, "SpecialAttack": 25, "SpecialDefense": 25, "Speed": 50 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "킹크랩", "atLevel": 28},
        "friendship": 50
    },
    { 
        "name": "킹크랩",
        "type": ["물"],
        "possibleTraits": ["괴력집게", "조가비갑옷"],
        "hiddenTrait": "우격다짐",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 55, "Attack": 130, "Defense": 115, "SpecialAttack": 50, "SpecialDefense": 50, "Speed": 75 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "찌리리공",
        "type": ["전기"],
        "possibleTraits": ["방음", "정전기"],
        "hiddenTrait": "유폭",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 40, "Attack": 30, "Defense": 50, "SpecialAttack": 55, "SpecialDefense": 55, "Speed": 100 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "붐볼", "atLevel": "30"},
        "friendship": 50,
        "regionalForms": [
            {
                "region": "히스이",
                "type": ["전기", "풀"],
                "possibleTraits": ["방음", "정전기"],
                "hiddenTrait": "유폭",
                "baseStats": { "HP": 40, "Attack": 30, "Defense": 50, "SpecialAttack": 55, "SpecialDefense": 55, "Speed": 100 },
                "evolvesTo": {"name": "붐볼", "usediItem": "리프의돌"}
            }
        ]
    },
    { 
        "name": "붐볼",
        "type": ["전기"],
        "possibleTraits": ["방음", "정전기"],
        "hiddenTrait": "유폭",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 60, "Attack": 50, "Defense": 70, "SpecialAttack": 80, "SpecialDefense": 80, "Speed": 150 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "히스이",
                "type": ["전기", "풀"],
                "possibleTraits": ["방음", "정전기"],
                "hiddenTrait": "유폭",
                "baseStats": { "HP": 60, "Attack": 50, "Defense": 70, "SpecialAttack": 80, "SpecialDefense": 80, "Speed": 150 }
            }
        ]
    },
    { 
        "name": "아라리",
        "type": ["풀", "에스퍼"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "수확",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 60, "Attack": 40, "Defense": 80, "SpecialAttack": 60, "SpecialDefense": 45, "Speed": 40 },
        "genderRatio": 0.5,
        "evolvesTo": {"name": "나시", "usediItem": "리프의돌"},
        "friendship": 50
    },
    { 
        "name": "나시",
        "type": ["풀", "에스퍼"],
        "possibleTraits": ["엽록소"],
        "hiddenTrait": "수확",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 95, "Attack": 95, "Defense": 85, "SpecialAttack": 125, "SpecialDefense": 75, "Speed": 55 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["풀", "드래곤"],
                "possibleTraits": ["통찰"],
                "baseStats": { "HP": 95, "Attack": 105, "Defense": 85, "SpecialAttack": 125, "SpecialDefense": 75, "Speed": 45 }
            }
        ]
    },
    { 
        "name": "탕구리",
        "type": ["땅"],
        "possibleTraits": ["피뢰침", "돌머리"],
        "hiddenTrait": "전투무장",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 50, "Attack": 50, "Defense": 95, "SpecialAttack": 40, "SpecialDefense": 50, "Speed": 35 },
        "genderRatio": 0.5,
        "evolvesTo": [
            {"name": "텅구리", "atLevel": 28, "not_region": "알로라"},
            {"name": "텅구리", "atLevel": 28, "time": "night"}
        ],
        "friendship": 50
    },
    { 
        "name": "텅구리",
        "type": ["땅"],
        "possibleTraits": ["피뢰침", "돌머리"],
        "hiddenTrait": "전투무장",
        "experienceGroup": "Slow",
        "baseStats": { "HP": 60, "Attack": 80, "Defense": 110, "SpecialAttack": 50, "SpecialDefense": 80, "Speed": 45 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50,
        "regionalForms": [
            {
                "region": "알로라",
                "type": ["불꽃", "고스트"],
                "possibleTraits": ["피뢰침", "저주받은바디"],
                "hiddenTrait": "돌머리",
                "baseStats": { "HP": 60, "Attack": 80, "Defense": 110, "SpecialAttack": 50, "SpecialDefense": 80, "Speed": 45 }
            }
        ]
    },





















    { 
        "name": "왕구리",
        "type": ["물"],
        "possibleTraits": ["습기", "저수", "잔비"],
        "experienceGroup": "Slightly Slow",
        "baseStats": { "HP": 90, "Attack": 75, "Defense": 75, "SpecialAttack": 90, "SpecialDefense": 100, "Speed": 70 },
        "genderRatio": 0.25,
        "evolvesTo": null,
        "friendship": 50
    },

    












    { 
        "name": "랄토스",
        "type": ["에스퍼", "페어리"],
        "possibleTraits": ["싱크로", "트레이스", "텔레파시"],
        "experienceGroup": "Slow",
        "baseStats": { "HP": 28, "Attack": 25, "Defense": 25, "SpecialAttack": 45, "SpecialDefense": 35, "Speed": 40 },
        "evolvesTo": {"name": "킬리아", "atLevel": 20},
        "genderRatio": 0.5,
        "friendship": 35
    },
    { 
        "name": "킬리아",
        "type": ["에스퍼", "페어리"],
        "possibleTraits": ["싱크로", "트레이스", "텔레파시"],
        "experienceGroup": "Slow",
        "baseStats": { "HP": 38, "Attack": 35, "Defense": 35, "SpecialAttack": 65, "SpecialDefense": 55, "Speed": 50 },
        "evolvesTo": [
            {"name": "가디안", "atLevel": 30},
            {"name": "엘레이드", "gender": "남성", "usedItem": "각성의돌"}
        ],
        "genderRatio": 0.5,
        "friendship": 35
    },
    { 
        "name": "가디안",
        "type": ["에스퍼", "페어리"],
        "possibleTraits": ["싱크로", "트레이스", "텔레파시"],
        "experienceGroup": "Slow",
        "baseStats": { "HP": 68, "Attack": 65, "Defense": 65, "SpecialAttack": 125, "SpecialDefense": 115, "Speed": 80 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 35
    },
    { 
        "name": "엘레이드",
        "type": ["에스퍼", "격투"],
        "possibleTraits": ["불굴의마음", "예리함", "정의의마음"],
        "experienceGroup": "Slow",
        "baseStats": { "HP": 68, "Attack": 125, "Defense": 65, "SpecialAttack": 65, "SpecialDefense": 115, "Speed": 80 },
        "genderRatio": 0,
        "evolvesTo": null,
        "friendship": 35
    },
    { 
        "name": "자포코일",
        "type": ["전기", "강철"],
        "possibleTraits": ["옹골참", "자력"],
        "hiddenTrait": "애널라이즈",
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 70, "Attack": 70, "Defense": 115, "SpecialAttack": 130, "SpecialDefense": 90, "Speed": 60 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    },
    { 
        "name": "나이킹",
        "type": ["강철"],
        "possibleTraits": ["단단한발톱", "전투무장", "강철정신"],
        "experienceGroup": "Slightly Fast",
        "baseStats": { "HP": 70, "Attack": 110, "Defense": 100, "SpecialAttack": 50, "SpecialDefense": 60, "Speed": 50 },
        "genderRatio": 0.5,
        "evolvesTo": null,
        "friendship": 50
    }
]