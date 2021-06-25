function setfemininitymultiplierfromgender(gender) {
	const T = State.temporary;
	if (gender === "f") {
		T.femininity_multiplier = 1;
	} else if (gender === "m") {
		T.femininity_multiplier = -1;
	} else {
		T.femininity_multiplier = 0;
	}
}
DefineMacro("setfemininitymultiplierfromgender", setfemininitymultiplierfromgender);

function addfemininityfromfactor(femininity_boost, factor_description, no_overwear_check) {
	const T = State.temporary;
	if (no_overwear_check) {
		T.gender_appearance_factors_noow.push({
			femininity: femininity_boost,
			factor: factor_description
		});
		T.apparent_femininity_noow += femininity_boost;
	} else {
		T.apparent_femininity += femininity_boost;
		T.gender_appearance_factors.push({
			femininity: femininity_boost,
			factor: factor_description
		});
	}
}
DefineMacro("addfemininityfromfactor", addfemininityfromfactor);

function addfemininityofclothingarticle(clothing_article, no_overwear_check) {
	if (clothing_article.femininity) {
		Wikifier.wikifyEval(' <<trSearchClothes "' + clothing_article.name + '">>'); addfemininityfromfactor(clothing_article.femininity, State.temporary.trResult, no_overwear_check);
	}
}
DefineMacro("addfemininityofclothingarticle", addfemininityofclothingarticle);

