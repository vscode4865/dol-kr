setup.Skills = {
  "몸통박치기": {power: 40, type: "노말", category: "물리", PP: 35, accuracy: 100, contact: true, priority: 0},
  "잎날가르기": {power: 40, type: "풀"},
  "칼춤": {power: 0, type: "노말", category: "변화", rank: "attackrank", rankChange: 1, target: 0, PP: 35, accuracy: 100, contact: false},
  "약화": {power: 0, type: "노말", category: "변화", rank: "defencerank", rankChange: -3, target: 1, PP: 35, accuracy: 100, contact: false},
  "사이코쇼크": {power: 80, type: "에스퍼", category: "특수", physicalSpecial: true, target: 1, PP: 10, accuracy: 100, contact: false, priority: 0},
  "신속": {power: 80, type: "노말", category: "물리", PP: 5, accuracy: 100, contact: true, priority: 2}
};

setup.LearnableSkills = {
  "이상해씨": ["몸통박치기", "잎날가르기"],
  "파이리": ["몸통박치기",]
};

setup.LevelUpSkills = {
  "이상해씨": {5: "잎날가르기"},
};