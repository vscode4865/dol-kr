setup.Skills = [
  {name: "0번 기술", number: 0, power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  {name: "막치기", number: 1, power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  {name: "태권당수", number: 2, power: 50, type: "격투", category: "물리", PP: 25, accuracy: 100, contact: true, priority: 0},
  {name: "연속뺨치기", number: 3, power: 15, type: "노말", category: "물리", PP: 10, accuracy: 85, contact: true, multiStrike: 5, priority: 0}, //연속기 구현 안됨, 확률 구현 안됨
  {name: "연속펀치", number: 4, power: 18, type: "노말", category: "물리", PP: 15, accuracy: 85, contact: true, multiStrike: 5, priority: 0},
  {name: "메가톤펀치", number: 5, power: 80, type: "노말", category: "물리", PP: 20, accuracy: 85, contact: true, priority: 0},
  {name: "고양이돈받기", number: 6, power: 40, type: "노말", category: "물리", PP: 20, accuracy: 100, contact: false, priority: 0},
  {name: "불꽃펀치", number: 7, power: 75, type: "불꽃", category: "물리", PP: 15, accuracy: 100, statusCon: "화상", contact: true, priority: 0}, //화상 구현 안됨
  {name: "냉동펀치", number: 8, power: 75, type: "얼음", category: "물리", PP: 15, accuracy: 100, statusCon: "얼음", contact: true, priority: 0}, //얼음상태 구현 안됨
  {name: "번개펀치", number: 9, power: 75, type: "전기", category: "물리", PP: 15, accuracy: 100, statusCon: "마비", contact: true, priority: 0}, //마비 구현 안됨
  {name: "할퀴기", number: 10, power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  {name: "찝기", number: 11, power: 55, type: "노말", category: "물리", PP: 30, accuracy: 100, contact: true, priority: 0},
  {name: "가위자르기", number: 12, power: 100000000, type: "노말", category: "물리", PP: 5, accuracy: 30, contact: true, priority: 0},
  {name: "칼바람", number: 13, power: 80, type: "노말", category: "특수", PP: 10, accuracy: 100, charge: true, contact: true, priority: 0}, //충전기 구현 안됨
  {name: "칼춤", number: 14, power: 0, type: "노말", category: "변화", rank: "attackRank", rankChange: 1, target: 0, PP: 35, accuracy: 100, contact: false},
  {name: "풀베기", number: 15, power: 50, type: "노말", category: "물리", PP: 30, accuracy: 95, contact: true, priority: 0},
  {name: "바람일으키기", number: 16, power: 40, type: "비행", category: "특수", PP: 35, accuracy: 100, contact: false, priority: 0},
  {name: "날개치기", number: 17, power: 60, type: "비행", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  {name: "날려버리기", number: 18, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, forceReplace: true, contact: true, priority: -6}, //강제교체 구현 안됨
  {name: "공중날기", number: 19, power: 90, type: "비행", category: "물리", PP: 15, accuracy: 95, fly: true, notInField: true, charge: true, contact: true, priority: 0},
  {name: "조이기", number: 20, power: 15, type: "노말", category: "물리", PP: 20, accuracy: 85, bind: true, contact: true, priority: 0},
  {name: "힘껏치기", number: 21, power: 80, type: "노말", category: "물리", PP: 20, accuracy: 75, contact: true, priority: 0},
  {name: "덩굴채찍", number: 22, power: 45, type: "풀", category: "물리", PP: 25, accuracy: 100, contact: true, priority: 0},
  {name: "짓밟기", number: 23, power: 65, type: "노말", category: "물리", PP: 20, accuracy: 100, statusCon: "풀죽음", press: true, contact: true, priority: 0}, //풀죽음 구현 안됨
  {name: "두번차기", number: 24, power: 30, type: "격투", category: "물리", PP: 30, accuracy: 100, contact: true, multiStrike: 2, priority: 0},
  {name: "메가톤킥", number: 25, power: 120, type: "노말", category: "물리", PP: 5, accuracy: 75, contact: true, priority: 0},
  {name: "점프킥", number: 26, power: 100, type: "격투", category: "물리", PP: 10, accuracy: 95, recoil: 1/2, contact: true, priority: 0}, //반동 구현 안됨
  {name: "돌려차기", number: 27, power: 60, type: "격투", category: "물리", PP: 15, accuracy: 85, statusCon: "풀죽음", contact: true, priority: 0},
  {name: "모래뿌리기", number: 28, power: 0, type: "땅", category: "변화", rank: "accuracyRank", rankChange: -1, PP: 15, accuracy: 100, contact: false, priority: 0},
  {name: "박치기", number: 29, power: 70, type: "노말", category: "물리", PP: 15, accuracy: 100, statusCon: "풀죽음", contact: true, priority: 0},
  {name: "뿔찌르기", number: 30, power: 65, type: "노말", category: "물리", PP: 25, accuracy: 100, contact: true, priority: 0},
  {name: "마구찌르기", number: 31, power: 15, type: "노말", category: "물리", PP: 20, accuracy: 85, contact: true, multiStrike: 5, priority: 0},
  {name: "뿔드릴", number: 32, power: 100000000, type: "노말", category: "물리", PP: 5, accuracy: 30, contact: true, priority: 0}, // 명중률은 30 + 사용자 레벨 - 상대 레벨
  {name: "몸통박치기", number: 33, power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  {name: "누르기", number: 34, power: 85, type: "노말", category: "물리", PP: 15, accuracy: 100, statusCon: "마비", press: true, contact: true, priority: 0},
  {name: "김밥말이", number: 35, power: 15, type: "노말", category: "물리", PP: 20, accuracy: 90, bind: true, contact: true, priority: 0},
  {name: "돌진", number: 36, power: 90, type: "노말", category: "물리", PP: 20, accuracy: 85, recoil: 1/4, contact: true, priority: 0}, //준 데미지의 1/4임.
  {name: "난동부리기", number: 37, power: 120, type: "노말", category: "물리", PP: 10, accuracy: 100, mayhem: true, confusion: true, contact: true, priority: 0},
  {name: "이판사판태클", number: 38, power: 120, type: "노말", category: "물리", PP: 15, accuracy: 100, recoil: 1/3, contact: true, priority: 0}, //준 데미지의 1/3임.
  {name: "꼬리흔들기", number: 39, power: 0, type: "노말", category: "변화", rank: "defenceRank", rankChange: -1, PP: 30, accuracy: 100, contact: true, priority: 0}, //광역 상대, 기술 영향 범위 구현 안됨
  {name: "독침", number: 40, power: 15, type: "독", category: "물리", PP: 35, accuracy: 100, statusCon: "독", contact: false, priority: 0},
  {name: "더블니들", number: 41, power: 25, type: "벌레", category: "물리", PP: 20, accuracy: 100, statusCon: "독", multiStrike: 2, contact: false, priority: 0},
  {name: "바늘미사일", number: 42, power: 25, type: "벌레", category: "물리", PP: 20, accuracy: 95, multiStrike: 5, contact: false, priority: 0},
  {name: "째려보기", number: 43, power: 0, type: "노말", category: "변화", rank: "defenceRank", rankChange: -1, PP: 30, accuracy: 100, contact: false, priority: 0},
  {name: "물기", number: 44, power: 60, type: "악", category: "물리", PP: 25, accuracy: 100, statusCon: "풀죽음", contact: true, priority: 0},
  {name: "울음소리", number: 45, power: 0, type: "노말", category: "변화", PP: 40, rank: "attackRank", rankChange: -1, accuracy: 100, contact: false, priority: 0},
  {name: "울부짖기", number: 46, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, forceReplace: true, contact: false, priority: -6},
  {name: "노래하기", number: 47, power: 0, type: "노말", category: "변화", PP: 15, accuracy: 55, statusCon: "잠듦", contact: false, priority: 0},
  {name: "초음파", number: 48, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 55, statusCon: "혼란", contact: false, priority: 0},
  {name: "소닉붐", number: 49, power: 0, type: "노말", category: "특수", PP: 20, accuracy: 90, fixedDamage: 20, contact: false, priority: 0}, //고정 데미지 구현 안됨
  {name: "사슬묶기", number: 50, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, skillBan: 4, contact: false, priority: 0}, //기술 금지 구현 안됨
  {name: "용해액", number: 51, power: 40, type: "독", category: "특수", rank: "specialDefenseRank", rankChange: -1, rankChangeProbability: 10, PP: 30, accuracy: 100, contact: false, priority: 0}, //랭크 변경 확률 구현 안됨
  {name: "불꽃세례", number: 52, power: 40, type: "불꽃", category: "특수", PP: 25, accuracy: 100, statusCon: "화상", statusConProbability: 10, contact: false, priority: 0}, //얼음 상태이상 해제 기능 구현 안됨
  {name: "화염방사", number: 53, power: 90, type: "불꽃", category: "특수", PP: 15, accuracy: 100, statusCon: "화상", statusConProbability: 10, contact: false, priority: 0},
  {name: "흰안개", number: 54, power: 0, type: "얼음", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0}, //랭크 하락 방지 구현 안됨
  {name: "물대포", number: 55, power: 40, type: "물", category: "특수", PP: 25, accuracy: 100, contact: false, priority: 0},
  {name: "하이드로펌프", number: 56, power: 110, type: "물", category: "특수", PP: 5, accuracy: 80, contact: false, priority: 0},
  {name: "파도타기", number: 57, power: 90, type: "물", category: "특수", PP: 15, accuracy: 100, contact: false, priority: 0}, //다이빙 중인 상대는 데미지 2배 (구현 안됨)
  {name: "냉동빔", number: 58, power: 90, type: "얼음", category: "특수", PP: 10, accuracy: 100, statusCon: "얼음", statusConProbability: 10, contact: false, priority: 0},
  {name: "눈보라", number: 59, power: 110, type: "얼음", category: "특수", PP: 5, accuracy: 70, statusCon: "얼음", statusConProbability: 10, contact: false, priority: 0}, // 눈 내릴때는 필중 (구현 안됨)
  {name: "환상빔", number: 60, power: 65, type: "에스퍼", category: "특수", PP: 20, accuracy: 100, statusCon: "혼란", statusConProbability: 10, contact: false, priority: 0},
  {name: "거품광선", number: 61, power: 65, type: "물", category: "특수", PP: 20, accuracy: 100, rank: "speedRank", rankChange: -1, rankChangeProbability: 10, contact: false, priority: 0},
  {name: "오로라빔", number: 62, power: 65, type: "얼음", category: "특수", PP: 20, accuracy: 100, rank: "attackRank", rankChange: -1, rankChangeProbability: 10, contact: false, priority: 0},
  {name: "파괴광선", number: 63, power: 150, type: "노말", category: "특수", PP: 5, accuracy: 90, recoil: "휴식", contact: false, priority: 0},
  {name: "쪼기", number: 64, power: 35, type: "비행", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  {name: "회전부리", number: 65, power: 80, type: "비행", category: "물리", PP: 20, accuracy: 100, contact: true, priority: 0},
  {name: "지옥의바퀴", number: 66, power: 80, type: "격투", category: "물리", PP: 25, accuracy: 80, recoil: 1/4, contact: true, priority: 0},
  {name: "안다리걸기", number: 67, power: 0, type: "격투", category: "물리", PP: 20, accuracy: 100, contact: true, priority: 0}, //상대가 무거울 수록 위력 올라감, 구현 안됨
  {name: "카운터", number: 68, power: 0, type: "격투", category: "물리", PP: 20, accuracy: 100, contact: true, priority: -5}, // 상대한테 받은 데미지의 2배 위력, 구현 안됨
  {name: "지구던지기", number: 69, power: 0, type: "격투", category: "물리", PP: 20, accuracy: 100, contact: true, priority: 0}, //본인 레벨만큼 데미지 줌, 미구현
  {name: "괴력", number: 70, power: 80, type: "노말", category: "물리", PP: 15, accuracy: 100, contact: true, priority: 0},
  {name: "흡수", number: 71, power: 20, type: "풀", category: "특수", PP: 25, accuracy: 100, absorb: 1/2, contact: false, priority: 0}, //준 데미지의 1/2
  {name: "메가드레인", number: 72, power: 40, type: "풀", category: "특수", PP: 15, accuracy: 100, absorb: 1/2, contact: false, priority: 0}, //준 데미지의 1/2
  {name: "씨뿌리기", number: 73, power: 0, type: "풀", category: "변화", PP: 10, accuracy: 90, absorb: 1/8, contact: false, priority: 0}, //적 전체 hp의 1/8 (계속), 미구현
  {name: "성장", number: 74, power: 0, type: "노말", category: "변화", PP: 40, accuracy: 100, rank: ["attackRank", "specialAttackRank"], rankChange: 1, contact: false, priority: 0}, //쾌청일땐 2랭크, 미구현
  {name: "잎날가르기", number: 75, power: 55, type: "풀", category: "물리", PP: 25, accuracy: 95, contact: false, priority: 0},
  {name: "솔라빔", number: 76, power: 120, type: "풀", category: "특수", PP: 10, accuracy: 100, charge: true, contact: false, priority: 0}, //쾌청 날씨는 1턴만에, 다른 날씨는 데미지 반감 (미구현)
  {name: "독가루", number: 77, power: 0, type: "독", category: "변화", PP: 35, accuracy: 75, statusCon: "독", contact: false, priority: 0},
  {name: "저리가루", number: 78, power: 0, type: "풀", category: "변화", PP: 30, accuracy: 75, statusCon: "마비", contact: false, priority: 0},
  {name: "수면가루", number: 79, power: 0, type: "풀", category: "변화", PP: 15, accuracy: 75, statusCon: "잠듦", contact: false, priority: 0},
  {name: "꽃잎댄스", number: 80, power: 120, type: "풀", category: "특수", PP: 10, accuracy: 100, mayhem: true, contact: true, priority: 0},
  {name: "실뿜기", number: 81, power: 0, type: "벌레", category: "변화", PP: 40, accuracy: 95, rank: "speedRank", rankChange: -2, contact: false, priority: 0},
  {name: "용의분노", number: 82, power: 0, type: "드래곤", category: "특수", PP: 10, accuracy: 100, contact: false, priority: 0}, //항상 데미지 40, 미구현
  {name: "회오리불꽃", number: 83, power: 35, type: "불꽃", category: "특수", PP: 15, accuracy: 85, bind: true, contact: false, priority: 0},
  {name: "전기쇼크", number: 84, power: 40, type: "전기", category: "특수", PP: 30, accuracy: 100, statusCon: "마비", statusConProbability: 10, contact: false, priority: 0},
  {name: "10만볼트", number: 85, power: 90, type: "전기", category: "특수", PP: 15, accuracy: 100, statusCon: "마비", statusConProbability: 10, contact: false, priority: 0},
  {name: "전기자석파", number: 86, power: 0, type: "전기", category: "변화", PP: 20, accuracy: 90, statusCon: "마비", contact: false, priority: 0},
  {name: "번개", number: 87, power: 110, type: "전기", category: "특수", PP: 10, accuracy: 70, statusCon: "마비", statusConProbability: 30, contact: false, priority: 0},
  {name: "돌떨구기", number: 88, power: 50, type: "바위", category: "물리", PP: 20, accuracy: 90, contact: false, priority: 0},
  {name: "지진", number: 89, power: 100, type: "땅", category: "물리", PP: 10, accuracy: 100, contact: false, priority: 0}, //구멍파기 중인 적에게는 2배 데미지, 미구현
  {name: "땅가르기", number: 90, power: 100000000, type: "땅", category: "물리", PP: 5, accuracy: 30, contact: false, priority: 0},
  {name: "구멍파기", number: 91, power: 80, type: "땅", category: "물리", PP: 10, accuracy: 100, charge: true, contact: true, priority: 0},
  {name: "맹독", number: 92, power: 0, type: "독", category: "변화", PP: 10, accuracy: 90, statusCon: "맹독", contact: true, priority: 0},
  {name: "염동력", number: 93, power: 50, type: "에스퍼", category: "특수", PP: 25, accuracy: 100, statusCon: "혼란", statusConProbability: 10, contact: false, priority: 0},
  {name: "사이코키네시스", number: 94, power: 90, type: "에스퍼", category: "특수", PP: 10, accuracy: 100, rank: "specialDefenseRank", rankChange: -1, rankChangeProbability: 10, contact: false, priority: 0},
  {name: "최면술", number: 95, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 60, statusCon: "잠듦", contact: false, priority: 0},
  {name: "요가포즈", number: 96, power: 0, type: "에스퍼", category: "변화", PP: 40, accuracy: 100, rank: "attackRank", rankChange: 1, contact: false, priority: 0}, //명중수치 -임. 필중기 같긴 한데 어떻게 구현해야할지 모르겠음
  {name: "고속이동", number: 97, power: 0, type: "에스퍼", category: "변화", PP: 30, accuracy: 100, rank: "speedRank", rankChange: 2, contact: false, priority: 0},
  {name: "전광석화", number: 98, power: 40, type: "노말", category: "물리", PP: 30, accuracy: 100, contact: true, priority: 1},
  {name: "분노", number: 99, power: 20, type: "노말", category: "물리", PP: 10, accuracy: 100, contact: true, priority: 0}, //쓸 때 공격 받으면 공격 랭크 1씩 올라야 하는데 구현 방법 모름
  {name: "순간이동", number: 100, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 100, contact: false, priority: -6}, //교대, 도망 기능 미구현
  {name: "나이트헤드", number: 101, power: 0, type: "고스트", category: "특수", PP: 15, accuracy: 100, contact: false, priority: 0}, //본인 레벨만큼 데미지 줌, 미구현
  {name: "흉내내기", number: 102, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 100, contact: false, priority: 0}, //남 기술 가져오기 미구현
  {name: "싫은소리", number: 103, power: 0, type: "노말", category: "변화", PP: 40, accuracy: 85, rank: "defenseRank", rankChange: -2, contact: false, priority: 0},
  {name: "그림자분신", number: 104, power: 0, type: "노말", category: "변화", PP: 15, accuracy: 100, rank: "evasionRank", rankChange: 1, contact: false, priority: 0},
  {name: "HP회복", number: 105, power: 0, type: "노말", category: "변화", PP: 5, accuracy: 100, contact: false, priority: 0}, // hp 회복 기능 미구현
  {name: "단단해지기", number: 106, power: 0, type: "노말", category: "변화", PP: 30, accuracy: 100, rank: "defenseRank", rankChange: 1, contact: false, priority: 0},
  {name: "작아지기", number: 107, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 100, rank: "evasionRank", rankChange: 2, contact: false, priority: 0},
  {name: "연막", number: 108, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, rank: "accuracyRank", rankChange: -1, contact: false, priority: 0},
  {name: "이상한빛", number: 109, power: 0, type: "고스트", category: "변화", PP: 10, accuracy: 100, statusCon: "혼란", contact: false, priority: 0},
  {name: "껍질에숨기", number: 110, power: 0, type: "물", category: "변화", PP: 40, accuracy: 100, rank: "defenseRank", rankChange: 1, contact: false, priority: 0},
  {name: "웅크리기", number: 111, power: 0, type: "노말", category: "변화", PP: 40, accuracy: 100, rank: "defenseRank", rankChange: 1, contact: false, priority: 0}, // 이거 사용 후 구르기/아이스복 쓰면 위력 2배, 미구현
  {name: "배리어", number: 112, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 100, rank: "defenseRank", rankChange: 2, contact: false, priority: 0},
  {name: "빛의장막", number: 113, power: 0, type: "에스퍼", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0}, //5턴동안 특수공격 데미지 약하게, 미구현
  {name: "흑안개", number: 114, power: 0, type: "얼음", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0}, //랭크 변화 되돌리기, 미구현
  {name: "리플렉터", number: 115, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 100, contact: false, priority: 0}, //5턴동안 물리공격 데미지 약하게, 미구현
  {name: "기충전", number: 116, power: 0, type: "노말", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0},

  
  
  


  
  
  
  
  
  
  
  
  
  
  
  



  {name: "잎날가르기", power: 40, type: "풀"},
  {name: "약화", power: 0, type: "노말", category: "변화", rank: "defencerank", rankChange: -3, target: 1, PP: 35, accuracy: 100, contact: false},
  {name: "사이코쇼크", power: 80, type: "에스퍼", category: "특수", physicalSpecial: true, target: 1, PP: 10, accuracy: 100, contact: false, priority: 0},
  {name: "신속", power: 80, type: "노말", category: "물리", PP: 5, accuracy: 100, contact: true, priority: 2}
];

setup.LearnableSkills = {
  "이상해씨": ["몸통박치기", "잎날가르기", "칼춤"],
  "파이리": ["몸통박치기",]
};

setup.LevelUpSkills = {
  "이상해씨": {5: "잎날가르기"},
};


/** 
setup.Skills = {
  "몸통박치기": {name: "몸통박치기", power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  "잎날가르기": {power: 40, type: "풀"},
  "칼춤": {power: 0, type: "노말", category: "변화", rank: "attackrank", rankChange: 1, target: 0, PP: 35, accuracy: 100, contact: false},
  "약화": {power: 0, type: "노말", category: "변화", rank: "defencerank", rankChange: -3, target: 1, PP: 35, accuracy: 100, contact: false},
  "사이코쇼크": {power: 80, type: "에스퍼", category: "특수", physicalSpecial: true, target: 1, PP: 10, accuracy: 100, contact: false, priority: 0},
  "신속": {power: 80, type: "노말", category: "물리", PP: 5, accuracy: 100, contact: true, priority: 2}
}; 


*/