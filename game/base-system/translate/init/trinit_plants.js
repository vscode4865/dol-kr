function trinit_plants()
{
	if (!setup.trPlants)
	{
		setup.trPlants = [
				{
					name: "red_rose",
					plural: "red roses",
					name_ko: "붉은 장미",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "white_rose",
					plural: "white roses",
					name_ko: "백장미",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "orchid",
					plural: "orchids",
					name_ko: "난초",
					post:1,
					unit_ko: "촉",
					unit_post:0,
				},

				{
					name: "daisy",
					plural: "daisies",
					name_ko: "데이지",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "tulip",
					plural: "tulips",
					name_ko: "튤립",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "lotus",
					plural: "lotus",
					name_ko: "연꽃",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "lily",
					plural: "lilies",
					name_ko: "백합",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "poppy",
					plural: "poppies",
					name_ko: "양귀비",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},
				
				{
					name: "apple",
					plural: "apples",
					name_ko: "사과",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "orange",
					plural: "oranges",
					name_ko: "오렌지",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "banana",
					plural: "bananas",
					name_ko: "바나나",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "lemon",
					plural: "lemons",
					name_ko: "레몬",
					post:0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "blood_lemon",
					plural: "blood lemons",
					name_ko: "블러드 레몬",
					post:0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "pear",
					plural: "pears",
					name_ko: "배",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "strawberry",
					plural: "strawberries",
					name_ko: "딸기",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "peach",
					plural: "peaches",
					name_ko: "복숭아",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "plum",
					plural: "plums",
					name_ko: "자두",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "mushroom",
					plural: "mushrooms",
					name_ko: "버섯",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "wolfshroom",
					plural: "wolfshrooms",
					name_ko: "늑대 버섯",
					post:0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "wild_honeycomb",
					plural: "wild honeycombs",
					name_ko: "야생 벌집",
					post:0,
					unit_ko: "개",
					unit_post:1,
			},

				{
					name: "wild_carrot",
					plural: "carrots",
					name_ko: "야생 당근",
					post: 0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "onion",
					plural: "onions",
					name_ko: "양파",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "garlic_bulb",
					plural: "garlic bulbs",
					name_ko: "마늘",
					post: 2,
					unit_ko: "통",
					unit_post:0,
				},

				{
					name: "potato",
					plural: "potatoes",
					name_ko: "감자",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "strange_flower",
					plural: "strange flowers",
					name_ko: "이상한 꽃",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "truffle",
					plural: "truffles",
					name_ko: "송로버섯",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "bottle_of_milk",
					plural: "bottles of milk",
					name_ko: "우유를 넣은 병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "egg",
					plural: "eggs",
					name_ko: "계란",
					post: 0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "chicken_egg",
					plural: "chicken eggs",
					name_ko: "계란",
					post: 0,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "bottle_of_breast_milk",
					plural: "bottles of breast milk",
					name_ko: "모유를 넣은 병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "bottle_of_semen",
					plural: "bottles of semen",
					name_ko: "정액을 넣은 병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "cabbage",
					plural: "cabbages",
					name_ko: "양배추",
					post: 1,
					unit_ko: "포기",
					unit_post:1,
				},

				{
					name: "turnip",
					plural: "turnips",
					name_ko: "순무",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "broccoli",
					plural: "broccoli",
					name_ko: "브로콜리",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "ghostshroom",
					plural: "ghostshrooms",
					name_ko: "유령버섯",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "blackberry",
					plural: "blackberries",
					name_ko: "블랙베리",
					post: 1,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "carnation",
					plural: "carnations",
					name_ko: "카네이션",
					post: 0,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "bird_egg",
					plural: "bird eggs",
					name_ko: "새 알",
					post: 2,
					unit_ko: "개",
					unit_post:1,
				},

				{
					name: "baby_bottle_of_breast_milk",
					plural: "baby bottles of breast milk",
					name_ko: "모유를 넣은 젖병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "baby bottle of breast milk",	/* .singular로 _ 없는 표현이 있어 추가: 필요시 통합할것 */
					plural: "baby bottles of breast milk",
					name_ko: "모유를 넣은 젖병",
					post: 0,
					unit_ko: "병",
					unit_post:0,
				},

				{
					name: "plumeria",
					plural: "plumerias",
					name_ko: "플루메리아",
					post:1,
					unit_ko: "송이",
					unit_post:1,
				},

				{
					name: "oyster_pearl",
					plural: "oyster pearls",
					name_ko: "진주",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},
				{
					name: "oyster pearl",	/* .singular로 _ 없는 표현이 있어 추가: 필요시 통합할것 */
					plural: "oyster pearls",
					name_ko: "진주",
					post:1,
					unit_ko: "개",
					unit_post:1,
				},
		];
	}
}
window.trinit_plants = trinit_plants;
