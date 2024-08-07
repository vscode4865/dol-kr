setup.Skills = [
  {name: "혼란기술", number: 0, power: 40, type: "없음", category: "물리", PP: 999999, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "막치기", number: 1, power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "태권당수", number: 2, power: 50, type: "격투", category: "물리", PP: 25, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "연속뺨치기", number: 3, power: 15, type: "노말", category: "물리", PP: 10, accuracy: 85, contact: true, multiStrike: 5, priority: 0, isSKill: true,}, //연속기 구현 안됨, 확률 구현 안됨
  {name: "연속펀치", number: 4, power: 18, type: "노말", category: "물리", PP: 15, accuracy: 85, contact: true, multiStrike: 5, priority: 0, isSKill: true,},
  {name: "메가톤펀치", number: 5, power: 80, type: "노말", category: "물리", PP: 20, accuracy: 85, contact: true, priority: 0, isSKill: true,},
  {name: "고양이돈받기", number: 6, power: 40, type: "노말", category: "물리", PP: 20, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "불꽃펀치", number: 7, power: 75, type: "불꽃", category: "물리", PP: 15, accuracy: 100, statusCon: "화상", contact: true, priority: 0, isSKill: true,}, //화상 구현 안됨
  {name: "냉동펀치", number: 8, power: 75, type: "얼음", category: "물리", PP: 15, accuracy: 100, statusCon: "얼음", contact: true, priority: 0, isSKill: true,}, //얼음상태 구현 안됨
  {name: "번개펀치", number: 9, power: 75, type: "전기", category: "물리", PP: 15, accuracy: 100, statusCon: "마비", contact: true, priority: 0, isSKill: true,}, //마비 구현 안됨
  {name: "할퀴기", number: 10, power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "찝기", number: 11, power: 55, type: "노말", category: "물리", PP: 30, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "가위자르기", number: 12, power: 100000000, type: "노말", category: "물리", PP: 5, accuracy: 30, contact: true, priority: 0, isSKill: true,},
  {name: "칼바람", number: 13, power: 80, type: "노말", category: "특수", PP: 10, accuracy: 100, charge: true, contact: true, priority: 0, isSKill: true,}, //충전기 구현 안됨
  {name: "칼춤", number: 14, power: 0, type: "노말", category: "변화", rank: "attackRank", rankChange: 1, target: 0, PP: 35, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "풀베기", number: 15, power: 50, type: "노말", category: "물리", PP: 30, accuracy: 95, contact: true, priority: 0, isSKill: true,},
  {name: "바람일으키기", number: 16, power: 40, type: "비행", category: "특수", PP: 35, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "날개치기", number: 17, power: 60, type: "비행", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "날려버리기", number: 18, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, forceReplace: true, contact: true, priority: -6, isSKill: true,}, //강제교체 구현 안됨
  {name: "공중날기", number: 19, power: 90, type: "비행", category: "물리", PP: 15, accuracy: 95, fly: true, notInField: true, charge: true, contact: true, priority: 0, isSKill: true,},
  {name: "조이기", number: 20, power: 15, type: "노말", category: "물리", PP: 20, accuracy: 85, bind: true, contact: true, priority: 0, isSKill: true,},
  {name: "힘껏치기", number: 21, power: 80, type: "노말", category: "물리", PP: 20, accuracy: 75, contact: true, priority: 0, isSKill: true,},
  {name: "덩굴채찍", number: 22, power: 45, type: "풀", category: "물리", PP: 25, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "짓밟기", number: 23, power: 65, type: "노말", category: "물리", PP: 20, accuracy: 100, statusCon: "풀죽음", press: true, contact: true, priority: 0, isSKill: true,}, //풀죽음 구현 안됨
  {name: "두번차기", number: 24, power: 30, type: "격투", category: "물리", PP: 30, accuracy: 100, contact: true, multiStrike: 2, priority: 0, isSKill: true,},
  {name: "메가톤킥", number: 25, power: 120, type: "노말", category: "물리", PP: 5, accuracy: 75, contact: true, priority: 0, isSKill: true,},
  {name: "점프킥", number: 26, power: 100, type: "격투", category: "물리", PP: 10, accuracy: 95, recoil: 1/2, contact: true, priority: 0, isSKill: true,}, //반동 구현 안됨
  {name: "돌려차기", number: 27, power: 60, type: "격투", category: "물리", PP: 15, accuracy: 85, statusCon: "풀죽음", contact: true, priority: 0, isSKill: true,},
  {name: "모래뿌리기", number: 28, power: 0, type: "땅", category: "변화", rank: "accuracyRank", rankChange: -1, PP: 15, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "박치기", number: 29, power: 70, type: "노말", category: "물리", PP: 15, accuracy: 100, statusCon: "풀죽음", contact: true, priority: 0, isSKill: true,},
  {name: "뿔찌르기", number: 30, power: 65, type: "노말", category: "물리", PP: 25, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "마구찌르기", number: 31, power: 15, type: "노말", category: "물리", PP: 20, accuracy: 85, contact: true, multiStrike: 5, priority: 0, isSKill: true,},
  {name: "뿔드릴", number: 32, power: 100000000, type: "노말", category: "물리", PP: 5, accuracy: 30, contact: true, priority: 0, isSKill: true,}, // 명중률은 30 + 사용자 레벨 - 상대 레벨
  {name: "몸통박치기", number: 33, power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "누르기", number: 34, power: 85, type: "노말", category: "물리", PP: 15, accuracy: 100, statusCon: "마비", press: true, contact: true, priority: 0, isSKill: true,},
  {name: "김밥말이", number: 35, power: 15, type: "노말", category: "물리", PP: 20, accuracy: 90, bind: true, contact: true, priority: 0, isSKill: true,},
  {name: "돌진", number: 36, power: 90, type: "노말", category: "물리", PP: 20, accuracy: 85, recoil: 1/4, contact: true, priority: 0, isSKill: true,}, //준 데미지의 1/4임.
  {name: "난동부리기", number: 37, power: 120, type: "노말", category: "물리", PP: 10, accuracy: 100, mayhem: true, confusion: true, contact: true, priority: 0, isSKill: true,},
  {name: "이판사판태클", number: 38, power: 120, type: "노말", category: "물리", PP: 15, accuracy: 100, recoil: 1/3, contact: true, priority: 0, isSKill: true,}, //준 데미지의 1/3임.
  {name: "꼬리흔들기", number: 39, power: 0, type: "노말", category: "변화", rank: "defenceRank", rankChange: -1, PP: 30, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //광역 상대, 기술 영향 범위 구현 안됨
  {name: "독침", number: 40, power: 15, type: "독", category: "물리", PP: 35, accuracy: 100, statusCon: "독", contact: false, priority: 0, isSKill: true,},
  {name: "더블니들", number: 41, power: 25, type: "벌레", category: "물리", PP: 20, accuracy: 100, statusCon: "독", multiStrike: 2, contact: false, priority: 0, isSKill: true,},
  {name: "바늘미사일", number: 42, power: 25, type: "벌레", category: "물리", PP: 20, accuracy: 95, multiStrike: 5, contact: false, priority: 0, isSKill: true,},
  {name: "째려보기", number: 43, power: 0, type: "노말", category: "변화", rank: "defenceRank", rankChange: -1, PP: 30, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "물기", number: 44, power: 60, type: "악", category: "물리", PP: 25, accuracy: 100, statusCon: "풀죽음", contact: true, priority: 0, isSKill: true,},
  {name: "울음소리", number: 45, power: 0, type: "노말", category: "변화", PP: 40, rank: "attackRank", rankChange: -1, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "울부짖기", number: 46, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, forceReplace: true, contact: false, priority: -6, isSKill: true,},
  {name: "노래하기", number: 47, power: 0, type: "노말", category: "변화", PP: 15, accuracy: 55, statusCon: "잠듦", contact: false, priority: 0, isSKill: true,},
  {name: "초음파", number: 48, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 55, statusCon: "혼란", contact: false, priority: 0, isSKill: true,},
  {name: "소닉붐", number: 49, power: 0, type: "노말", category: "특수", PP: 20, accuracy: 90, fixedDamage: 20, contact: false, priority: 0, isSKill: true,}, //고정 데미지 구현 안됨
  {name: "사슬묶기", number: 50, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, skillBan: 4, contact: false, priority: 0, isSKill: true,}, //기술 금지 구현 안됨
  {name: "용해액", number: 51, power: 40, type: "독", category: "특수", rank: "specialDefenseRank", rankChange: -1, rankChangeProbability: 10, PP: 30, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //랭크 변경 확률 구현 안됨
  {name: "불꽃세례", number: 52, power: 40, type: "불꽃", category: "특수", PP: 25, accuracy: 100, statusCon: "화상", statusConProbability: 10, contact: false, priority: 0, isSKill: true,}, //얼음 상태이상 해제 기능 구현 안됨
  {name: "화염방사", number: 53, power: 90, type: "불꽃", category: "특수", PP: 15, accuracy: 100, statusCon: "화상", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "흰안개", number: 54, power: 0, type: "얼음", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //랭크 하락 방지 구현 안됨
  {name: "물대포", number: 55, power: 40, type: "물", category: "특수", PP: 25, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "하이드로펌프", number: 56, power: 110, type: "물", category: "특수", PP: 5, accuracy: 80, contact: false, priority: 0, isSKill: true,},
  {name: "파도타기", number: 57, power: 90, type: "물", category: "특수", PP: 15, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //다이빙 중인 상대는 데미지 2배 (구현 안됨)
  {name: "냉동빔", number: 58, power: 90, type: "얼음", category: "특수", PP: 10, accuracy: 100, statusCon: "얼음", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "눈보라", number: 59, power: 110, type: "얼음", category: "특수", PP: 5, accuracy: 70, statusCon: "얼음", statusConProbability: 10, contact: false, priority: 0, isSKill: true,}, // 눈 내릴때는 필중 (구현 안됨)
  {name: "환상빔", number: 60, power: 65, type: "에스퍼", category: "특수", PP: 20, accuracy: 100, statusCon: "혼란", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "거품광선", number: 61, power: 65, type: "물", category: "특수", PP: 20, accuracy: 100, rank: "speedRank", rankChange: -1, rankChangeProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "오로라빔", number: 62, power: 65, type: "얼음", category: "특수", PP: 20, accuracy: 100, rank: "attackRank", rankChange: -1, rankChangeProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "파괴광선", number: 63, power: 150, type: "노말", category: "특수", PP: 5, accuracy: 90, recoil: "휴식", contact: false, priority: 0, isSKill: true,},
  {name: "쪼기", number: 64, power: 35, type: "비행", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "회전부리", number: 65, power: 80, type: "비행", category: "물리", PP: 20, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "지옥의바퀴", number: 66, power: 80, type: "격투", category: "물리", PP: 25, accuracy: 80, recoil: 1/4, contact: true, priority: 0, isSKill: true,},
  {name: "안다리걸기", number: 67, power: 0, type: "격투", category: "물리", PP: 20, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //상대가 무거울 수록 위력 올라감, 구현 안됨
  {name: "카운터", number: 68, power: 0, type: "격투", category: "물리", PP: 20, accuracy: 100, contact: true, priority: -5, isSKill: true,}, // 상대한테 받은 데미지의 2배 위력, 구현 안됨
  {name: "지구던지기", number: 69, power: 0, type: "격투", category: "물리", PP: 20, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //본인 레벨만큼 데미지 줌, 미구현
  {name: "괴력", number: 70, power: 80, type: "노말", category: "물리", PP: 15, accuracy: 100, contact: true, priority: 0, isSKill: true,},
  {name: "흡수", number: 71, power: 20, type: "풀", category: "특수", PP: 25, accuracy: 100, absorb: 1/2, contact: false, priority: 0, isSKill: true,}, //준 데미지의 1/2
  {name: "메가드레인", number: 72, power: 40, type: "풀", category: "특수", PP: 15, accuracy: 100, absorb: 1/2, contact: false, priority: 0, isSKill: true,}, //준 데미지의 1/2
  {name: "씨뿌리기", number: 73, power: 0, type: "풀", category: "변화", PP: 10, accuracy: 90, absorb: 1/8, contact: false, priority: 0, isSKill: true,}, //적 전체 hp의 1/8 (계속), 미구현
  {name: "성장", number: 74, power: 0, type: "노말", category: "변화", PP: 40, accuracy: 100, rank: ["attackRank", "specialAttackRank"], rankChange: 1, contact: false, priority: 0, isSKill: true,}, //쾌청일땐 2랭크, 미구현
  {name: "잎날가르기", number: 75, power: 55, type: "풀", category: "물리", PP: 25, accuracy: 95, contact: false, priority: 0, isSKill: true,},
  {name: "솔라빔", number: 76, power: 120, type: "풀", category: "특수", PP: 10, accuracy: 100, charge: true, contact: false, priority: 0, isSKill: true,}, //쾌청 날씨는 1턴만에, 다른 날씨는 데미지 반감 (미구현)
  {name: "독가루", number: 77, power: 0, type: "독", category: "변화", PP: 35, accuracy: 75, statusCon: "독", contact: false, priority: 0, isSKill: true,},
  {name: "저리가루", number: 78, power: 0, type: "풀", category: "변화", PP: 30, accuracy: 75, statusCon: "마비", contact: false, priority: 0, isSKill: true,},
  {name: "수면가루", number: 79, power: 0, type: "풀", category: "변화", PP: 15, accuracy: 75, statusCon: "잠듦", contact: false, priority: 0, isSKill: true,},
  {name: "꽃잎댄스", number: 80, power: 120, type: "풀", category: "특수", PP: 10, accuracy: 100, mayhem: true, contact: true, priority: 0, isSKill: true,},
  {name: "실뿜기", number: 81, power: 0, type: "벌레", category: "변화", PP: 40, accuracy: 95, rank: "speedRank", rankChange: -2, contact: false, priority: 0, isSKill: true,},
  {name: "용의분노", number: 82, power: 0, type: "드래곤", category: "특수", PP: 10, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //항상 데미지 40, 미구현
  {name: "회오리불꽃", number: 83, power: 35, type: "불꽃", category: "특수", PP: 15, accuracy: 85, bind: true, contact: false, priority: 0, isSKill: true,},
  {name: "전기쇼크", number: 84, power: 40, type: "전기", category: "특수", PP: 30, accuracy: 100, statusCon: "마비", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "10만볼트", number: 85, power: 90, type: "전기", category: "특수", PP: 15, accuracy: 100, statusCon: "마비", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "전기자석파", number: 86, power: 0, type: "전기", category: "변화", PP: 20, accuracy: 90, statusCon: "마비", contact: false, priority: 0, isSKill: true,},
  {name: "번개", number: 87, power: 110, type: "전기", category: "특수", PP: 10, accuracy: 70, statusCon: "마비", statusConProbability: 30, contact: false, priority: 0, isSKill: true,},
  {name: "돌떨구기", number: 88, power: 50, type: "바위", category: "물리", PP: 20, accuracy: 90, contact: false, priority: 0, isSKill: true,},
  {name: "지진", number: 89, power: 100, type: "땅", category: "물리", PP: 10, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //구멍파기 중인 적에게는 2배 데미지, 미구현
  {name: "땅가르기", number: 90, power: 100000000, type: "땅", category: "물리", PP: 5, accuracy: 30, contact: false, priority: 0, isSKill: true,},
  {name: "구멍파기", number: 91, power: 80, type: "땅", category: "물리", PP: 10, accuracy: 100, charge: true, contact: true, priority: 0, isSKill: true,},
  {name: "맹독", number: 92, power: 0, type: "독", category: "변화", PP: 10, accuracy: 90, statusCon: "맹독", contact: true, priority: 0, isSKill: true,},
  {name: "염동력", number: 93, power: 50, type: "에스퍼", category: "특수", PP: 25, accuracy: 100, statusCon: "혼란", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "사이코키네시스", number: 94, power: 90, type: "에스퍼", category: "특수", PP: 10, accuracy: 100, rank: "specialDefenseRank", rankChange: -1, rankChangeProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "최면술", number: 95, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 60, statusCon: "잠듦", contact: false, priority: 0, isSKill: true,},
  {name: "요가포즈", number: 96, power: 0, type: "에스퍼", category: "변화", PP: 40, accuracy: 100, rank: "attackRank", rankChange: 1, contact: false, priority: 0, isSKill: true,}, //명중수치 -임. 필중기 같긴 한데 어떻게 구현해야할지 모르겠음
  {name: "고속이동", number: 97, power: 0, type: "에스퍼", category: "변화", PP: 30, accuracy: 100, rank: "speedRank", rankChange: 2, contact: false, priority: 0, isSKill: true,},
  {name: "전광석화", number: 98, power: 40, type: "노말", category: "물리", PP: 30, accuracy: 100, contact: true, priority: 1, isSKill: true,},
  {name: "분노", number: 99, power: 20, type: "노말", category: "물리", PP: 10, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //쓸 때 공격 받으면 공격 랭크 1씩 올라야 하는데 구현 방법 모름
  {name: "순간이동", number: 100, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 100, contact: false, priority: -6, isSKill: true,}, //교대, 도망 기능 미구현
  {name: "나이트헤드", number: 101, power: 0, type: "고스트", category: "특수", PP: 15, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //본인 레벨만큼 데미지 줌, 미구현
  {name: "흉내내기", number: 102, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //남 기술 가져오기 미구현
  {name: "싫은소리", number: 103, power: 0, type: "노말", category: "변화", PP: 40, accuracy: 85, rank: "defenseRank", rankChange: -2, contact: false, priority: 0, isSKill: true,},
  {name: "그림자분신", number: 104, power: 0, type: "노말", category: "변화", PP: 15, accuracy: 100, rank: "evasionRank", rankChange: 1, contact: false, priority: 0, isSKill: true,},
  {name: "HP회복", number: 105, power: 0, type: "노말", category: "변화", PP: 5, accuracy: 100, contact: false, priority: 0, isSKill: true,}, // hp 회복 기능 미구현
  {name: "단단해지기", number: 106, power: 0, type: "노말", category: "변화", PP: 30, accuracy: 100, rank: "defenseRank", rankChange: 1, contact: false, priority: 0, isSKill: true,},
  {name: "작아지기", number: 107, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 100, rank: "evasionRank", rankChange: 2, contact: false, priority: 0, isSKill: true,},
  {name: "연막", number: 108, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, rank: "accuracyRank", rankChange: -1, contact: false, priority: 0, isSKill: true,},
  {name: "이상한빛", number: 109, power: 0, type: "고스트", category: "변화", PP: 10, accuracy: 100, statusCon: "혼란", contact: false, priority: 0, isSKill: true,},
  {name: "껍질에숨기", number: 110, power: 0, type: "물", category: "변화", PP: 40, accuracy: 100, rank: "defenseRank", rankChange: 1, contact: false, priority: 0, isSKill: true,},
  {name: "웅크리기", number: 111, power: 0, type: "노말", category: "변화", PP: 40, accuracy: 100, rank: "defenseRank", rankChange: 1, contact: false, priority: 0, isSKill: true,}, // 이거 사용 후 구르기/아이스복 쓰면 위력 2배, 미구현
  {name: "배리어", number: 112, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 100, rank: "defenseRank", rankChange: 2, contact: false, priority: 0, isSKill: true,},
  {name: "빛의장막", number: 113, power: 0, type: "에스퍼", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //5턴동안 특수공격 데미지 약하게, 미구현
  {name: "흑안개", number: 114, power: 0, type: "얼음", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //랭크 변화 되돌리기, 미구현
  {name: "리플렉터", number: 115, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //5턴동안 물리공격 데미지 약하게, 미구현
  {name: "기충전", number: 116, power: 0, type: "노말", category: "변화", PP: 30, accuracy: 100, rank: "accuracyRank", rankChange: 2, contact: false, priority: 0, isSKill: true,},
  {name: "참기", number: 117, power: 0, type: "노말", category: "물리", PP: 10, accuracy: 100, contact: true, priority: 1, isSKill: true,}, //2턴동안 받은 데미지의 2배 데미지 줌, 미구현
  {name: "손가락흔들기", number: 118, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //기술 랜덤으로 나감, 미구현
  {name: "따라하기", number: 119, power: 0, type: "비행", category: "변화", PP: 20, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //기술 따라하기, 미구현
  {name: "자폭", number: 120, power: 200, type: "노말", category: "물리", PP: 5, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //본인 hp 0되는거 미구현
  {name: "알폭탄", number: 121, power: 100, type: "노말", category: "물리", PP: 10, accuracy: 75, contact: false, priority: 0, isSKill: true,},
  {name: "핥기", number: 122, power: 30, type: "고스트", category: "물리", PP: 30, accuracy: 100, statusCon: "마비", statusConProbability: 30, contact: true, priority: 0, isSKill: true,},
  {name: "스모그", number: 123, power: 30, type: "독", category: "특수", PP: 20, accuracy: 70, statusCon: "독", statusConProbability: 40, contact: false, priority: 0, isSKill: true,},
  {name: "오물공격", number: 124, power: 65, type: "독", category: "특수", PP: 20, accuracy: 100, statusCon: "독", statusConProbability: 30, contact: false, priority: 0, isSKill: true,},
  {name: "뼈다귀치기", number: 125, power: 65, type: "땅", category: "물리", PP: 10, accuracy: 85, statusCon: "풀죽음", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "불대문자", number: 126, power: 110, type: "불꽃", category: "특수", PP: 5, accuracy: 85, statusCon: "화상", statusConProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "폭포오르기", number: 127, power: 80, type: "물", category: "물리", PP: 15, accuracy: 100, statusCon: "풀죽음", statusConProbability: 20, contact: true, priority: 0, isSKill: true,},
  {name: "껍질끼우기", number: 128, power: 35, type: "물", category: "물리", PP: 15, accuracy: 85, bind: true, contact: true, priority: 0, isSKill: true,},
  {name: "스피드스타", number: 129, power: 60, type: "노말", category: "특수", PP: 20, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //필중기, 미구현
  {name: "로켓박치기", number: 130, power: 130, type: "노말", category: "물리", PP: 10, accuracy: 100, charge: true, rank: "defenseRank", rankChange: 1, contact: true, priority: 0, isSKill: true,}, //랭크 업이랑 충전 동시에 되는거 미구현
  {name: "가시대포", number: 131, power: 20, type: "노말", category: "물리", PP: 15, accuracy: 100, multiStrike: 5, contact: false, priority: 0, isSKill: true,},
  {name: "휘감기", number: 132, power: 10, type: "노말", category: "물리", PP: 35, accuracy: 100, rank: "speedRank", rankChange: -1, rankChangeProbability: 10, contact: true, priority: 0, isSKill: true,},
  {name: "망각술", number: 133, power: 0, type: "에스퍼", category: "변화", PP: 20, accuracy: 100, rank: "specialDefenseRank", rankChange: 2, contact: false, priority: 0, isSKill: true,},
  {name: "숟가락휘기", number: 134, power: 0, type: "에스퍼", category: "변화", PP: 15, accuracy: 80, rank: "accuracyRank", rankChange: -1, contact: false, priority: 0, isSKill: true,},
  {name: "알낳기", number: 135, power: 0, type: "노말", category: "변화", PP: 5, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //회복기/더블배틀 기능 미구현
  {name: "무릎차기", number: 136, power: 130, type: "격투", category: "물리", PP: 10, accuracy: 90, recoil: 1/2, contact: true, priority: 0, isSKill: true,}, //빗나갈 시 반동 미구현
  {name: "뱀눈초리", number: 137, power: 0, type: "노말", category: "변화", PP: 30, accuracy: 100, statusCon: "마비", contact: false, priority: 0, isSKill: true,},
  {name: "꿈먹기", number: 138, power: 100, type: "에스퍼", category: "특수", PP: 15, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //준 데미지의 절반 만큼 hp 회복, 미구현
  {name: "독가스", number: 139, power: 0, type: "독", category: "변화", PP: 40, accuracy: 90, statusCon: "독", contact: false, priority: 0, isSKill: true,},
  {name: "구슬던지기", number: 140, power: 15, type: "노말", category: "물리", PP: 20, accuracy: 85, multiStrike: 5, contact: false, priority: 0, isSKill: true,},
  {name: "흡혈", number: 141, power: 80, type: "벌레", category: "물리", PP: 10, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //준 데미지의 절반 만큼 hp 회복, 미구현
  {name: "악마의키스", number: 142, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 75, statusCon: "잠듦", contact: false, priority: 0, isSKill: true,},
  {name: "변신", number: 143, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //변신 기능 미구현
  {name: "거품", number: 144, power: 40, type: "물", category: "특수", PP: 30, accuracy: 100, rank: "speedRank", rankChange: -1, rankChangeProbability: 10, contact: false, priority: 0, isSKill: true,},
  {name: "잼잼펀치", number: 145, power: 70, type: "노말", category: "물리", PP: 10, accuracy: 100, statusCon: "혼란", statusConProbability: 20, contact: true, priority: 0, isSKill: true,},
  {name: "버섯포자", number: 146, power: 0, type: "벌레", category: "변화", PP: 10, accuracy: 100, statusCon: "잠듦", contact: false, priority: 0, isSKill: true,},
  {name: "플래시", number: 147, power: 0, type: "노말", category: "변화", PP: 20, accuracy: 100, rank: "accuracyRank", rankChange: -1, contact: false, priority: 0, isSKill: true,},
  {name: "사이코웨이브", number: 148, power: 0, type: "에스퍼", category: "특수", PP: 15, accuracy: 100, contact: false, priority: 0, isSKill: true,}, // 데미지 = (X + 5) × ( (포켓몬의 레벨) / 10 ). 이때 X는 0~10까지의 숫자가 랜덤으로 들어가고, 오른쪽 나눗셈의 소수점은 버림.
  {name: "튀어오르기", number: 149, power: 0, type: "노말", category: "변화", PP: 40, accuracy: 100, contact: false, priority: 0, isSKill: true,},
  {name: "녹기", number: 150, power: 0, type: "독", category: "변화", PP: 20, accuracy: 100, rank: "defenseRank", rankChange: 2, contact: false, priority: 0, isSKill: true,},
  {name: "집게해머", number: 151, power: 100, type: "물", category: "물리", PP: 10, accuracy: 90, contact: true, priority: 0, isSKill: true,}, //급소 확률 높음, 미구현
  {name: "대폭발", number: 152, power: 250, type: "노말", category: "물리", PP: 5, accuracy: 90, contact: false, priority: 0, isSKill: true,}, //본인 hp 0되는거 미구현
  {name: "마구할퀴기", number: 153, power: 18, type: "노말", category: "물리", PP: 15, accuracy: 80, multiStrike: 5, contact: true, priority: 0, isSKill: true,},
  {name: "뼈다귀부메랑", number: 154, power: 50, type: "땅", category: "물리", PP: 10, accuracy: 90, multiStrike: 2, contact: false, priority: 0, isSKill: true,},
  {name: "잠자기", number: 155, power: 0, type: "에스퍼", category: "변화", PP: 5, accuracy: 100, statusCon: "잠듦", contact: false, priority: 0, isSKill: true,}, //2턴동안 본인한테 잠듦 적용, hp 회복. 미구현
  {name: "스톤샤워", number: 156, power: 75, type: "바위", category: "물리", PP: 10, accuracy: 90, statusCon: "풀죽음", statusConProbability: 30, contact: false, priority: 0, isSKill: true,},
  {name: "필살앞니", number: 157, power: 80, type: "노말", category: "물리", PP: 15, accuracy: 90, statusCon: "풀죽음", statusConProbability: 10, contact: true, priority: 0, isSKill: true,},
  {name: "각지기", number: 158, power: 0, type: "노말", category: "변화", PP: 30, accuracy: 100, rank: "attackRank", rankChange: 1, contact: false, priority: 0, isSKill: true,},
  {name: "텍스처", number: 159, power: 0, type: "노말", category: "변화", PP: 30, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //본인 타입을 기술배치 가장 위에 있는 기술의 타입으로 변경, 미구현
  {name: "트라이어택", number: 160, power: 80, type: "노말", category: "특수", PP: 10, accuracy: 100, statusCon: ["마비", "화상", "얼음"], statusConProbability: 20, contact: false, priority: 0, isSKill: true,},
  {name: "분노의앞니", number: 161, power: 0, type: "노말", category: "물리", PP: 10, accuracy: 90, contact: true, priority: 0, isSKill: true,}, //상대 hp의 절반 데미지, 미구현
  {name: "베어가르기", number: 162, power: 70, type: "노말", category: "물리", PP: 20, accuracy: 100, contact: true, priority: 0, isSKill: true,}, //급소 맞을 확률 높음, 미구현
  {name: "대타출동", number: 163, power: 0, type: "노말", category: "변화", PP: 10, accuracy: 100, contact: false, priority: 0, isSKill: true,}, //hp 1/4 깎아서 분신 만듬, 미구현
  {name: "발버둥", number: 164, power: 50, type: "???", category: "물리", PP: 1, accuracy: 100, recoil: 1/4, contact: true, priority: 0, isSKill: true,}, //본인 최대 hp의 1/4 반동피해
  
  

  
  
  

  
  
  


  
  
  
  
  
  
  
  
  
  
  
  



  {name: "잎날가르기", power: 40, type: "풀"},
  {name: "약화", power: 0, type: "노말", category: "변화", rank: "defencerank", rankChange: -3, target: 1, PP: 35, accuracy: 100, contact: false},
  {name: "사이코쇼크", power: 80, type: "에스퍼", category: "특수", physicalSpecial: true, target: 1, PP: 10, accuracy: 100, contact: false, priority: 0},
  {name: "신속", power: 80, type: "노말", category: "물리", PP: 5, accuracy: 100, contact: true, priority: 2}
];

setup.LearnableSkills = {
  "이상해씨": ["몸통박치기", "잎날가르기", "칼춤", "맹독", "초음파", "전기자석파"],
  "파이리": ["몸통박치기", "할퀴기"],
  "후딘": ["몸통박치기", "사이코키네시스", "돌떨구기"]
  
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