/** Calculate the player's gender appearance */
function genderappearancecheck() {
	const T = State.temporary;
	const V = State.variables;
	/* Calculate bulge size */
	T.penis_compressed = V.penisexist && V.worn.genitals.type.includes("hidden");
	if (V.worn.genitals.type.includes("cage")) {
		T.bulge_size = Math.clamp(V.penissize, 0, Infinity);
	} else {
		if (!V.penisexist) {
			T.erection_state = 0;
		} else if (T.penis_compressed) {
			T.erection_state = 0;
		} else if (V.arousal < 6000) {
			T.erection_state = 0;
		} else if (V.arousal < 8000) {
			T.erection_state = 1;
		} else {
			T.erection_state = 2;
		}
		T.bulge_size = Math.clamp(V.penissize * T.erection_state, 0, Infinity);
	}
	/* Determine how visible the player's bottom is */
	if ((V.worn.lower.skirt === 1 && V.worn.lower.skirt_down === 1 && V.worn.lower.state === "waist") ||
		(V.worn.over_lower.skirt === 1 && V.worn.over_lower.skirt_down === 1 && V.worn.over_lower.state === "waist")) {
		T.bottom_visibility = 0;
	} else {
		T.bottom_visibility = 1;
	}
	/* Gender appearance factors */
	T.gender_appearance_factors = [];
	T.apparent_femininity = 0;
	T.breast_indicator = 0;
	/* Head clothing */
	addfemininityofclothingarticle(V.worn.over_head);
	addfemininityofclothingarticle(V.worn.head);
	/* Always visible clothing */
	addfemininityofclothingarticle(V.worn.face);
	addfemininityofclothingarticle(V.worn.neck);
	addfemininityofclothingarticle(V.worn.legs);
	addfemininityofclothingarticle(V.worn.feet);
	/* Hair length */
	if (V.worn.over_head.hood !== 1 && V.worn.head.hood !== 1 && V.hoodDown !== 1) {
		addfemininityfromfactor(Math.trunc((V.hairlength - 200) / 2), "머리 길이");
	}
	/* Makeup */
	addfemininityfromfactor(V.makeup.lipstick == 0 ? 0 : 50, "립스틱");
	addfemininityfromfactor(V.makeup.eyeshadow == 0 ? 0 : 50, "아이섀도우");
	addfemininityfromfactor(V.makeup.mascara == 0 ? 0 : 50, "마스카라");
	/* Body structure */
	addfemininityfromfactor(Math.trunc(V.bottomsize * T.bottom_visibility * 50), "엉덩이 크기 (" + Math.trunc(T.bottom_visibility * 100) + "% 확인 가능)");
	setfemininitymultiplierfromgender(V.player.gender_body);
	addfemininityfromfactor(T.femininity_multiplier * 200, "체형");
	addfemininityfromfactor(Math.trunc((-1 * (V.physique + V.physiquesize / 2) / V.physiquesize) * 100), "탄탄한 근육");
	/* Behaviour */
	setfemininitymultiplierfromgender(V.player.gender_posture);
	T.acting_multiplier = V.englishtrait + 1;
	addfemininityfromfactor(T.femininity_multiplier * 100 * T.acting_multiplier, "태도 (영어 기술로 인해 효과 x" + T.acting_multiplier + ")");
	/* Special handling for calculating topless gender */
	T.over_lower_protected = V.worn.over_lower.exposed < 2;
	T.lower_protected = V.worn.lower.exposed < 2;
	T.under_lower_protected = !V.worn.under_lower.exposed;
	T.apparent_femininity_noow = T.apparent_femininity;
	T.gender_appearance_factors_noow = clone(T.gender_appearance_factors);
	T.over_lower_femininity = (V.worn.over_lower.femininity ? V.worn.over_lower.femininity : 0);
	T.lower_femininity = (V.worn.lower.femininity ? V.worn.lower.femininity : 0);
	T.under_lower_femininity = (V.worn.under_lower.femininity ? V.worn.under_lower.femininity : 0);;
	/* find maximum possible femininity of the last lower piece you can strip down to, and add it to the counter */
	addfemininityfromfactor(Math.max(T.over_lower_femininity, T.lower_femininity, T.under_lower_femininity), "아래옷", "noow");
	/* bulge and genitals checks for topless gender */
	if (T.under_lower_protected) {
		addfemininityfromfactor(-T.bulge_size * 100, "속옷 너머로 발기한 것이 보임", "noow");
	} else if (T.over_lower_protected || T.lower_protected) {
		addfemininityfromfactor(-Math.clamp((T.bulge_size - 3) * 100, 0, Infinity), "옷 너머로 발기한 것이 보임", "noow");
	} else if (V.worn.genitals.exposed) {
		addfemininityfromfactor(V.vaginaexist * 100000 - V.penisexist * 100000, "성기가 보임", "noow");
	}
	/* plain breasts factor */
	addfemininityfromfactor((V.breastsize - 0.5) * 100, "노출된 가슴", "noow");
	/* Lower clothing, bulge, and genitals */
	addfemininityofclothingarticle(V.worn.over_lower);
	if (!T.over_lower_protected) {
		addfemininityofclothingarticle(V.worn.lower);
	}
	if (!T.over_lower_protected && !T.lower_protected) {
		/* Lower underwear is visible */
		addfemininityofclothingarticle(V.worn.under_lower);
		if (!T.under_lower_protected) {
			/* Genitals slot is visible */
			addfemininityofclothingarticle(V.worn.genitals);
			if (V.worn.genitals.exposed) {
				/* Bare genitals are visible */
				if (V.penisexist) {
					addfemininityfromfactor(-100000, "자지가 보임");
				}
				if (V.vaginaexist) {
					addfemininityfromfactor(100000, "보지가 보임");
				}
			}
		} else {
			/* Bottom visible through underwear */
			T.bottom_visibility *= 0.75;
			/* Bulge visible through underwear */
			addfemininityfromfactor(-T.bulge_size * 100, "속옷 너머로 발기한 것이 보임");
		}
	} else {
		/* Bottom covered by lower clothes */
		T.bottom_visibility *= 0.75;
		/* Bulge covered by lower clothes */
		addfemininityfromfactor(-Math.clamp((T.bulge_size - 3) * 100, 0, Infinity), "옷 너머로 발기한 것이 보임");
	}
	/* Upper clothing and breasts */
	addfemininityofclothingarticle(V.worn.over_upper);
	if (V.worn.over_upper.exposed >= 2) {
		addfemininityofclothingarticle(V.worn.upper);
	}
	if (V.worn.over_upper.exposed >= 2 && V.worn.upper.exposed >= 2) {
		/* Upper underwear is visible */
		addfemininityofclothingarticle(V.worn.under_upper);
		if (V.worn.under_upper.exposed >= 1) {
			/* Exposed breasts */
			T.breast_indicator = 1;
			addfemininityfromfactor((V.breastsize - 0.5) * 100, "노출된 가슴");
		} else if (!V.worn.under_upper.type.includes("chest_bind")) {
			/* Breasts covered by only underwear */
			addfemininityfromfactor(Math.clamp(
				(V.breastsize - 2) * 100, 0, Infinity
			), "속옷 너머로 가슴 크기 확인 가능");
		}
	} else if (!V.worn.under_upper.type.includes("chest_bind")) {
		/* Breast fully covered */
		addfemininityfromfactor(Math.clamp(
			(V.breastsize - 4) * 100, 0, Infinity
		), "옷 너머로 가슴 크기 확인 가능");
	}
	/* Body writing */
	Wikifier.wikifyEval("<<bodywriting_exposure_check>>"); // TODO convert to JS when possible
	T.skinValue = 0;
	T.skinValue_noow = 0;
	Object.keys(V.skin).forEach(label=>{
		let value = V.skin[label];
		if (T.skin_array.includes(label)) {
			if (value.gender === "m") {
				T.skinValue -= 50 * (value.pen !== "pen"?2:1);
			} else if (value.gender === "f") {
				T.skinValue += 50 * (value.pen !== "pen"?2:1);
			}
		} else {
			if (value.gender === "m") {
				T.skinValue_noow -= 50 * (value.pen !== "pen"?2:1);
			} else if (V.skin.breasts.gender === "f") {
				T.skinValue_noow += 50 * (value.pen !== "pen"?2:1);
			}
		}
	});
	addfemininityfromfactor(T.skinValue, "피부에 글자/그림 보임");
	addfemininityfromfactor(T.skinValue + T.skinValue_noow, "피부에 글자/그림 보임", "noow");
	if (T.apparent_femininity > 0) {
		T.gender_appearance = "f";
	} else if (T.apparent_femininity < 0) {
		T.gender_appearance = "m";
	} else {
		T.gender_appearance = V.player.gender;
	}
	if (T.apparent_femininity_noow > 0) {
		T.gender_appearance_noow = "f";
	} else if (T.apparent_femininity_noow < 0) {
		T.gender_appearance_noow = "m";
	} else {
		T.gender_appearance_noow = V.player.gender;
	}
}
DefineMacro("genderappearancecheck", genderappearancecheck);
