function effectsWater() {
	DOL.Perflog.logWidgetStart("effectsWaterJs");
	const fragment = document.createDocumentFragment();

	const sWikifier = text => {
		fragment.append(Wikifier.wikifyEval(text + " "));
	};
	const span = (text, colour) => {
		const element = document.createElement("span");
		if (colour) element.classList.add(colour);
		element.textContent = text + " ";
		fragment.append(element);
	};
	const br = () => fragment.append(document.createElement("br"));

	let wetIntro = 0;
	let squidArousal = 0;

	switch (V.squidcount) {
		case 1:
			sWikifier('<span class="purple">당신은 오징어가 당신의 <<genitals_ rul>> 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 100 "genitals">>');
			break;
		case 2:
			sWikifier(
				'<span class="purple">당신은 오징어들이 당신의 <<genitals_ wa>> 가슴을 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 100 "breasts">><<arousal 100 "genitals">>'
			);
			break;
		case 3:
			sWikifier(
				'<span class="purple">당신은 오징어들이 당신의 <<genitals_ wa>> <<breasts_ rul>> 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 200 "breasts">><<arousal 100 "genitals">>'
			);
			break;
		case 4:
			sWikifier(
				'<span class="purple">당신은 오징어들이 당신의 <<genitalsPost>>, <<breasts_ wa>>, <<bottom_ ul>> 희롱하는 것을 느낀다.</span> <<garousal>><<arousal 200 "breasts">><<arousal 100 "genitals">><<arousal 100 "bottom">>'
			);
			break;
		default:
			if (V.squidcount >= 5) {
				squidArousal = V.squidcount * 30;
				sWikifier(`<span class="purple">당신은 ${V.squidcount}마리의 오징어들이 당신의 <<genitalsPost>>, <<breastsPost>>, <<bottom_ gwa>>, 당신 몸의 다른 부분들을 희롱하는 것을 느낀다.</span>
				<<garousal>><<arousal ${squidArousal} "breasts">><<arousal ${squidArousal} "genitals">><<arousal ${squidArousal} "bottom">>`);
			}
			break;
	}
	if (!V.worn.upper.type.includes("naked") && !waterproofCheck(V.worn.upper)) {
		if (V.upperwet >= 100 && V.upperwetstage < 3) {
			V.upperwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">물이 당신의 <<worn_upper_name>>에 스며들어, 당신의 <<undertop_ ul>> 노출시킨다.</span>`);
		} else if (V.upperwet < 90 && V.upperwetstage >= 3) {
			V.upperwetstage = 2;
			sWikifier(`<span class="green">당신의 <<worn_upper_name_ i>> 말라서, 당신의 <<undertop_ ul>> 감춘다.</span>`);
		} else if (V.upperwet >= 80 && V.upperwetstage < 2) {
			V.upperwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 <<worn_upper_name_ i>> 젖었다.</span>`);
		} else if (V.upperwet < 70 && V.upperwetstage >= 2) {
			V.upperwetstage = 1;
			sWikifier(`<span class="green">당신의 <<worn_upper_name_ i>> 말라간다.</span>`);
		} else if (V.upperwet >= 50 && V.upperwetstage < 1) {
			V.upperwetstage = 1;
			sWikifier(`<span class="blue">당신의 <<worn_upper_name_ un>> 축축하다.</span>`);
		} else if (V.upperwet < 40 && V.upperwetstage >= 1) {
			V.upperwetstage = 0;
			sWikifier(`<span class="green">당신의 <<worn_upper_name_ i>> 말랐다.</span>`);
		}
	}

	if (!V.worn.lower.type.includes("naked") && !waterproofCheck(V.worn.lower)) {
		if (V.lowerwet >= 100 && V.lowerwetstage < 3) {
			V.lowerwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">물이 당신의 <<worn_lower_name>>에 스며들어, 당신의 <<undies_ rul>> 노출시킨다.</span>`);
		} else if (V.lowerwet < 90 && V.lowerwetstage >= 3) {
			V.lowerwetstage = 2;
			sWikifier(`<span class="green">당신의 <<worn_lower_name_ i>> 말라서, 당신의 <<undies_ rul>> 감춘다.</span>`);
		} else if (V.lowerwet >= 80 && V.lowerwetstage < 2) {
			V.lowerwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 <<worn_lower_name_ i>> 젖었다.</span>`);
		} else if (V.lowerwet < 70 && V.lowerwetstage >= 2) {
			V.lowerwetstage = 1;
			sWikifier(`<span class="green">당신의 <<worn_lower_name_ i>> 말라간다.</span>`);
		} else if (V.lowerwet >= 50 && V.lowerwetstage < 1) {
			V.lowerwetstage = 1;
			sWikifier(`<span class="blue">당신의 <<worn_lower_name_ un>> 축축하다.</span>`);
		} else if (V.lowerwet < 40 && V.lowerwetstage >= 1) {
			V.lowerwetstage = 0;
			sWikifier(`<span class="green">당신의 <<worn_lower_name_ i>> 말랐다.</span>`);
		}
	}

	if (!V.worn.under_lower.type.includes("naked") && !playerChastity() && !waterproofCheck(V.worn.under_lower)) {
		if (V.underlowerwet >= 100 && V.underlowerwetstage < 3 && V.pantiesSoaked) {
			V.underlowerwetstage = 3;
			if (V.lowerwetstage === 3 || V.worn.lower.type.includes("naked")) {
				// If clothing above underwear is also wet, or missing
				wetIntro = 2;
				sWikifier(`<span class="lewd">당신의 체액이 <<worn_under_lower_name>>에 스며들어, 당신의 <<genitals_ rul>> 노출시킨다.</span>`);
			} else if (setup.clothes.lower[clothesIndex("lower", V.worn.lower)].skirt === 1) {
				sWikifier(
					`<span class="lewd">당신의 체액이 <<worn_under_lower_name>>에 스며들어, <<worn_lower_name>> 아래에서 당신의 <<genitals_ rul>> 공기 중에 노출시킨다.</span>`
				);
			} else {
				sWikifier(`<span class="lewd">당신의 체액이 <<worn_under_lower_name>>에 스며든다.</span>`);
			}
		} else if (V.underlowerwet >= 100 && V.underlowerwetstage < 3) {
			V.underlowerwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">물이 당신의 <<worn_under_lower_name>>에 스며들어, 당신의 <<genitals_ rul>> 노출시킨다.</span>`);
		} else if (V.underlowerwet < 90 && V.underlowerwetstage >= 3) {
			V.underlowerwetstage = 2;
			sWikifier(`<span class="green">당신의 <<worn_under_lower_name_ i>> 말라서, 당신의 <<genitals_ rul>> 감춘다.</span>`);
		} else if (V.underlowerwet >= 80 && V.underlowerwetstage < 2) {
			V.underlowerwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 <<worn_under_lower_name_ i>> 젖었다.</span>`);
		} else if (V.underlowerwet < 70 && V.underlowerwetstage >= 2) {
			V.underlowerwetstage = 1;
			sWikifier(`<span class="green">당신의 <<worn_under_lower_name_ i>> 말라간다.</span>`);
		} else if (V.underlowerwet >= 50 && V.underlowerwetstage < 1) {
			V.underlowerwetstage = 1;
			sWikifier(`<span class="blue">당신의 <<worn_under_lower_name_ un>> 축축하다.</span>`);
		} else if (V.underlowerwet < 40 && V.underlowerwetstage >= 1) {
			V.underlowerwetstage = 0;
			sWikifier(`<span class="green">당신의 <<worn_under_lower_name_ i>> 말랐다.</span>`);
		}
	}

	if (!V.worn.under_upper.type.includes("naked") && !V.worn.under_upper.type.includes("chastity") && !waterproofCheck(V.worn.under_upper)) {
		if (V.underupperwet >= 100 && V.underupperwetstage < 3) {
			V.underupperwetstage = 3;
			wetIntro = 2;
			sWikifier(`<span class="lewd">물이 당신의 <<worn_under_upper_name>>에 스며들어, 당신의 <<breasts_ rul>> 노출시킨다.</span>`);
		} else if (V.underupperwet < 90 && V.underupperwetstage >= 3) {
			V.underupperwetstage = 2;
			sWikifier(`<span class="green">당신의 <<worn_under_upper_name_ i>> 말라서, 당신의 <<breasts_ rul>> 감춘다.</span>`);
		} else if (V.underupperwet >= 80 && V.underupperwetstage < 2) {
			V.underupperwetstage = 2;
			wetIntro = 1;
			sWikifier(`<span class="purple">당신의 <<worn_under_upper_name_ i>> 젖었다.</span>`);
		} else if (V.underupperwet < 70 && V.underupperwetstage >= 2) {
			V.underupperwetstage = 1;
			sWikifier(`<span class="green">당신의 <<worn_under_upper_name_ i>> 말라간다.</span>`);
		} else if (V.underupperwet >= 50 && V.underupperwetstage < 1) {
			V.underupperwetstage = 1;
			sWikifier(`<span class="blue">당신의 <<worn_under_upper_name_ un>> 축축하다.</span>`);
		} else if (V.underupperwet < 40 && V.underupperwetstage >= 1) {
			V.underupperwetstage = 0;
			sWikifier(`<span class="green">당신의 <<worn_under_upper_name_ i>> 말랐다.</span>`);
		}
	}

	if (!V.possessed) {
		if (wetIntro >= 2) {
			sWikifier("<<exposure>>");
			if (V.exhibitionism >= 55) {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 아래를 쳐다보고 당신의 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있어서 음란한 황홀감을 느낀다."
						: "당신은 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있는 것을 느끼며 음란한 황홀감을 느낀다."
				);
			} else {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 당신의 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있는 것을 경악에 차서 내려다본다."
						: "당신은 당신의 옷이 완전히 투명해진 채로, 당신의 몸에 딱 달라붙어 있는 것을 느끼며 경악한다."
				);
			}
			sWikifier("<<covered>>");
			br();
			br();
		} else if (wetIntro >= 1) {
			if (V.exhibitionism >= 35) {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 아래를 쳐다보고 당신의 옷이 당신의 몸에 딱 달라붙어, 투명해지려는 것 같아서 음란한 황홀감을 느낀다."
						: "당신은 당신의 옷이 당신의 몸에 딱 달라붙어, 투명해지려는 것을 느끼며 음란한 황홀감을 느낀다."
				);
			} else {
				span(
					!V.worn.face.type.includes("blindfold")
						? "당신은 당신의 옷이 당신의 몸에 딱 달라붙어, 투명해지려는 것을 불안해하며 내려다본다."
						: "당신은 당신의 옷이 이제 당신의 몸에 딱 달라붙어, 투명해지려는 것을 느낀다."
				);
			}
			br();
			br();
		}
	}

	DOL.Perflog.logWidgetEnd("effectsWaterJs");
	return fragment;
}

Macro.add("effectswater", {
	handler() {
		const fragment = effectsWater();
		if (fragment) this.output.append(fragment);
	},
});

function effectsMakeup() {
	DOL.Perflog.logWidgetStart("effectsMakeupJs");
	const fragment = document.createDocumentFragment();

	const span = (text, colour) => {
		const element = document.createElement("span");
		if (colour) element.classList.add(colour);
		element.textContent = text + " ";
		fragment.append(element);
	};

	if (V.makeupWashed) {
		delete V.makeupWashed;
		span(`당신의 화장이 씻겨져${V.beauty >= (V.beautymax / 7) * 4 ? " 내려가 당신의 본래 미모를 드러낸다" : " 내려갔다"}.`, "teal");
		fragment.append(document.createElement("br"));
	}

	if (V.makeup.mascara && V.makeup.mascara_running < painToTearsLvl(V.pain) && !V.makeup.mascara.includes("waterproof")) {
		V.makeup.mascara_running = painToTearsLvl(V.pain);
	}

	DOL.Perflog.logWidgetEnd("effectsMakeupJs");
	return fragment;
}

function effects() {
	const fragment = document.createDocumentFragment();

	const sWikifier = text => {
		fragment.append(Wikifier.wikifyEval(text + " "));
	};
	const element = (element, text, colour) => {
		const result = document.createElement(element);
		if (colour) result.classList.add(colour);
		result.textContent = text + " ";
		fragment.append(result);
	};
	const br = () => fragment.append(document.createElement("br"));

	// Depricated as of current
	// if (V.newVersionData) sWikifier("<<newversionnotification>>");

	sWikifier("<<autoTakePillCheck>>");
	fragment.append(effectsWater());
	fragment.append(effectsMakeup());
	wikifier("temperature");

	V.speechcycle++;
	if (V.speechcycle >= 7) V.speechcycle = 0;

	if (!V.inwater && V.squidcount) {
		element("span", `오징어${V.squidcount > 1 ? "들이" : "가"} 물을 찾아, 당신에게서 떨어진다.`, "blue");
		V.squidcount = 0;
	}
	V.inwater = 0;

	if (V.scienceproject === "ongoing" && V.scienceprojectdays === 0 && !V.scienceprojectwarning) {
		V.scienceprojectwarning = 1;
		element("span", `과학 전람회가 클리프 가의 시청에서 오늘 ${ampm(9, 0)}부터 ${ampm(18, 0)}까지 열릴 예정이다.`, "gold");
	}

	if (V.mathsproject === "ongoing" && V.mathsprojectdays === 0 && !V.mathsprojectwarning) {
		V.mathsprojectwarning = 1;
		element("span", `수학 경시대회가 클리프 가의 시청에서 오늘 ${ampm(9, 0)}부터 ${ampm(18, 0)}까지 열릴 예정이다.`, "gold");
	}

	if (V.englishPlay === "ongoing" && V.englishPlayDays === 0 && !V.englishPlayWarning) {
		V.englishPlayWarning = 1;
		element("span", `학교 연극이 클리프 가에서 오늘 밤 ${ampm(17, 0)}부터 ${ampm(21, 0)}까지 열릴 예정이다.`, "gold");
	}

	if (V.innocencemessage === "start") {
		delete V.innocencemessage;
		element("span", "깊은 평화감이 머릿속에 솟아오른다. 좀 전까지만 해도 마음이 상해있었으나, 지금 와서는 그 이유가 기억나지 않는다.", "red");
		element("i", "당신의 트라우마가 순수함으로 대체되었다. 트라우마는 계속해서 축적되고, 순수함이 바닥난다면 다시 돌아올 것이다.");
	} else if (V.innocencemessage === "end") {
		delete V.innocencemessage;
		element("span", "당신은 끔찍한 사실을 자각하고 말았다. 여태까지 견뎌온 학대를 더는 무시할 수 없게 되었다.", "red");
		element("i", "순수함이 트라우마로 대체되었다.");
	}

	if (V.eventskipoverrule) V.eventskipoverrule = 0;

	if (V.underwatercheck > 0) {
		V.underwatercheck--;
	} else if (V.underwater === 1) {
		V.underwater = 0;
		sWikifier("<<oxygenrefresh>>");
	}

	sWikifier("<<updateHallucinations>>");
	switch (V.location) {
		case "town":
			if (V.flashbacktownready === 1 && V.controlled === 0) {
				delete V.flashbacktownready;
				sWikifier("<<flashbacktown>>");
			}
			break;
		case "home":
			if (V.flashbackhomeready === 1 && V.controlled === 0) {
				delete V.flashbackhomeready;
				sWikifier("<<flashbackhome>>");
			}
			break;
		case "beach":
			if (V.flashbackbeachready === 1 && V.controlled === 0) {
				delete V.flashbackbeachready;
				sWikifier("<<flashbackbeach>>");
			}
			break;
		case "underground":
			if (V.flashbackundergroundready === 1 && V.controlled === 0) {
				delete V.flashbackundergroundready;
				sWikifier("<<flashbackunderground>>");
			}
			break;
		case "school":
			if (V.flashbackschoolready === 1 && V.controlled === 0) {
				delete V.flashbackschoolready;
				sWikifier("<<flashbackschool>>");
			}
			break;
	}

	if (isPlayerNonparasitePregnancyEnding()) {
		sWikifier(
			`<span class="red">당신의 양수가 터졌다.</span> ${
				["asylum", "prison", "hospital"].includes(V.location) ? "당신은 도와줄 사람을 찾아야 한다, 당장!" : "당신은 병원으로 가야만 한다, 당장!"
			} <<ggstress>>`
		);
		br();
	}

	if (V.effectsmessage) {
		delete V.effectsmessage;

		if (V.recovered_from_pregnancy) {
			delete V.recovered_from_pregnancy;
			element("span", "당신은 자궁에 익숙한 비어있는 느낌이 돌아온 것을 느낀다.", "green");
		}

		if (V.skulduggerymessage) {
			const grade = ["S", "A+", "A", "B+", "B", "C+", "C", "D+", "D", "F+"];
			const colour = ["green", "teal", "teal", "lblue", "lblue", "blue", "blue", "purple", "purple", "pink"];
			element("span", "당신의 속임수 기술이", "gold");
			element("span", `${grade[V.skulduggerymessage - 1]}로 발전하였다.`, colour[V.skulduggerymessage - 1]);
			delete V.skulduggerymessage;
			V.skulduggeryday = V.skulduggery;
		}

		if (V.hypnosis_deviancy_message) {
			delete V.hypnosis_deviancy_message;
			sWikifier(
				`<<hypnosisicon>> 당신은 어제 별로 이상성욕적이지 않았다. ${
					V.hypnosis_traits.deviancy < 5 ? "그 생각은 당신을 " : "그 생각은 당신의 마음에 "
				}`
			);
			switch (V.hypnosis_traits.deviancy) {
				case 1:
					element("span", "수치스러움으로 채운다.", "lblue");
					break;
				case 2:
					element("span", "후회로 채운다.", "blue");
					break;
				case 3:
					element("span", "죄책감으로 채운다.", "purple");
					break;
				case 4:
					element("span", "극심한 죄책감으로 채운다.", "pink");
					break;
				case 5:
					element("span", "죄책감과 불안감으로 소용돌이친다.", "red");
					break;
			}
			sWikifier("<<gggtrauma>><<hypnosisicon>>");
		}

		// expects the use of $science_up_message, $maths_up_message, $english_up_message, $history_up_message, $science_down_message, $maths_down_message, $english_down_message, $history_down_message
		["science", "maths", "english", "history"].forEach(subject => {
			if (V[`${subject}_up_message`]) {
				delete V[`${subject}_up_message`];
				sWikifier(`당신은 <<putpost '${subject}'>>에 더 자신감을 느낀다. <<${subject}_skill_up_text>>`);
				br();
			} else if (V[`${subject}_down_message`]) {
				delete V[`${subject}_down_message`];
				sWikifier(`<span class="red">당신은 <<putpost '${subject}'>> 교육과정을 따라잡기가 벅차${V[`${subject}trait`] > 0 ? "서, 성적이 떨어졌다" : "다"}.</span>`);
				br();
			}
		});

		if (V.lactationmessage) {
			delete V.lactationmessage;
			if (V.lactating) {
				sWikifier('<span class="purple">당신의 <<breastsPost "이">> 무겁고 민감해진 것 같다.</span>');
			} else {
				sWikifier('<span class="lblue">당신의 <<breastsPost "이">> 가볍다. 더는 전처럼 민감하지도 않다.</span>');
			}
		}

		if (V.penisgrowthmessage !== undefined) {
			switch (V.penisgrowthmessage) {
				case 4:
					element("span", "당신의 자지가 엄청난 크기로 자라났다.", "purple");
					break;
				case 3:
					element("span", "당신의 자지가 더 커졌다.", "purple");
					break;
				case 2:
					element("span", "당신의 자지가 평범한 크기로 자라났다.", "purple");
					break;
				case 1:
					element("span", "당신의 자지가 커지긴 했으나, 아직도 작은 상태다.", "purple");
					break;
				case 0:
					element("span", "당신의 자지는 다시 자라나는 것처럼 보인다.", "purple");
					break;
				case -1:
					element("span", "당신의 자지는 또다른 기회를 얻은 것처럼 보인다.", "purple");
					break;
			}
			delete V.penisgrowthmessage;
		}

		if (V.penisshrinkmessage !== undefined) {
			if (V.worn.genitals.name === "chastity parasite") {
				switch (V.penisshrinkmessage) {
					case 3:
						element("span", "기생충 정조대의 크기가 줄어들었으나, 아직 놀랄만한 자지 크기일 것이라 짐작할 수 있다.", "purple");
						break;
					case 2:
						element("span", "기생충 정조대의 크기가 줄어들어, 훨씬 평범한 자지 크기일 것이라 짐작할 수 있다.", "purple");
						break;
					case 1:
						element("span", "기생충 정조대의 크기가 더 작아졌다.", "purple");
						break;
					case 0:
						element("span", "기생충 정조대의 크기가 조그마해졌다.", "purple");
						break;
					case -1:
						element("span", "기생충 정조대의 크기가 말도 안 되게 작아져, 당신은 자지가 아직 제 기능을 하는지 잠시 궁금해한다.", "purple");
						break;
					case -2:
						element(
							"span",
							"기생충 정조대는 그 안에 클리토리스 정도만이 들어있는 것 처럼 보여, 당신은 아직 자지가 있기는 한지 잠시 궁금해한다.",
							"purple"
						);
						break;
				}
			} else {
				switch (V.penisshrinkmessage) {
					case 3:
						element("span", "당신의 자지가 줄어들긴 했으나, 아직도 놀랄만한 크기다.", "purple");
						break;
					case 2:
						element("span", "당신의 자지가 평범한 크기로 줄어들었다.", "purple");
						break;
					case 1:
						element("span", "당신의 자지가 더 작아졌다.", "purple");
						break;
					case 0:
						element("span", "당신의 자지가 조그마해졌다.", "purple");
						break;
					case -1:
						element("span", "당신의 자지가 쪼그라든 것처럼 보인다.", "purple");
						break;
					case -2:
						element("span", "당신의 자지는 더 이상 제대로 사용할 수 없을 것 같다.", "purple");
						break;
				}
			}
			delete V.penisshrinkmessage;
		}

		if (V.breastgrowthmessage !== undefined) {
			switch (V.breastgrowthmessage) {
				case 12:
					element("span", "당신의 커다란 유방은 무거워 행동에 방해가 될 것 같다.", "purple");
					break;
				case 11:
					element("span", "당신의 커다란 유방은 무겁고 인상적이다.", "purple");
					break;
				case 10:
				case 9:
					element("span", "당신의 유방이 무겁게 느껴진다.", "purple");
					break;
				case 8:
				case 7:
					element("span", "당신의 유방이 조금 무거워진 것 같다.", "purple");
					break;
				case 6:
				case 5:
					element("span", "당신 주변에 있는 사람들에게 당신의 작은 유방은 분명히 눈에 띌 것이다.", "purple");
					break;
				case 4:
				case 3:
					element("span", "다른 사람들에게 당신의 작은 가슴은 분명히 는에 띌 것이다.", "purple");
					break;
				case 2:
				case 1:
					element("span", "당신의 가슴에 뭔가 이상한 느낌이 든다; 자라나고 있는 것일지도 모른다.", "purple");
					break;
			}
			delete V.breastgrowthmessage;
		}

		if (V.milkFullPainMessage) {
			if (V.milkFullPain >= 275) {
				sWikifier(`<span class="red">당신은 꽤 시간이 지나는 동안 모유를 충분히 짜 주지 못 했다. 당신의 <<breasts_ ga>> 너무나 꽉 차서 아프게 욱신거린다.</span>`);
			} else if (V.milkFullPain >= 250) {
				sWikifier(`<span class="red">당신은 한동안 모유를 충분히 짜 주지 못 했다. 당신의 <<breasts_ ga>> 너무 꽉 차서 쓰리다.</span>`);
			} else {
				sWikifier(`<span class="red">당신은 최근에 모유를 충분히 짜 주지 못 했다. 당신의 <<breasts_ ga>> 꽉 차서 조금 쓰리다.</span>`);
			}
			V.daily.milkFullPainMessage = true;
			delete V.milkFullPainMessage;
		}

		if (V.breastshrinkmessage !== undefined) {
			switch (V.breastshrinkmessage) {
				case 11:
					element("span", "당신의 커다란 유방이 조금 가벼워진 느낌이지만, 아직도 커다랗다.", "purple");
					break;
				case 10:
				case 9:
					element("span", "당신의 유방이 조금은 가벼워진 것 같고, 이전보다는 덜 인상적이게 되었다.", "purple");
					break;
				case 8:
				case 7:
					element("span", "당신의 유방이 가벼워진 느낌이다.", "purple");
					break;
				case 6:
				case 5:
					element("span", "당신의 작은 유방이 더 가벼워졌다.", "purple");
					break;
				case 4:
				case 3:
					element("span", "당신의 작은 유방이 전보다 분명히 인식하기 어려워졌다.", "purple");
					break;
				case 2:
				case 1:
					element("span", "당신의 가슴이 전보다 평평해져 보인다.", "purple");
					break;
				case 0:
					element("span", "당신의 가슴은 평평해 보인다.", "purple");
					break;
			}
			delete V.breastshrinkmessage;
		}

		if (V.bottomgrowthmessage !== undefined) {
			switch (V.bottomgrowthmessage) {
				case 8:
					element("span", "당신의 커다랗던 엉덩이가 전보다도 더 커졌다.", "purple");
					break;
				case 7:
					element("span", "당신의 엉덩이가 무거운 느낌이다.", "purple");
					break;
				case 6:
					element("span", "당신의 엉덩이가 더 통통해진 것 같다.", "purple");
					break;
				case 5:
					element("span", "당신의 엉덩이가 둥그래진 것 같다.", "purple");
					break;
				case 4:
					element("span", "당신의 엉덩이가 더 푹신해진 것 같다.", "purple");
					break;
				case 3:
					element("span", "당신의 엉덩이에 약간 살이 찐 것 같다.", "purple");
					break;
				case 2:
					element("span", "당신의 작은 엉덩이가 당신 기억보다 더 튀어나온 것 같다.", "purple");
					break;
				case 1:
					element("span", "당신의 엉덩이가 더는 전처럼 작은 것 같지 않다.", "purple");
					break;
			}
			delete V.bottomgrowthmessage;
		}

		if (V.bottomshrinkmessage) {
			switch (V.bottomshrinkmessage) {
				case 7:
					element("span", "당신의 커다랗던 엉덩이가 조금 가벼워진 것 같다.", "purple");
					break;
				case 6:
					element("span", "당신의 엉덩이가 가벼워진 것 같다.", "purple");
					break;
				case 5:
					element("span", "당신의 엉덩이가 전처럼 푹신하지 않다.", "purple");
					break;
				case 4:
					element("span", "당신의 엉덩이에 살이 많이 빠졌다.", "purple");
					break;
				case 3:
					element("span", "당신의 엉덩이가 꽤나 날렵해진 느낌이다.", "purple");
					break;
				case 2:
				case 1:
					element("span", "당신의 엉덩이가 작아진 느낌이다.", "purple");
					break;
				case 0:
					element("span", "당신의 엉덩이가 조그마해진 느낌이다.", "purple");
					break;
			}
			delete V.bottomshrinkmessage;
		}

		if (V.speech_attitude_bratty_message) {
			delete V.speech_attitude_bratty_message;
			element("span", "당신은 대화중에 건방진 태도를 취하기에는 너무 순종적이 되었다.", "purple");
		}

		if (V.speech_attitude_meek_message) {
			delete V.speech_attitude_meek_message;
			element("span", "당신은 대화중에 온순한 태도를 취하기에는 너무 반항적이 되었다.", "purple");
		}

		if (V.pillsTaken) {
			element("span", "당신은 매일마다 먹는 약을 복용한다.", "purple");
			if (V.pillsTakenLast) element("span", "몇몇 약은 방금 먹은 것으로 동이 났다.", "red");
			delete V.pillsTaken;
			delete V.pillsTakenLast;
		}

		if (V.hairGrowthApplied) {
			element("span", `당신은 모발 성장약을 뿌${V.hairGrowthAppliedLast ? "리지만," : "린다."}`, "purple");
			if (V.hairGrowthAppliedLast) element("span", "방금 마지막 약을 사용했다.", "red");
			delete V.hairGrowthApplied;
			delete V.hairGrowthAppliedLast;
		}

		if (V.exhibitionism_message) {
			sWikifier(
				`<span class="lblue">당신은 속옷을 입지 않은 상태로 사람들이 있는 곳에서 시간을 보냈다. 혹시 사람들이 눈치채진 않았을까 하는 생각을 하며, 당신은 전율한다.</span> <<exhibitionism1>>`
			);
			delete V.exhibitionism_message;
		}

		if (V.rebuy_success.length) {
			const rebuyMessage = {};
			V.rebuy_success.forEach(([item, location]) => {
				if (!rebuyMessage[location]) rebuyMessage[location] = [];
				rebuyMessage[location].push(item);
			});
			Object.entries(rebuyMessage).forEach(([location, items]) => {
				element(
					"span",
					`Your ${formatList(items, "and", true)} signal${items.length > 1 ? "s" : ""} for a replacement${
						V.wardrobes[location]
							? ` to the ${V.wardrobes[location].name}`
							: `. (Likely One-off update error, no need to report unless seen multiple times in the same save) ${
									Array.isArray(V.rebuy_success) ? JSON.stringify(V.rebuy_success) : ""
							  }`
					}.
				`,
					"lblue"
				);
			});
			V.rebuy_success = [];
		}

		if (V.rebuy_failure.length) {
			element(
				"span",
				`Your ${formatList(V.rebuy_failure, "and", true)} signal${
					V.rebuy_failure.length > 1 ? "s" : ""
				} for a replacement, but you don't have enough money.`,
				"purple"
			);
			V.rebuy_failure = [];
		}

		if (V.masochism_message) {
			switch (V.masochism_message) {
				case "up 1":
					element("span", "Your thoughts wander over the attacks you've suffered. You shiver.", "blue");
					element("i", "You've become a guilty masochist.", "blue");
					break;
				case "up 2":
					element("span", "Your thoughts turn to the attacks you've suffered. A thrill follows, unbeckoned.", "purple");
					element("i", "You've become a normal masochist.", "purple");
					break;
				case "up 3":
					element("span", "Your body yearns for more abuse.", "pink");
					element("i", "You've become a hardened masochist.", "pink");
					break;
				case "up 4":
					element("span", "Your body craves more abuse.", "red");
					element("i", "You've become a drooling masochist.", "red");
					break;
				case "down 0":
					element("i", "You are no longer a masochist.", "lblue");
					break;
				case "down 1":
					element("span", "You are no longer so masochistic, and can only be considered a", "blue");
					element("i", "guilty masochist.", "blue");
					break;
				case "down 2":
					element("span", "You are no longer so masochistic, and can only be considered a", "purple");
					element("i", "normal masochist.", "purple");
					break;
				case "down 3":
					element("span", "You are no longer so masochistic, and can only be considered a", "pink");
					element("i", "hardened masochist.", "pink");
					break;
			}
			delete V.masochism_message;
		}

		if (V.sadism_message) {
			switch (V.sadism_message) {
				case "up 1":
					element("span", "Your thoughts turn to the pain you've inflicted. You shiver.", "blue");
					element("i", "You've become a guilty sadist.", "blue");
					break;
				case "up 2":
					element("span", "Your thoughts turn to the pain you've inflicted. A thrill follows, unbeckoned.", "purple");
					element("i", "You've become a normal sadist.", "purple");
					break;
				case "up 3":
					element("span", "You yearn to hurt others.", "pink");
					element("i", "You've become a hardened sadist.", "pink");
					break;
				case "up 4":
					element("span", "If they want to play rough, so be it.", "red");
					element("i", "You've become a vengeful sadist.", "red");
					break;
				case "down 0":
					element("i", "You are no longer a sadist.", "lblue");
					break;
				case "down 1":
					element("span", "You are no longer so sadistic, and can only be considered a", "blue");
					element("i", "guilty sadist.", "blue");
					break;
				case "down 2":
					element("span", "You are no longer so sadistic, and can only be considered a", "purple");
					element("i", "normal sadist.", "purple");
					break;
				case "down 3":
					element("span", "You are no longer so sadistic, and can only be considered a", "pink");
					element("i", "hardened sadist.", "pink");
					break;
			}
			delete V.sadism_message;
		}

		if (V.school_crossdress_message) {
			switch (V.school_crossdress_message) {
				case 5:
					element("span", "Your crossdressing has become common knowledge at school. Everyone knows, including the teachers.", "red");
					break;
				case 4:
					element("span", "Rumours of your crossdressing are spreading throughout the school.", "pink");
					break;
				case 3:
					element("span", "Rumours of your crossdressing are spreading, and have become a popular topic of conversation at school.", "purple");
					break;
				case 2:
					element("span", "Whispers of your crossdressing are spreading through the school.", "blue");
					break;
				case 1:
					element("span", "A few cliques at school have begun whispering of your crossdressing.", "lblue");
					break;
			}
			delete V.school_crossdress_message;
		}

		if (V.school_herm_message) {
			switch (V.school_herm_message) {
				case 5:
					element("span", "Everyone at school has heard of your unique genitalia, including the teachers.", "red");
					break;
				case 4:
					element("span", "Rumours of your unique genitalia have spread throughout the school.", "pink");
					break;
				case 3:
					element(
						"span",
						"It sounds far-fetched to many, but the school is rife with gossip about a student with both boy and girl parts.",
						"purple"
					);
					break;
				case 2:
					element("span", "Rumours of a student with both boy and girl parts are spreading through the school.", "blue");
					break;
				case 1:
					element("span", "A few cliques at school have begun whispering about a student with both boy and girl parts.", "lblue");
					break;
			}
			delete V.school_herm_message;
		}

		// expects the use of $orgasm_trait_message, $molest_trait_message, $rape_trait_message, $bestiality_trait_message, $tentacle_trait_message, $vore_trait_message, $milk_trait_message and $cum_trait_message
		[
			["orgasm", "Hedonist", "Orgasm Addict"],
			["molest", "Graceful", "Plaything"],
			["rape", "Survivor", "Fucktoy"],
			["bestiality", "Tamer", "Bitch"],
			["tentacle", "Witch", "Prey"],
			["vore", "Daredevil", "Tasty"],
			["milk", "Milk Enthusiast", "Milk Addict"],
			["cum", "Cumoisseur", "Cum Dump"],
		].forEach(([variable, defiantName, submissiveName]) => {
			if (V[`${variable}_trait_message`]) {
				element("span", `You've gained the "${V.submissive <= 850 ? defiantName : submissiveName}" trait.`, "gold");
				delete V[`${variable}_trait_message`];
			}
		});

		if (V.nectarmessage) {
			switch (V.nectarmessage) {
				case "traitGain":
					element(
						"span",
						`You find yourself craving more sweet nectar. You've gained the "${V.submissive <= 850 ? "Dendrophile" : "Plant Lover"}" and`,
						"purple"
					);
					element("span", '"Nectar Addict"', "red");
					element("span", "traits.", "purple");
					break;
				case "traitLost":
					element(
						"span",
						`The cravings for nectar finally subside. You've lost the "${V.submissive <= 850 ? "Dendrophile" : "Plant Lover"}" and`,
						"lblue"
					);
					element("span", '"Nectar Addict"', "red");
					element("span", "traits.", "lblue");
					break;
				case "withdrawals":
					sWikifier(
						'<span class="red">Your body craves nectar, and has begun to suffer from withdrawals.</span> <<stress 12>><<ggstress>><<trauma 12>><<ggtrauma>><<physique_loss 4>><<lphysique>>'
					);
					br();
					break;
			}
			delete V.nectarmessage;
		}

		if (V.hiddenTransformMessage) {
			element(
				"span",
				V.hiddenTransformMessage === 1
					? "Your mental state is too fragile to continue hiding your inner self."
					: "Hiding your inner self takes a toll on your mental state.",
				"red"
			);
			delete V.hiddenTransformMessage;
		}

		if (V.prof_spray_message) {
			element("span", "Your spray was accurate. You didn't need to use a full cartridge, saving ammo.", "green");
			delete V.prof_spray_message;
		}

		if (V.community_message === "missed") {
			sWikifier('<span class="red">You missed community service. The police have taken note.</span><<crime "obstruction">>');
			delete V.community_message;
		}

		if (V.toy_message) {
			element("span", "Sex toys are becoming more popular throughout town.", "pruple");
			delete V.toy_message;
		}

		if (V.loveInterest_message === 1) {
			element("i", "You feel that having multiple lovers is wrong. You can no longer choose more than one love interest.", "blue");
			delete V.loveInterest_message;
			delete V.loveInterestAwareMessage;
		} else if (V.loveInterest_message === 2 && !V.loveInterestAwareMessage) {
			element("i", "Your mind is open to the possibility of multiple lovers. You may now choose a second love interest.", "pink");
			delete V.loveInterest_message;
			V.loveInterestAwareMessage = 1;
		}

		if (V.fallenangelmessage) {
			sWikifier('<span class="red">You feel dark presence clawing at your skin.</span> <<gstress>>');
			V.stress += V.stressmax;
			delete V.fallenangelmessage;
		}

		if (V.demonmessage) {
			sWikifier('<span class="red">You feel a terrible light sear through you.</span> <<gstress>>');
			V.stress += V.stressmax;
			delete V.demonmessage;
		}

		if (V.foxCrimeMessage) {
			element(
				"span",
				V.blackmoney >= 100
					? "You feel an animalistic satisfaction towards your growing collection of stolen goods."
					: "You feel an animalistic satisfaction as you commit such crimes.",
				"gold"
			);
			delete V.foxCrimeMessage;
		}

		if (V.bookoverduemessage) {
			if (V.bookoverduemessage === 1) {
				sWikifier(`<<crimeUp 5 "thievery">><<delinquency ${5 / 4}>>`);
				element("span", "You have a book severely overdue, and the police have been informed.", "red");
			} else {
				sWikifier(`<<delinquency ${3 / 4}>>`);
				element("span", "You have a book overdue, and have incurred delinquency.", "red");
			}
			delete V.bookoverduemessage;
		}

		if (V.wraithcompoundmessage) {
			element("span", "A fell mist hangs over Elk Street.", "red");
			delete V.wraithcompoundmessage;
		}

		if (V.earSlimebreastsParasite || V.earSlimePenisParasite || V.earSlimeClitParasite) {
			const parasiteCount = (V.earSlimebreastsParasite ? 1 : 0) + (V.earSlimePenisParasite ? 1 : 0) + (V.earSlimeClitParasite ? 1 : 0);
			let parasiteMessage = "";
			if (V.earSlimebreastsParasite) parasiteMessage += `A new parasite forms around your ${V.player.breastsize >= 1 ? "breasts" : "chest"}`;

			if (V.earSlimePenisParasite) {
				parasiteMessage += parasiteMessage ? " and the base of your penis" : "A new parasite forms around the base of your penis";
			}

			if (V.earSlimeClitParasite) {
				if (V.earSlime.focus === "pregnancy") {
					parasiteMessage += parasiteMessage ? " and <<pussy>>" : "A new parasite forms around your <<pussy>>";
				} else {
					const looks = playerChastity("vagina") ? "feels" : "looks";
					parasiteMessage += parasiteMessage
						? ` and clit. It ${looks} like you have your own penis now`
						: `A new parasite forms around the base of your clit, it ${looks} similar to a penis`;
				}
				element("span", `A satisfied warmth fills you. ${parasiteMessage}`, "blue");
				element("span", `You can tell that ${parasiteCount > 1 ? "they are" : "it's"} from the slimes in your ears.`);
				if (V.earSlimePenisParasite && V.earSlimePenisParasite !== 1) {
					element("span", `The previous ${V.earSlimePenisParasite} falls off shortly after it finishes growing.`, "red");
				}
				if (V.earSlimeClitParasite && V.earSlimeClitParasite !== 1) {
					element("span", `The previous ${V.earSlimeClitParasite} falls off shortly after it finishes growing.`, "red");
				}
				delete V.earSlimebreastsParasite;
				delete V.earSlimePenisParasite;
				delete V.earSlimeClitParasite;
			}
		}

		if (V.penisslimebrokenchastitymessage) {
			element(
				"span",
				`The parasite at the base of your genitals frees you from the${
					V.penisslimecagemessage === 1 ? ", and almost just as quickly, a new chastity parasite forms around your penis" : ""
				}.`,
				"purple"
			);
			delete V.penisslimecagemessage;
			delete V.penisslimebrokenchastitymessage;
		}

		if (V.penisslimecagemessage) {
			element(
				"span",
				V.penisslimecagemessage === 1 ? "A new chastity parasite forms around your penis." : "Your chastity parasite looks brand new again.",
				"pruple"
			);
			delete V.penisslimecagemessage;
		}

		if (V.pregnancyDailyEvent) {
			sWikifier("<<pregnancyDailyEvent>>");
			delete V.pregnancyDailyEvent;
		}

		if (V.daily.parasiteEvent) {
			let minDaysLeft;
			if (V.sexStats.vagina.pregnancy.type === "parasite") {
				minDaysLeft = V.sexStats.vagina.pregnancy.fetus.reduce((prev, curr) => (prev.daysLeft < curr.daysLeft ? prev.daysLeft : curr.daysLeft), 30);
			}
			if (V.sexStats.anus.pregnancy.type === "parasite") {
				minDaysLeft = V.sexStats.anus.pregnancy.fetus.reduce(
					(prev, curr) => (prev.daysLeft < curr.daysLeft ? prev.daysLeft : curr.daysLeft),
					minDaysLeft || 30
				);
			}
			const stressMulti = Math.clamp(2 - V.sexStats.anus.pregnancy.motherStatus + V.sexStats.vagina.pregnancy.motherStatus, 0, 2);
			const arousalMulti = Math.clamp(1 + V.sexStats.anus.pregnancy.motherStatus + V.sexStats.vagina.pregnancy.motherStatus, 1, 3);
			let arousalGain = 0;
			if (V.daily.parasiteEvent.includes("anus3") && V.daily.parasiteEvent.includes("vagina3")) V.daily.parasiteEvent.delete("vagina3");

			V.daily.parasiteEvent.forEach(event => {
				switch (event) {
					case "anus0":
					case "vagina0":
						if (V.pregnancyStats.parasiteDoctorEvents >= 4) {
							sWikifier(
								`You feel ${V.pregnancyStats.namesParasitesChild ? "your grown child" : "the grown parasite"} in your ${
									event === "anus0" ? "stomach" : "uterus"
								}. <<ggarousal>>`
							);
						} else {
							sWikifier(
								`You feel something large move around in your ${
									event === "anus0" ? "stomach" : "uterus"
								}. Might be best to go to the hospital again. <<ggarousal>>`
							);
						}
						arousalGain += 2000;
						break;
					case "anus1":
					case "vagina1":
						if (V.pregnancyStats.parasiteDoctorEvents >= 2) {
							sWikifier(
								`You feel one of ${V.pregnancyStats.namesParasitesChild ? "your children" : "the parasites"} move around in your ${
									event === "anus1" ? "stomach" : "uterus"
								}. <<ggarousal>>${stressMulti ? "<<gstress>>" : ""}`
							);
						} else {
							sWikifier(`You feel something move around in your ${event === "anus1" ? "stomach" : "uterus"}. Might be best to go to the hospital.
							<<ggarousal>>${stressMulti ? "<<gstress>>" : ""}`);
						}
						arousalGain += (arousalMulti * 500) / (minDaysLeft + 1);
						V.stress += 300 * stressMulti;
						break;
					case "anus2":
					case "vagina2":
						sWikifier(
							`Your ${
								event === "anus2" ? "stomach" : "uterus"
							} rumbles a little. You hope the noise hasn't attracted any attention. <<garousal>>${stressMulti ? "<<gstress>>" : ""}`
						);
						arousalGain += (arousalMulti * 250) / (minDaysLeft + 1);
						V.stress += 200 * stressMulti;
						break;
					case "anus3":
					case "vagina3":
						sWikifier(`You feel a little lightheaded for a moment.${stressMulti ? "<<gstress>>" : ""}`);
						V.stress += 100 * stressMulti;
						break;
				}
			});
			if (arousalGain) sWikifier(`<<arousal ${Math.clamp(arousalGain, 0, 10000)}>>`);
			br();
			delete V.daily.parasiteEvent;
		}
	}

	if (numberOfEarSlime() && V.earSlime.event) {
		if (V.earSlime.event.includes("get sperm into your") && V.earSlime.event.includes("completed") && V.earSlime.eventTimer <= 2) {
			element(
				"span",
				`The slime in your ear is pleased that you completed its task of getting sperm into your ${V.player.vaginaExist ? "vagina" : "anus"}.`,
				"green"
			);
			sWikifier(`<<pain -4>><<stress -6>><<trauma -12>><<lpain>><<lltrauma>><<lstress>>`);
			br();
			V.earSlime.event = "";
		} else if (V.earSlime.event.includes("get your own sperm into your") && V.earSlime.event.includes("completed") && V.earSlime.eventTimer <= 2) {
			element(
				"span",
				`The slime in your ear is pleased that you completed its task of getting your own sperm into your ${V.player.vaginaExist ? "vagina" : "anus"}.`,
				"green"
			);
			sWikifier(`<<pain -4>><<stress -6>><<trauma -12>><<lpain>><<lltrauma>><<lstress>>`);
			if (V.earSlime.growth >= 100 && V.earSlime.focus === "pregnancy" && V.worn.genitals.name === "naked") {
				sWikifier(`<span class="purple">A new chastity parasite forms around your penis.</span> <<genitalswear 8>>`);
				V.worn.genitals.origin = "ear slime";
			}
			br();
			V.earSlime.event = "";
		} else if (V.earSlime.eventTimer <= 2 || (V.earSlime.noSleep && Time.dayState !== "night")) {
			if (V.earSlime.startedThreats) {
				element("span", "The slime in your ear punishes you for failing to complete your task.", "red");
				sWikifier(`<<ggpain>><<ggtrauma>><<ggstress>><<pain 16>><<stress 12>><<trauma 12>>`);
				V.earSlime.defyCooldown += 4;
			} else {
				element("span", "The slime in your ear is upset you were unable to complete what you said you would do.", "cyan");
			}
			br();
			V.earSlime.event = "";
			V.earSlime.noSleep = false;
		}
	}

	sWikifier("<<integritycheck>><<exposure>>");

	V.orgasmdown -= 1;

	if (V.exposed >= 1 && V.exposedcheck === 1) {
		V.exposedcheck = 0;
		sWikifier("You feel self-conscious about your <<nudity>>.");
		br();
	}

	if (V.timer >= 1) V.timer--;
	// V.turnCount++;

	sWikifier("<<bindings>>");

	if (V.worn.genitals.cursed === 1 && V.worn.genitals.integrity <= 0) V.worn.genitals.type.push("broken");

	sWikifier("<<heelsUpdate>>");

	if (V.combat) sWikifier("<<pass 10 seconds>>");

	if (fragment.children.length) br();

	V.menu = 0;

	if (V.combat === 0 && V.ironmanmode === true) IronMan.scheduledSaves();

	return fragment;
}

Macro.add("effects", {
	handler() {
		DOL.Perflog.logWidgetStart("effectsJs");
		const fragment = effects();
		this.output.append(fragment);
		DOL.Perflog.logWidgetEnd("effectsJs");
	},
});
