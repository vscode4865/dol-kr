/* eslint-disable no-undef */
const statDisplay = (() => {
	function statChange(statType, amount, colorClass, condition = () => true) {
		amount = Number(amount);
		if (V.statdisable === "t" || !condition()) return "";

		const prefix = amount < 0 ? "- " : "+ ";
		return ` | <span class="${colorClass}">${prefix.repeat(Math.abs(amount))}${statType}</span>`;
	}

	function grace(amount, expectedRank) {
		amount = Number(amount);
		if (!amount || V.statdisable === "t") return "";

		let displayGrace = true;

		// Optional second variable is the rank of the NPC giving the order, or when the player is expected to meet a higher standard. Grace changes won't apply if the player's rank equals or exceeds the expected rank
		const ranks = ["prospective", "initiate", "monk", "priest", "bishop"];
		const playerRankValue = ranks.indexOf(V.temple_rank);
		const expectedRankValue = ranks.indexOf(expectedRank);

		if (expectedRankValue > 1) {
			if (playerRankValue >= expectedRankValue) displayGrace = false;

			// Below might be a more interesting way to handle it, remove the above line and uncomment the below to enable. Lollipop Scythe
			// Allows the player to gain grace in events only if they are below a certain rank
			// if (amount > 0 && playerRankValue >= expectedRankValue) displayGrace = false;

			// Allows the player to lose grace in events only if they are at or above a certain rank
			// if (amount < 0 && playerRankValue < expectedRankValue) displayGrace = false;
		}

		if (displayGrace) {
			return statChange("신앙심", amount, amount > 0 ? "green" : "red");
		}
		return "";
	}
	DefineMacroS("ggrace", expectedRank => grace(1, expectedRank));
	DefineMacroS("gggrace", expectedRank => grace(2, expectedRank));
	DefineMacroS("ggggrace", expectedRank => grace(3, expectedRank));
	DefineMacroS("lgrace", expectedRank => grace(-1, expectedRank));
	DefineMacroS("llgrace", expectedRank => grace(-2, expectedRank));
	DefineMacroS("lllgrace", expectedRank => grace(-3, expectedRank));

	DefineMacroS("lstress", () => statChange("스트레스", -1, "green"));
	DefineMacroS("llstress", () => statChange("스트레스", -2, "green"));
	DefineMacroS("lllstress", () => statChange("스트레스", -3, "green"));
	DefineMacroS("gstress", () => statChange("스트레스", 1, "red"));
	DefineMacroS("ggstress", () => statChange("스트레스", 2, "red"));
	DefineMacroS("gggstress", () => statChange("스트레스", 3, "red"));

	DefineMacroS("ltiredness", () => statChange("피로", -1, "green"));
	DefineMacroS("lltiredness", () => statChange("피로", -2, "green"));
	DefineMacroS("llltiredness", () => statChange("피로", -3, "green"));
	DefineMacroS("gtiredness", () => statChange("피로", 1, "red"));
	DefineMacroS("ggtiredness", () => statChange("피로", 2, "red"));
	DefineMacroS("gggtiredness", () => statChange("피로", 3, "red"));

	DefineMacroS("larousal", () => statChange("흥분", -1, "green"));
	DefineMacroS("llarousal", () => statChange("흥분", -2, "green"));
	DefineMacroS("lllarousal", () => statChange("흥분", -3, "green"));
	DefineMacroS("garousal", () => statChange("흥분", 1, "red"));
	DefineMacroS("ggarousal", () => statChange("흥분", 2, "red"));
	DefineMacroS("gggarousal", () => statChange("흥분", 3, "red"));

	DefineMacroS("ltrauma", () => statChange("트라우마", -1, "green"));
	DefineMacroS("lltrauma", () => statChange("트라우마", -2, "green"));
	DefineMacroS("llltrauma", () => statChange("트라우마", -3, "green"));
	DefineMacroS("gtrauma", () => statChange("트라우마", 1, "red"));
	DefineMacroS("ggtrauma", () => statChange("트라우마", 2, "red"));
	DefineMacroS("gggtrauma", () => statChange("트라우마", 3, "red"));

	DefineMacroS("llewdity", () => statChange("음란함", -1, "lewd"));
	DefineMacroS("lllewdity", () => statChange("음란함", -2, "lewd"));
	DefineMacroS("llllewdity", () => statChange("음란함", -3, "lewd"));
	DefineMacroS("glewdity", () => statChange("음란함", 1, "lewd"));
	DefineMacroS("gglewdity", () => statChange("음란함", 2, "lewd"));
	DefineMacroS("ggglewdity", () => statChange("음란함", 3, "lewd"));

	DefineMacroS("lpain", () => statChange("고통", -1, "green"));
	DefineMacroS("llpain", () => statChange("고통", -2, "green"));
	DefineMacroS("lllpain", () => statChange("고통", -3, "green"));
	DefineMacroS("gpain", () => statChange("고통", 1, "red"));
	DefineMacroS("ggpain", () => statChange("고통", 2, "red"));
	DefineMacroS("gggpain", () => statChange("고통", 3, "red"));

	DefineMacroS("lpurity", () => statChange("순결도", -1, "red"));
	DefineMacroS("llpurity", () => statChange("순결도", -2, "red"));
	DefineMacroS("lllpurity", () => statChange("순결도", -3, "red"));
	DefineMacroS("gpurity", () => statChange("순결도", 1, "green"));
	DefineMacroS("ggpurity", () => statChange("순결도", 2, "green"));
	DefineMacroS("gggpurity", () => statChange("순결도", 3, "green"));

	DefineMacroS("ldelinquency", () => statChange("불량", -1, "green"));
	DefineMacroS("lldelinquency", () => statChange("불량", -2, "green"));
	DefineMacroS("llldelinquency", () => statChange("불량", -3, "green"));
	DefineMacroS("gdelinquency", () => statChange("불량", 1, "red"));
	DefineMacroS("ggdelinquency", () => statChange("불량", 2, "red"));
	DefineMacroS("gggdelinquency", () => statChange("불량", 3, "red"));

	DefineMacroS("lcool", () => statChange("평판", -1, "red"));
	DefineMacroS("llcool", () => statChange("평판", -2, "red"));
	DefineMacroS("lllcool", () => statChange("평판", -3, "red"));
	DefineMacroS("gcool", () => statChange("평판", 1, "green"));
	DefineMacroS("ggcool", () => statChange("평판", 2, "green"));
	DefineMacroS("gggcool", () => statChange("평판", 3, "green"));

	DefineMacroS("lsaltiness", () => statChange("소금기", -1, "red"));
	DefineMacroS("llsaltiness", () => statChange("소금기", -2, "red"));
	DefineMacroS("lllsaltiness", () => statChange("소금기", -3, "red"));
	DefineMacroS("gsaltiness", () => statChange("소금기", 1, "green"));
	DefineMacroS("ggsaltiness", () => statChange("소금기", 2, "green"));
	DefineMacroS("gggsaltiness", () => statChange("소금기", 3, "green"));

	DefineMacroS("lchaos", () => statChange("혼란", -1, "red"));
	DefineMacroS("llchaos", () => statChange("혼란", -2, "red"));
	DefineMacroS("lllchaos", () => statChange("혼란", -3, "red"));
	DefineMacroS("gchaos", () => statChange("혼란", 1, "green"));
	DefineMacroS("ggchaos", () => statChange("혼란", 2, "green"));
	DefineMacroS("gggchaos", () => statChange("혼란", 3, "green"));

	DefineMacroS("ltrust", () => statChange("신뢰", -1, "red"));
	DefineMacroS("lltrust", () => statChange("신뢰", -2, "red"));
	DefineMacroS("llltrust", () => statChange("신뢰", -3, "red"));
	DefineMacroS("gtrust", () => statChange("신뢰", 1, "green"));
	DefineMacroS("ggtrust", () => statChange("신뢰", 2, "green"));
	DefineMacroS("gggtrust", () => statChange("신뢰", 3, "green"));

	DefineMacroS("loxygen", () => statChange("공기", -1, "blue"));
	DefineMacroS("goxygen", () => statChange("공기", 1, "teal"));

	DefineMacroS("lcontrol", () => statChange("통제력", -1, "red"));
	DefineMacroS("llcontrol", () => statChange("통제력", -2, "red"));
	DefineMacroS("lllcontrol", () => statChange("통제력", -3, "red"));
	DefineMacroS("gcontrol", () => statChange("통제력", 1, "green"));
	DefineMacroS("ggcontrol", () => statChange("통제력", 2, "green"));
	DefineMacroS("gggcontrol", () => statChange("통제력", 3, "green"));
	DefineMacroS("lcombatcontrol", () => statChange("통제력", -1, "red"));
	DefineMacroS("llcombatcontrol", () => statChange("통제력", -2, "red"));
	DefineMacroS("lllcombatcontrol", () => statChange("통제력", -3, "red"));
	DefineMacroS("gcombatcontrol", () => statChange("통제력", 1, "green", () => V.control < V.controlstart));
	DefineMacroS("ggcombatcontrol", () => statChange("통제력", 2, "green", () => V.control < V.controlstart));
	DefineMacroS("gggcombatcontrol", () => statChange("통제력", 3, "green", () => V.control < V.controlstart));

	DefineMacroS("gmystery", () => statChange("????", 1, "red"));
	DefineMacroS("gschool", () => statChange("학교", 1, "green"));

	DefineMacroS("gswimming", () => statChange("수영", 1, "green"));
	DefineMacroS("ggswimming", () => statChange("수영", 2, "green"));
	DefineMacroS("gggswimming", () => statChange("수영", 3, "green"));

	DefineMacroS("gathletics", () => statChange("운동", 1, "green"));
	DefineMacroS("ggathletics", () => statChange("운동", 2, "green"));
	DefineMacroS("gggathletics", () => statChange("운동", 3, "green"));

	DefineMacroS("gdanceskill", () => statChange("춤 기술", 1, "green"));
	DefineMacroS("ggdanceskill", () => statChange("춤 기술", 2, "green"));
	DefineMacroS("gggdanceskill", () => statChange("춤 기술", 3, "green"));

	DefineMacroS("gtending", () => statChange("관리", 1, "green"));
	DefineMacroS("ggtending", () => statChange("관리", 2, "green"));
	DefineMacroS("gggtending", () => statChange("관리", 3, "green"));

	DefineMacroS("ltreasure", () => statChange("보물 찾을 확률 감소", 0, "purple"));
	DefineMacroS("gtreasure", () => statChange("보물 찾을 확률 증가", 0, "green"));

	DefineMacroS("lharass", () => statChange("희롱 확률 감소", 0, "teal"));
	DefineMacroS("gharass", () => statChange("희롱 확률 증가", 0, "pink"));
	DefineMacroS("noharass", () => statChange("희롱 확률 없음", 0, "green"));

	DefineMacroS("llove", npc => statChange(npc ? `${trNPCname(npc, '의')} 사랑` : "사랑", -1, "red"));
	DefineMacroS("lllove", npc => statChange(npc ? `${trNPCname(npc, '의')} 사랑` : "사랑", -2, "red"));
	DefineMacroS("llllove", npc => statChange(npc ? `${trNPCname(npc, '의')} 사랑` : "사랑", -3, "red"));
	DefineMacroS("glove", npc => statChange(npc ? `${trNPCname(npc, '의')} 사랑` : "사랑", 1, "green"));
	DefineMacroS("gglove", npc => statChange(npc ? `${trNPCname(npc, '의')} 사랑` : "사랑", 2, "green"));
	DefineMacroS("ggglove", npc => statChange(npc ? `${trNPCname(npc, '의')} 사랑` : "사랑", 3, "green"));

	DefineMacroS("llust", npc => statChange(npc ? `${trNPCname(npc, '의')} 욕정` : "욕정", -1, "teal"));
	DefineMacroS("lllust", npc => statChange(npc ? `${trNPCname(npc, '의')} 욕정` : "욕정", -2, "teal"));
	DefineMacroS("llllust", npc => statChange(npc ? `${trNPCname(npc, '의')} 욕정` : "욕정", -3, "teal"));
	DefineMacroS("glust", npc => statChange(npc ? `${trNPCname(npc, '의')} 욕정` : "욕정", 1, "lewd"));
	DefineMacroS("gglust", npc => statChange(npc ? `${trNPCname(npc, '의')} 욕정` : "욕정", 2, "lewd"));
	DefineMacroS("ggglust", npc => statChange(npc ? `${trNPCname(npc, '의')} 욕정` : "욕정", 3, "lewd"));

	DefineMacroS("lrtrauma", override => statChange("로빈의 트라우마", -1, "green", () => C.npc.Robin.trauma > 0 || override));
	DefineMacroS("llrtrauma", override => statChange("로빈의 트라우마", -2, "green", () => C.npc.Robin.trauma > 0 || override));
	DefineMacroS("lllrtrauma", override => statChange("로빈의 트라우마", -3, "green", () => C.npc.Robin.trauma > 0 || override));
	DefineMacroS("grtrauma", override => statChange("로빈의 트라우마", 1, "green", () => C.npc.Robin.trauma >= 20 || override));
	DefineMacroS("ggrtrauma", override => statChange("로빈의 트라우마", 2, "green", () => C.npc.Robin.trauma >= 20 || override));
	DefineMacroS("gggrtrauma", override => statChange("로빈의 트라우마", 3, "green", () => C.npc.Robin.trauma >= 20 || override));

	DefineMacroS("lattention", () => statChange("주목", -1, "lewd"));
	DefineMacroS("llattention", () => statChange("주목", -2, "lewd"));
	DefineMacroS("lllattention", () => statChange("주목", -3, "lewd"));
	DefineMacroS("gattention", loc => statChange("주목", 1, "lewd", () => !loc || (loc === "prison" && !V.daily.prison.attentionDay)));
	DefineMacroS("ggattention", loc => statChange("주목", 2, "lewd", () => !loc || (loc === "prison" && !V.daily.prison.attentionDay)));
	DefineMacroS("gggattention", loc => statChange("주목", 3, "lewd", () => !loc || (loc === "prison" && !V.daily.prison.attentionDay)));

	DefineMacroS("laggro", () => statChange("레미의 침략", -1, "green", () => V.farm));
	DefineMacroS("llaggro", () => statChange("레미의 침략", -2, "green", () => V.farm));
	DefineMacroS("lllaggro", () => statChange("레미의 침략", -3, "green", () => V.farm));
	DefineMacroS("gaggro", () => statChange("레미의 침략", 1, "red", () => V.farm));
	DefineMacroS("ggaggro", () => statChange("레미의 침략", 2, "red", () => V.farm));
	DefineMacroS("gggaggro", () => statChange("레미의 침략", 3, "red", () => V.farm));

	DefineMacroS("lksuspicion", () => statChange("질투", -1, "green"));
	DefineMacroS("llksuspicion", () => statChange("질투", -2, "green"));
	DefineMacroS("lllksuspicion", () => statChange("질투", -3, "green"));
	DefineMacroS("gksuspicion", () => statChange("질투", 1, "red"));
	DefineMacroS("ggksuspicion", () => statChange("질투", 2, "red"));
	DefineMacroS("gggksuspicion", () => statChange("질투", 3, "red"));

	DefineMacroS("lsuspicion", () => statChange("의심", -1, "green"));
	DefineMacroS("llsuspicion", () => statChange("의심", -2, "green"));
	DefineMacroS("lllsuspicion", () => statChange("의심", -3, "green"));
	DefineMacroS("gsuspicion", () => statChange("의심", 1, "red"));
	DefineMacroS("ggsuspicion", () => statChange("의심", 2, "red"));
	DefineMacroS("gggsuspicion", () => statChange("의심", 3, "red"));

	DefineMacroS("larage", () => statChange("분노", -1, "green", () => V.averyragerevealed));
	DefineMacroS("llarage", () => statChange("분노", -2, "green", () => V.averyragerevealed));
	DefineMacroS("lllarage", () => statChange("분노", -3, "green", () => V.averyragerevealed));
	DefineMacroS("garage", () => statChange("분노", 1, "red", () => V.averyragerevealed));
	DefineMacroS("ggarage", () => statChange("분노", 2, "red", () => V.averyragerevealed));
	DefineMacroS("gggarage", () => statChange("분노", 3, "red", () => V.averyragerevealed));

	DefineMacroS("lendear", () => statChange("귀여움", -1, "pink"));
	DefineMacroS("llendear", () => statChange("귀여움", -2, "pink"));
	DefineMacroS("lllendear", () => statChange("귀여움", -3, "pink"));
	DefineMacroS("gendear", () => statChange("귀여움", 1, "teal"));
	DefineMacroS("ggendear", () => statChange("귀여움", 2, "teal"));
	DefineMacroS("gggendear", () => statChange("귀여움", 3, "teal"));

	DefineMacroS("lhope", () => statChange("희망", -1, "pink"));
	DefineMacroS("llhope", () => statChange("희망", -2, "pink"));
	DefineMacroS("lllhope", () => statChange("희망", -3, "pink"));
	DefineMacroS("ghope", () => statChange("희망", 1, "teal"));
	DefineMacroS("gghope", () => statChange("희망", 2, "teal"));
	DefineMacroS("ggghope", () => statChange("희망", 3, "teal"));

	DefineMacroS("lreb", () => statChange("반항심", -1, "blue"));
	DefineMacroS("llreb", () => statChange("반항심", -2, "blue"));
	DefineMacroS("lllreb", () => statChange("반항심", -3, "blue"));
	DefineMacroS("greb", () => statChange("반항심", 1, "def"));
	DefineMacroS("ggreb", () => statChange("반항심", 2, "def"));
	DefineMacroS("gggreb", () => statChange("반항심", 3, "def"));

	DefineMacroS("ghandskill", () => statChange("손 기술", 1, "green"));
	DefineMacroS("goralskill", () => statChange("입 기술", 1, "green"));
	DefineMacroS("gthighskill", () => statChange("허벅지 기술", 1, "green"));
	DefineMacroS("gbottomskill", () => statChange("엉덩이 기술", 1, "green"));
	DefineMacroS("gvaginalskill", () => statChange("보지 기술", 1, "green"));
	DefineMacroS("gpenileskill", () => statChange("자지 기술", 1, "green"));
	DefineMacroS("ganalskill", () => statChange("항문 기술", 1, "green"));
	DefineMacroS("gfeetskill", () => statChange("발 기술", 1, "green"));
	DefineMacroS("gchestskill", () => statChange("가슴 기술", 1, "green"));

	DefineMacroS("lstockholm", () => statChange("스톡홀름 증후군", -1, "lblue"));
	DefineMacroS("llstockholm", () => statChange("스톡홀름 증후군", -2, "lblue"));
	DefineMacroS("lllstockholm", () => statChange("스톡홀름 증후군", -3, "lblue"));
	DefineMacroS("gstockholm", () => statChange("스톡홀름 증후군", 1, "blue"));
	DefineMacroS("ggstockholm", () => statChange("스톡홀름 증후군", 2, "blue"));
	DefineMacroS("gggstockholm", () => statChange("스톡홀름 증후군", 3, "blue"));

	DefineMacroS("lshame", () => statChange("수치", -1, "green"));
	DefineMacroS("llshame", () => statChange("수치", -2, "green"));
	DefineMacroS("lllshame", () => statChange("수치", -3, "green"));
	DefineMacroS("gshame", () => statChange("수치", 1, "red"));
	DefineMacroS("ggshame", () => statChange("수치", 2, "red"));
	DefineMacroS("gggshame", () => statChange("수치", 3, "red"));

	DefineMacroS("lfarm", () => statChange("농장 생산량", -1, "red"));
	DefineMacroS("llfarm", () => statChange("농장 생산량", -2, "red"));
	DefineMacroS("lllfarm", () => statChange("농장 생산량", -3, "red"));
	DefineMacroS("gfarm", () => statChange("농장 생산량", 1, "green"));
	DefineMacroS("ggfarm", () => statChange("농장 생산량", 2, "green"));
	DefineMacroS("gggfarm", () => statChange("농장 생산량", 3, "green"));

	DefineMacroS("gnet", () => statChange("그물 숙련도", 1, "green"));
	DefineMacroS("gbaton", () => statChange("봉 숙련도", 1, "green"));
	DefineMacroS("ggbaton", () => statChange("봉 숙련도", 2, "green"));
	DefineMacroS("gggbaton", () => statChange("봉 숙련도", 3, "green"));
	DefineMacroS("gwhip", () => statChange("채찍 숙련도", 1, "green"));
	DefineMacroS("ggwhip", () => statChange("채찍 숙련도", 2, "green"));
	DefineMacroS("gggwhip", () => statChange("채찍 숙련도", 3, "green"));

	DefineMacroS("lsecurity", () => statChange("보안", -1, "green"));
	DefineMacroS("llsecurity", () => statChange("보안", -2, "green"));
	DefineMacroS("lllsecurity", () => statChange("보안", -3, "green"));
	DefineMacroS("gsecurity", () => statChange("보안", 1, "red"));
	DefineMacroS("ggsecurity", () => statChange("보안", 2, "red"));
	DefineMacroS("gggsecurity", () => statChange("보안", 3, "red"));

	DefineMacroS("limpatience", () => statChange("조바심", -1, "green"));
	DefineMacroS("llimpatience", () => statChange("조바심", -2, "green"));
	DefineMacroS("lllimpatience", () => statChange("조바심", -3, "green"));
	DefineMacroS("gimpatience", () => statChange("조바심", 1, "red"));
	DefineMacroS("ggimpatience", () => statChange("조바심", 2, "red"));
	DefineMacroS("gggimpatience", () => statChange("조바심", 3, "red"));

	DefineMacroS("linterest", () => statChange("관심", -1, "red"));
	DefineMacroS("llinterest", () => statChange("관심", -2, "red"));
	DefineMacroS("lllinterest", () => statChange("관심", -3, "red"));
	DefineMacroS("ginterest", () => statChange("관심", 1, "green"));
	DefineMacroS("gginterest", () => statChange("관심", 2, "green"));
	DefineMacroS("ggginterest", () => statChange("관심", 3, "green"));

	DefineMacroS("ldaring", () => statChange("대담성", -1, "red"));
	DefineMacroS("lldaring", () => statChange("대담성", -2, "red"));
	DefineMacroS("llldaring", () => statChange("대담성", -3, "red"));
	DefineMacroS("gdaring", () => statChange("대담성", 1, "green"));
	DefineMacroS("ggdaring", () => statChange("대담성", 2, "green"));
	DefineMacroS("gggdaring", () => statChange("대담성", 3, "green"));

	DefineMacroS("gknowledge", () => statChange("지식", 1, "green"));
	DefineMacroS("gbodywriting", () => statChange("신체낙서", 1, "purple"));
	DefineMacroS("ggbodywriting", () => statChange("신체낙서", 2, "purple"));
	DefineMacroS("gggbodywriting", () => statChange("신체낙서", 3, "purple"));
	DefineMacroS("ghallucinogens", () => statChange("환각제", 1, "lewd"));
	DefineMacroS("gghallucinogens", () => statChange("환각제", 2, "lewd"));
	DefineMacroS("ggghallucinogens", () => statChange("환각제", 3, "lewd"));

	DefineMacroS("lobey", () => statChange("순종", -1, "red"));
	DefineMacroS("llobey", () => statChange("순종", -2, "red"));
	DefineMacroS("lllobey", () => statChange("순종", -3, "red"));
	DefineMacroS("gobey", () => statChange("순종", 1, "pink"));
	DefineMacroS("ggobey", () => statChange("순종", 2, "pink"));
	DefineMacroS("gggobey", () => statChange("순종", 3, "pink"));

	DefineMacroS("lhunger", () => statChange("배고픔", -1, "green"));
	DefineMacroS("llhunger", () => statChange("배고픔", -2, "green"));
	DefineMacroS("lllhunger", () => statChange("배고픔", -3, "green"));
	DefineMacroS("ghunger", () => statChange("배고픔", 1, "red"));
	DefineMacroS("gghunger", () => statChange("배고픔", 2, "red"));
	DefineMacroS("ggghunger", () => statChange("배고픔", 3, "red"));

	DefineMacroS("gacceptance", () => statChange("수용", 1, "green"));

	DefineMacroS("gwillpower", () => statChange("의지력", 1, "green"));
	DefineMacroS("ggwillpower", () => statChange("의지력", 2, "green"));
	DefineMacroS("gggwillpower", () => statChange("의지력", 3, "green"));

	DefineMacroS("lphysique", () => statChange("체격", -1, "red"));
	DefineMacroS("llphysique", () => statChange("체격", -2, "red"));
	DefineMacroS("lllphysique", () => statChange("체격", -3, "red"));
	DefineMacroS("gphysique", () => statChange("체격", 1, "green"));
	DefineMacroS("ggphysique", () => statChange("체격", 2, "green"));
	DefineMacroS("gggphysique", () => statChange("체격", 3, "green"));

	DefineMacroS("gtanned", () => statChange("선탠", 1, "green"));
	DefineMacroS("ggtanned", () => statChange("선탠", 2, "green"));
	DefineMacroS("gggtanned", () => statChange("선탠", 3, "green"));

	// Conditions that modify variables like this should preferably not be in the same widget as text output
	DefineMacroS("lcorruption", threat => {
		if (V.earSlime.startedThreats && !threat) V.earSlime.startedThreats = true;
		return statChange("타락도", -1, "teal", () => V.earSlime.corruption > V.earSlime.growth / 2);
	});
	DefineMacroS("llcorruption", threat => {
		if (V.earSlime.startedThreats && !threat) V.earSlime.startedThreats = true;
		return statChange("타락도", -2, "teal", () => V.earSlime.corruption > V.earSlime.growth / 2);
	});
	DefineMacroS("lllcorruption", threat => {
		if (V.earSlime.startedThreats && !threat) V.earSlime.startedThreats = true;
		return statChange("타락도", -3, "teal", () => V.earSlime.corruption > V.earSlime.growth / 2);
	});
	DefineMacroS("gcorruption", () => statChange("타락도", 1, "pink", () => V.earSlime.corruption < 100));
	DefineMacroS("ggcorruption", () => statChange("타락도", 2, "pink", () => V.earSlime.corruption < 100));
	DefineMacroS("gggcorruption", () => statChange("타락도", 3, "pink", () => V.earSlime.corruption < 100));

	DefineMacroS("lawareness", () => {
		if (V.innocencestate === 1) {
			return statChange("순수함", 1, "blue");
		}
		return statChange("성지식", -1, "blue");
	});
	DefineMacroS("llawareness", () => {
		if (V.innocencestate === 1) {
			return statChange("순수함", 2, "blue");
		}
		return statChange("성지식", -2, "blue");
	});
	DefineMacroS("lllawareness", () => {
		if (V.innocencestate === 1) {
			return statChange("순수함", 3, "blue");
		}
		return statChange("성지식", -3, "blue");
	});
	DefineMacroS("gawareness", () => {
		if (V.innocencestate === 1) {
			return statChange("순수함", -1, "blue");
		}
		return statChange("성지식", 1, "lblue");
	});
	DefineMacroS("ggawareness", () => {
		if (V.innocencestate === 1) {
			return statChange("순수함", -2, "blue");
		}
		return statChange("성지식", 2, "lblue");
	});
	DefineMacroS("gggawareness", () => {
		if (V.innocencestate === 1) {
			return statChange("순수함", -3, "blue");
		}
		return statChange("성지식", 3, "lblue");
	});

	DefineMacroS("lspurity", () => {
		let result;
		if (C.npc.Sydney.purity >= 1) {
			result = statChange("시드니의 순결도", -1, "purple");
		} else {
			result = statChange("시드니의 타락도", 1, "purple");
		}
		if (C.npc.Sydney.purity <= 50 && T.lustincrdisplay !== 1) {
			result += statChange("욕정", 1, "lewd");
		}
		T.warnstate = -1;
		return result;
	});
	DefineMacroS("llspurity", () => {
		let result;
		if (C.npc.Sydney.purity >= 1) {
			result = statChange("시드니의 순결도", -2, "purple");
		} else {
			result = statChange("시드니의 타락도", 2, "purple");
		}
		if (C.npc.Sydney.purity <= 50 && T.lustincrdisplay !== 1) {
			result += statChange("욕정", 1, "lewd");
		}
		T.warnstate = -2;
		return result;
	});
	DefineMacroS("lllspurity", () => {
		let result;
		if (C.npc.Sydney.purity >= 1) {
			result = statChange("시드니의 순결도", -3, "purple");
		} else {
			result = statChange("시드니의 타락도", 3, "purple");
		}
		if (C.npc.Sydney.purity <= 50 && T.lustincrdisplay !== 1) {
			result += statChange("욕정", 1, "lewd");
		}
		T.warnstate = -3;
		return result;
	});
	DefineMacroS("gspurity", () => {
		T.warnstate = 1;
		if (C.npc.Sydney.purity >= 1) {
			return statChange("시드니의 순결도", 1, "teal");
		}
		return statChange("시드니의 타락도", -1, "teal");
	});
	DefineMacroS("ggspurity", () => {
		T.warnstate = 2;
		if (C.npc.Sydney.purity >= 1) {
			return statChange("시드니의 순결도", 2, "teal");
		}
		return statChange("시드니의 타락도", -2, "teal");
	});
	DefineMacroS("gggspurity", () => {
		T.warnstate = 3;
		if (C.npc.Sydney.purity >= 1) {
			return statChange("시드니의 순결도", 3, "teal");
		}
		return statChange("시드니의 타락도", -3, "teal");
	});

	DefineMacroS("lslust", () => {
		T.lustincrdisplay = 1;
		return statChange("시드니의 욕정", -1, "teal");
	});
	DefineMacroS("llslust", () => {
		T.lustincrdisplay = 1;
		return statChange("시드니의 욕정", -2, "teal");
	});
	DefineMacroS("lllslust", () => {
		T.lustincrdisplay = 1;
		return statChange("시드니의 욕정", -3, "teal");
	});
	DefineMacroS("gslust", () => {
		T.lustincrdisplay = 1;
		return statChange("시드니의 욕정", 1, "lewd");
	});
	DefineMacroS("ggslust", () => {
		T.lustincrdisplay = 1;
		return statChange("시드니의 욕정", 2, "lewd");
	});
	DefineMacroS("gggslust", () => {
		T.lustincrdisplay = 1;
		return statChange("시드니의 욕정", 3, "lewd");
	});

	DefineMacroS("lscience", () => statChange("과학", -1, "red"));
	DefineMacroS("gscience", () => {
		const result = statChange("과학", 1, "green");
		return `${result} ${gainSchoolStar("science_star")}`;
	});
	DefineMacroS("ggscience", () => {
		const result = statChange("과학", 2, "green");
		return `${result} ${gainSchoolStar("science_star")}`;
	});
	DefineMacroS("gggscience", () => {
		const result = statChange("과학", 3, "green");
		return `${result} ${gainSchoolStar("science_star")}`;
	});

	DefineMacroS("lmaths", () => statChange("수학", -1, "red"));
	DefineMacroS("gmaths", () => {
		const result = statChange("수학", 1, "green");
		return `${result} ${gainSchoolStar("maths_star")}`;
	});
	DefineMacroS("ggmaths", () => {
		const result = statChange("수학", 2, "green");
		return `${result} ${gainSchoolStar("maths_star")}`;
	});
	DefineMacroS("gggmaths", () => {
		const result = statChange("수학", 3, "green");
		return `${result} ${gainSchoolStar("maths_star")}`;
	});

	DefineMacroS("lenglish", () => statChange("영어", -1, "red"));
	DefineMacroS("genglish", () => {
		const result = statChange("영어", 1, "green");
		return `${result} ${gainSchoolStar("english_star")}`;
	});
	DefineMacroS("ggenglish", () => {
		const result = statChange("영어", 2, "green");
		return `${result} ${gainSchoolStar("english_star")}`;
	});
	DefineMacroS("gggenglish", () => {
		const result = statChange("영어", 3, "green");
		return `${result} ${gainSchoolStar("english_star")}`;
	});

	DefineMacroS("lhistory", () => statChange("역사", -1, "red"));
	DefineMacroS("ghistory", () => {
		const result = statChange("역사", 1, "green");
		return `${result} ${gainSchoolStar("history_star")}`;
	});
	DefineMacroS("gghistory", () => {
		const result = statChange("역사", 2, "green");
		return `${result} ${gainSchoolStar("history_star")}`;
	});
	DefineMacroS("ggghistory", () => {
		const result = statChange("역사", 3, "green");
		return `${result} ${gainSchoolStar("history_star")}`;
	});

	DefineMacroS("ghousekeeping", amount => {
		if (amount !== undefined || V.housekeeping < amount) {
			return statChange("정리정돈", 1, "green");
		} else if (V.statsdisable === "f" && V.housekeeping >= amount) {
			return "정리정돈 기술을 향상시키기에는 당신은 기술이 너무 좋다.";
		}
		return "";
	});
	DefineMacroS("gghousekeeping", amount => statChange("정리정돈", 2, "green", () => amount !== undefined || V.housekeeping < amount));
	DefineMacroS("ggghousekeeping", amount => statChange("정리정돈", 3, "green", () => amount !== undefined || V.housekeeping < amount));

	DefineMacroS("ldom", npc => {
		let targetName = "";
		if ((V.npc.includes("Robin") && !npc) || npc === "Robin") {
			return statChange("로빈의 자신감", -1, "lblue");
		} else if (npc) targetName = npc;
		else if (V.npc.length >= 2) targetName = V.npc[0];
		return statChange(`${trNPCname(targetName, '의')} 지배도`, -1, "lblue");
	});
	DefineMacroS("lldom", npc => {
		let targetName = "";
		if ((V.npc.includes("Robin") && !npc) || npc === "Robin") {
			return statChange("로빈의 자신감", -2, "lblue");
		} else if (npc) targetName = npc;
		else if (V.npc.length >= 2) targetName = V.npc[0];
		return statChange(`${trNPCname(targetName, '의')} 지배도`, -2, "lblue");
	});
	DefineMacroS("llldom", npc => {
		let targetName = "";
		if ((V.npc.includes("Robin") && !npc) || npc === "Robin") {
			return statChange("로빈의 자신감", -3, "lblue");
		} else if (npc) targetName = npc;
		else if (V.npc.length >= 2) targetName = V.npc[0];
		return statChange(`${trNPCname(targetName, '의')} 지배도`, -3, "lblue");
	});
	DefineMacroS("gdom", npc => {
		let targetName = "";
		if ((V.npc.includes("Robin") && !npc) || npc === "Robin") {
			return statChange("로빈의 자신감", 1, "purple");
		} else if (npc) targetName = npc;
		else if (V.npc.length >= 2) targetName = V.npc[0];
		return statChange(`${trNPCname(targetName, '의')} 지배도`, 1, "purple");
	});
	DefineMacroS("ggdom", npc => {
		let targetName = "";
		if ((V.npc.includes("Robin") && !npc) || npc === "Robin") {
			return statChange("로빈의 자신감", 2, "purple");
		} else if (npc) targetName = npc;
		else if (V.npc.length >= 2) targetName = V.npc[0];
		return statChange(`${trNPCname(targetName, '의')} 지배도`, 2, "purple");
	});
	DefineMacroS("gggdom", npc => {
		let targetName = "";
		if ((V.npc.includes("Robin") && !npc) || npc === "Robin") {
			return statChange("로빈의 자신감", 3, "purple");
		} else if (npc) targetName = npc;
		else if (V.npc.length >= 2) targetName = V.npc[0];
		return statChange(`${trNPCname(targetName, '의')} 지배도`, 3, "purple");
	});

	DefineMacroS("lrespect", () => statChange("존중", -1, "red"));
	DefineMacroS("llrespect", () => statChange("존중", -2, "red"));
	DefineMacroS("lllrespect", () => statChange("존중", -3, "red"));
	DefineMacroS("grespect", arg =>
		statChange("존중", 1, "green", () => (arg === "scum" && V.pirate_rank !== 0) || (arg === "mate" && V.pirate_rank !== 1))
	);
	DefineMacroS("ggrespect", arg =>
		statChange("존중", 2, "green", () => (arg === "scum" && V.pirate_rank !== 0) || (arg === "mate" && V.pirate_rank !== 1))
	);
	DefineMacroS("gggrespect", arg =>
		statChange("존중", 3, "green", () => (arg === "scum" && V.pirate_rank !== 0) || (arg === "mate" && V.pirate_rank !== 1))
	);

	DefineMacroS("ladeviancy", () => statChange("알렉스의 이상성욕", -1, "green"));
	DefineMacroS("lladeviancy", () => statChange("알렉스의 이상성욕", -2, "green"));
	DefineMacroS("llladeviancy", () => statChange("알렉스의 이상성욕", -3, "green"));
	DefineMacroS("gadeviancy", () => statChange("알렉스의 이상성욕", 1, "red"));
	DefineMacroS("ggadeviancy", () => statChange("알렉스의 이상성욕", 2, "red"));
	DefineMacroS("gggadeviancy", () => statChange("알렉스의 이상성욕", 3, "red"));

	return {
		statChange,
	};
})();
window.statDisplay = statDisplay;
