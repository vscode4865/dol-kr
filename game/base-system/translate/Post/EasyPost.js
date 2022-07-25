/* EasyPost 리팩토링 */
/* 조사 매크로를 쉽게 사용하기 위한 메타-매크로 */

/*
	EasyPostMacroList : EasyPost 매크로 설정 리스트
	사용법 : { name : "EasyPost 매크로명", orig_name : "실제 매크로명", is_print : (_trResult를 프린트해야 하면 1) },
*/
const EasyPostMacroList = [
	// trClothes 
	// <<worn_upper_name_ul>> = $worn.upper.name을 
	{ name: "worn_butt_plug_name_", orig_name: "worn_butt_plug_name", is_print: 0},
	{ name: "worn_face_name_", orig_name: "worn_face_name", is_print: 0},
	{ name: "worn_feet_name_", orig_name: "worn_feet_name", is_print: 0},
	{ name: "worn_genitals_name_", orig_name: "worn_genitals_name", is_print: 0},
	{ name: "worn_hands_name_", orig_name: "worn_hands_name", is_print: 0},
	{ name: "worn_head_name_", orig_name: "worn_head_name", is_print: 0},
	{ name: "worn_legs_name_", orig_name: "worn_legs_name", is_print: 0},
	{ name: "worn_lower_name_", orig_name: "worn_lower_name", is_print: 0},
	{ name: "worn_neck_name_", orig_name: "worn_neck_name", is_print: 0},
	{ name: "worn_over_head_name_", orig_name: "worn_over_head_name", is_print: 0},
	{ name: "worn_over_lower_name_", orig_name: "worn_over_lower_name", is_print: 0},
	{ name: "worn_over_upper_name_", orig_name: "worn_over_upper_name", is_print: 0},
	{ name: "worn_under_lower_name_", orig_name: "worn_under_lower_name", is_print: 0},
	{ name: "worn_under_upper_name_", orig_name: "worn_under_upper_name", is_print: 0},
	{ name: "worn_upper_name_", orig_name: "worn_upper_name", is_print: 0},

	// beasttypePost 
	// <<beasttype_ul>> = <<beasttype>>을, <<beasttype_ul 1>> = <<beasttype 1>>을
	{ name: "beasttype_", orig_name: "beasttypePost", is_print: 0},
	{ name: "beasttypes_", orig_name: "beasttypePost", is_print: 0},

	// <<beastsplural_ul>> = <<beastsplural>>을 
	{ name: "beastsplural_", orig_name: "beastspluralPost", is_print: 0},

	// bodyPost 
	// <<breasts_rul>> = <<breasts>>를 
	{ name: "breasts_", orig_name: "breastsPost", is_print: 0},

	// <<nipple_ul>> = <<nipple>>을 
	// <<nipples_rul>> = <<nipples>>를 
	{ name: "nipple_", orig_name: "nipplePost", is_print: 0},
	{ name: "nipples_", orig_name: "nipplePost", is_print: 0},

	// <<bottom_ul>> = <<bottom>>을 
	{ name: "bottom_", orig_name: "bottomPost", is_print: 0},

	// <<pussy_rul>> = <<pussy>>를 
	{ name: "pussy_", orig_name: "pussyPost", is_print: 0},

	// <<genitals_rul>> = <<genitals>>를, <<genitals_ul 1>> = <<genitals 1>>를 
	{ name: "genitals_", orig_name: "genitalsPost", is_print: 0},

	// <<genitalsandbreasts_rul>> = <<genitalsandbreasts>>를 
	{ name: "genitalsandbreasts_", orig_name: "genitalsandbreastsPost", is_print: 0},

	// <<clit_ul>> = <<clit>>을 
	{ name: "clit_", orig_name: "clitPost", is_print: 0},

	// <<penis_rul>> = <<penis>>를 
	{ name: "penis_", orig_name: "penisPost", is_print: 0},

	// <<penisSimple_ul>> = <<penisSimple>>을 
	{ name: "penisSimple_", orig_name: "penisSimplePost", is_print: 0},

	// <<glans_rul>> = <<glans>>를 
	{ name: "glans_", orig_name: "glansPost", is_print: 0},

	// <<testicles_rul>> = <<testicles>>를 
	// <<testicle_rul>> = <<testicle>>를 
	{ name: "testicles_", orig_name: "testiclesPost", is_print: 0},
	{ name: "testicle_", orig_name: "testiclesPost", is_print: 0},

	// <<hand_rul "left">> = 왼손을 
	{ name: "hand_", orig_name: "handPost", is_print: 0},

	// <<npcPenis_rul>> = <<npcPenis>>를 
	{ name: "npcPenis_", orig_name: "npcPenisPost", is_print: 0},

	// <<npcPenisSimple_ul>> = <<npcPenisSimple>>을 
	{ name: "npcPenisSimple_", orig_name: "npcPenisSimplePost", is_print: 0},

	// <<npcVagina_rul>> = <<npcVagina>>를 
	{ name: "npcVagina_", orig_name: "npcVaginaPost", is_print: 0},

	// <<npcAnus_rul>> = <<npcAnus>>를 
	{ name: "npcAnus_", orig_name: "npcAnusPost", is_print: 0},

	// <<npcGenitals_rul>> = <<npcGenitals>>를 
	{ name: "npcGenitals_", orig_name: "npcGenitalsPost", is_print: 0},

	// clothesPost 
	// <<undertop_ul>> = <<undertop>>을 
	{ name: "undertop_", orig_name: "undertopPost", is_print: 0},

	// <<groin_ul>> = <<groin>>을 
	{ name: "groin_", orig_name: "groinPost", is_print: 0},

	// <<crotch_rul>> = <<crotch>>를 
	{ name: "crotch_", orig_name: "crotchPost", is_print: 0},

	// <<undies_rul>> = <<undies>>를 
	{ name: "undies_", orig_name: "undiesPost", is_print: 0},

	// <<bottoms_rul>> = <<bottoms>>를 
	{ name: "bottoms_", orig_name: "bottomsPost", is_print: 0},

	// <<underbottoms_rul>> = <<underbottoms>>를 
	{ name: "underbottoms_", orig_name: "underbottomsPost", is_print: 0},

	// <<top_ul>> = <<top>>을 
	{ name: "top_", orig_name: "topPost", is_print: 0},

	// <<topaside_rul>> = <<topaside>>를 
	{ name: "topaside_", orig_name: "topasidePost", is_print: 0},

	// <<breastsaside_rul>> = <<breastsaside>>를 
	{ name: "breastsaside_", orig_name: "breastsasidePost", is_print: 0},

	// <<outfit_ul>> = <<outfit>>을 
	{ name: "outfit_", orig_name: "outfitPost", is_print: 0},

	// <<underoutfit_ul>> = <<underoutfit>>을 
	{ name: "underoutfit_", orig_name: "underoutfitPost", is_print: 0},

	// <<lewdness_rul>> = <<lewdness>>를 
	{ name: "lewdness_", orig_name: "lewdnessPost", is_print: 0},

	// <<nudity_rul>> = <<nudity>>를 
	{ name: "nudity_", orig_name: "nudityPost", is_print: 0},

	// <<allTops_rul>> = <<allTops>>를 
	{ name: "allTops_", orig_name: "allTopsPost", is_print: 0},

	// <<allBottoms_rul>> = <<allBottoms>>를 
	{ name: "allBottoms_", orig_name: "allBottomsPost", is_print: 0},

	// <<allTopsUnderwear_rul>> = <<allTopsUnderwear>>를 
	{ name: "allTopsUnderwear_", orig_name: "allTopsUnderwearPost", is_print: 0},

	// <<allBottomsUnderwear_rul>> = <<allBottomsUnderwear>>를 
	{ name: "allBottomsUnderwear_", orig_name: "allBottomsUnderwearPost", is_print: 0},

	// HePost 
	// <<He_nun>> = <<He>>는, <<He_nun 1>> = <<He 1>>는 
	{ name: "He_", orig_name: "HePost", is_print: 0},

	// <<he_nun>> = <<he>>는, <<he_nun 1>> = <<he 1>>는 
	{ name: "he_", orig_name: "simpleHePost", is_print: 0},

	// <<Him_ul>> = <<Him>>을, <<Him_ul 1>> = <<Him 1>>을 
	{ name: "Him_", orig_name: "simpleHePost", is_print: 0},

	// <<him_ul>> = <<him>>을, <<him_ul 1>> = <<him 1>>을 
	{ name: "him_", orig_name: "simpleHePost", is_print: 0},

	// His (소유대명사;그의 것)는 His (소유격, 그의) 와 중복되므로 대신, Hers (그녀의 것)으로 사용함 
	// <<Hers_rul>> = <<Hers>>를, <<Hers_rul 1>> = <<Hers 1>>를 
	// <<hers_rul>> = <<hers>>를, <<hers_rul 1>> = <<hers 1>>를 
	{ name: "Hers_", orig_name: "hersPost", is_print: 0},
	{ name: "hers_", orig_name: "hersPost", is_print: 0},

	// 소유격 (his) 은 같은 "의"가 붙는데 조사처리할 것은 없지만 띄어쓰기 문제도 있고 하니 추가. <<Her>> 나 <<her>> 는 안 쓰는 듯. 무시 
	// <<His_yi>> = <<His>>의 
	{ name: "His_", orig_name: "simpleHePost", is_print: 0},
	{ name: "his_", orig_name: "simpleHePost", is_print: 0},

	// Hes, Shes (He's, She's) 는 <<He_nun>> ~했다. 로 번역할 때 쓰는 것이 바람직하다. 
	{ name: "Hes_", orig_name: "HePost", is_print: 0},
	{ name: "hes_", orig_name: "simpleHePost", is_print: 0},

	// <<Himself_rul>> = <<Himself>>를, <<Himself_rul 1>> = <<Himself 1>>를 
	// <<himself_rul>> = <<himself>>를, <<himself_rul 1>> = <<himself 1>>를 
	{ name: "Himself_", orig_name: "HimselfPost", is_print: 0},
	{ name: "himself_", orig_name: "HimselfPost", is_print: 0},

	// <<bHe_nun>> = <<bHe>>는, <<bHe_nun 1>> = <<bHe 1>>는 
	// <<bhe_nun>> = <<bhe>>는, <<bhe_nun 1>> = <<bhe 1>>는 
	{ name: "bHe_", orig_name: "bHePost", is_print: 0},
	{ name: "bhe_", orig_name: "bHePost", is_print: 0},

	// <<bHimself_nun>> = <<bHimself>>는, <<bHimself_nun 1>> = <<bHimself 1>>는 
	// <<bhimself_nun>> = <<bhimself>>는, <<bhimself_nun 1>> = <<bhimself 1>>는 
	{ name: "bHimself_", orig_name: "bHimselfPost", is_print: 0},
	{ name: "bhimself_", orig_name: "bHimselfPost", is_print: 0},

	// <<bHim_ul>> = <<bHim>>을, <<bHim_ul 1>> = <<bHim 1>>을 
	// <<bhim_ul>> = <<bhim>>을, <<bhim_ul 1>> = <<bhim 1>>을 
	{ name: "bHim_", orig_name: "bHePost", is_print: 0},
	{ name: "bhim_", orig_name: "bHePost", is_print: 0},

	// His (소유대명사;그의 것)는 His (소유격, 그의) 와 중복되므로 대신, bHers (그녀의 것)으로 사용함 
	// <<bHers_rul>> = <<bHers>>를, <<bHers_rul 1>> = <<bHers 1>>를 
	// <<bhers_rul>> = <<bhers>>를, <<bhers_rul 1>> = <<bhers 1>>를 
	{ name: "bhers_", orig_name: "bhersPost", is_print: 0},
	{ name: "bHers_", orig_name: "bhersPost", is_print: 0},

	// <<pShe_nun>> = <<pShe>>는 
	// <<pshe_nun>> = <<pshe>>는 
	{ name: "pShe_", orig_name: "pShePost", is_print: 0},
	{ name: "pshe_", orig_name: "pShePost", is_print: 0},


	// <<pHer_nun>> = <<pHer>>는 
	// <<pher_nun>> = <<pher>>는 
	{ name: "pHer_", orig_name: "pShePost", is_print: 0},
	{ name: "pher_", orig_name: "pShePost", is_print: 0},

	// <<pHerself_rul>> = <<pHerself>>를 
	// <<pherself_rul>> = <<pherself>>를 
	{ name: "pHerself_", orig_name: "pHerselfPost", is_print: 0},
	{ name: "pherself_", orig_name: "pHerselfPost", is_print: 0},

	// <<phim_ul>> = <<phim>>을 
	{ name: "phim_", orig_name: "pShePost", is_print: 0},
	{ name: "pHim_", orig_name: "pShePost", is_print: 0},

	// <<ohe_nun>> = <<ohe>>는, <<ohe_nun 1>> = <<ohe 1>>는 
	{ name: "ohe_", orig_name: "ohePost", is_print: 0},

	// <<bHis_rul>> = <<bHis>>을 
	// <<bhis_rul>> = <<bhis>>을 
	{ name: "bHis_", orig_name: "bHePost", is_print: 0},
	{ name: "bhis_", orig_name: "bHePost", is_print: 0},

	// <<hisselect_yi 1>> = <<hisselect 1>>의 
	{ name: "hisselect_", orig_name: "hisselectPost", is_print: 0},

	// <<his1_yi>> = <<his1>>의 
	{ name: "his1_", orig_name: "his1Post", is_print: 0},
	{ name: "his2_", orig_name: "his2Post", is_print: 0},
	{ name: "his3_", orig_name: "his3Post", is_print: 0},
	{ name: "his4_", orig_name: "his4Post", is_print: 0},
	{ name: "his5_", orig_name: "his5Post", is_print: 0},
	{ name: "his6_", orig_name: "his6Post", is_print: 0},

	// <<farm_He_nun pig>> = <<farm_He pig>>는 
	// <<farm_he_nun pig>> = <<farm_he pig>>는 
	{ name: "farm_He_", orig_name: "farm_hePost", is_print: 0},
	{ name: "farm_he_", orig_name: "farm_hePost", is_print: 0},

	// <<farm_His_yi pig>> = <<farm_His pig>>의 
	{ name: "farm_His_", orig_name: "farm_hePost", is_print: 0},
	{ name: "farm_his_", orig_name: "farm_hePost", is_print: 0},

	// <<farm_Him_un pig>> = <<farm_Him pig>>는 
	// <<farm_him_un pig>> = <<farm_him pig>>는 
	{ name: "farm_Him_", orig_name: "farm_hePost", is_print: 0},
	{ name: "farm_him_", orig_name: "farm_hePost", is_print: 0},

	// <<nnpc_He_nun "Robin">> = <<nnpc_He "Robin">>는 
	// <<nnpc_he_nun "Robin">> = <<nnpc_he "Robin">>는 
	{ name: "nnpc_He_", orig_name: "nnpc_HePost", is_print: 0},
	{ name: "nnpc_he_", orig_name: "nnpc_HePost", is_print: 0},

	// <<nnpc_Him_ul>> = <<nnpc_Him>>을, <<nnpc_Him_ul 1>> = <<nnpc_Him 1>>을 
	// <<nnpc_him_ul>> = <<nnpc_him>>을, <<nnpc_him_ul 1>> = <<nnpc_him 1>>을 
	{ name: "nnpc_Him_", orig_name: "nnpc_HePost", is_print: 0},
	{ name: "nnpc_him_", orig_name: "nnpc_HePost", is_print: 0},

	{ name: "nnpc_His_", orig_name: "nnpc_HePost", is_print: 0},
	{ name: "nnpc_his_", orig_name: "nnpc_HePost", is_print: 0},

	// <<nnpc_himself_rul>> = <<nnpc_himself>>를, <<nnpc_himself_rul 1>> = <<nnpc_himself 1>>를 
	{ name: "nnpc_himself_", orig_name: "nnpc_himselfPost", is_print: 0},

	// <<nnpc_wife_nun>> = <<nnpc_wife>>는 
	{ name: "nnpc_wife_", orig_name: "nnpc_wifePost", is_print: 0},

	// <<nnpc_lass_nun>> = <<nnpc_lass>>는 
	{ name: "nnpc_lass_", orig_name: "nnpc_lassPost", is_print: 0},

	// <<nnpc_gender_nun>> = <<nnpc_gender>>는 
	{ name: "nnpc_gender_", orig_name: "nnpc_genderPost", is_print: 0},

	// <<nnpc_gendery_nun>> = <<nnpc_gendery>>는 
	{ name: "nnpc_gendery_", orig_name: "nnpc_genderyPost", is_print: 0},

	// <<nnpc_genitals_rul>> = <<nnpc_genitals>>를 
	{ name: "nnpc_genitals_", orig_name: "nnpc_genitalsPost", is_print: 0},

	// <<nnpc_girlfriend_nun>> = <<nnpc_girlfriend>>는 
	{ name: "nnpc_girlfriend_", orig_name: "nnpc_girlfriendPost", is_print: 0},

	// <<nnpc_Brother_nun>> = <<nnpc_Brother>>는 
	// <<nnpc_brother_nun>> = <<nnpc_brother>>는 
	{ name: "nnpc_brother_", orig_name: "nnpc_brotherPost", is_print: 0},
	{ name: "nnpc_Brother_", orig_name: "nnpc_brotherPost", is_print: 0},

	// <<nnpc_title_ul "River">> = <<trNamedNPC "River" "title" "을">> 
	// <<nnpc_Title_ul "River">> = <<trNamedNPC "River" "title" "을">> 
	{ name: "nnpc_title_", orig_name: "nnpc_titlePost", is_print: 0},
	{ name: "nnpc_Title_", orig_name: "nnpc_titlePost", is_print: 0},

	// otherPost 
	// <<charles_nun>> = <<charles>>는 
	{ name: "charles_", orig_name: "charlesPost", is_print: 0},

	// TODO: <<aPost>> 는 어디에 쓰이는지 불확실해서 무시. 필요시 추가 

	// <<theowner_nun>> = <<theowner>>는 
	{ name: "theowner_", orig_name: "theownerPost", is_print: 0},

	// <<someone_ul>> = <<someone>>을 
	{ name: "someone_", orig_name: "someonePost", is_print: 0},

	// <<someones_yi>> = <<someones>>의 
	{ name: "someones_", orig_name: "someonesPost", is_print: 0},

	// <<their_yi>> = <<their>>의 
	{ name: "their_", orig_name: "theirPost", is_print: 0},

	// <<spouse_nun>> = <<spouse>>는 
	{ name: "spouse_", orig_name: "spousePost", is_print: 0},

	// <<father_nun>> = <<father>>는 
	// <<Father_nun>> = <<Father>>는 
	{ name: "father_", orig_name: "fatherPost", is_print: 0},
	{ name: "Father_", orig_name: "fatherPost", is_print: 0},

	// <<mummy_nun>> = <<mummy>>는 
	// <<Mummy_nun>> = <<Mummy>>는 
	{ name: "mummy_", orig_name: "mummyPost", is_print: 0},
	{ name: "Mummy_", orig_name: "mummyPost", is_print: 0},

	// <<girl_ul>> = <<girl>>을 
	{ name: "girl_", orig_name: "girlPost", is_print: 0},

	// <<girls_nun>> = <<girls>>는 
	{ name: "girls_", orig_name: "girlsPost", is_print: 0},

	// <<girlfriend_nun>> = <<girlfriend>>는 
	{ name: "girlfriend_", orig_name: "girlfriendPost", is_print: 0},

	// <<wife_nun>> = <<wife>>는 
	{ name: "wife_", orig_name: "wifePost", is_print: 0},

	// <<victimgirl_ul>> = <<victimgirl>>을 
	{ name: "victimgirl_", orig_name: "victimgirlPost", is_print: 0},

	// <<victimgirls_nun>> = <<victimgirls>>는 
	{ name: "victimgirls_", orig_name: "victimgirlsPost", is_print: 0},

	// <<lass_nun>> = <<lass>>는 
	{ name: "lass_", orig_name: "lassPost", is_print: 0},

	// <<gender_nun>> = <<gender>>는 
	{ name: "gender_", orig_name: "genderPost", is_print: 0},

	// <<bitch_nun>> = <<bitch>>는 
	{ name: "bitch_", orig_name: "bitchPost", is_print: 0},

	// <<whore_nun>> = <<whore>>는 
	{ name: "whore_", orig_name: "whorePost", is_print: 0},

	// <<slut_ul>> = <<slut>>을 
	{ name: "slut_", orig_name: "slutPost", is_print: 0},

	// <<semen_ul>> = <<semen>>을 
	{ name: "semen_", orig_name: "semenPost", is_print: 0},

	// <<prostate_nun>> = <<prostate>>는 
	{ name: "prostate_", orig_name: "prostatePost", is_print: 0},

	// <<personpenis_nun>> = <<personpenis>>는 
	{ name: "personpenis_", orig_name: "personpenisPost", is_print: 0},

	// <<wallet_ul>> = <<wallet>>을 
	{ name: "wallet_", orig_name: "walletPost", is_print: 0},

	// <<sir_nun>> = <<sir>>는 
	{ name: "sir_", orig_name: "sirPost", is_print: 0},

	// <<monk_nun>> = <<monk>>는 
	{ name: "monk_", orig_name: "monkPost", is_print: 0},

	// <<monks_nun>> = <<monks>>는 
	{ name: "monks_", orig_name: "monksPost", is_print: 0},

	// <<monks_and_nuns_nun>> = <<monks_and_nuns>>는 
	{ name: "monks_and_nuns_", orig_name: "monks_and_nunsPost", is_print: 0},

	// <<priest_nun>> = <<priest>>는 
	{ name: "priest_", orig_name: "priestPost", is_print: 0},

	// <<priests_nun>> = <<priests>>는 
	{ name: "priests_", orig_name: "priestsPost", is_print: 0},

	// <<farm_text_many_nun dog>> = <<farm_text_many dog>>는 
	{ name: "farm_text_many_", orig_name: "farm_text_manyPost", is_print: 0},

	// <<farm_text_nun dog>> = <<farm_text dog>>는 
	{ name: "farm_text_", orig_name: "farm_textPost", is_print: 0},

	// <<Master_nun>> = <<Master>>는 
	// <<master_nun>> = <<master>>는 
	{ name: "Master_", orig_name: "MasterPost", is_print: 0},
	{ name: "master_", orig_name: "MasterPost", is_print: 0},

	// <<daughter_nun>> = <<daughter>>는 
	{ name: "daughter_", orig_name: "daughterPost", is_print: 0},

	// <<daylight_nun>> = <<daylight>>는 
	{ name: "daylight_", orig_name: "daylightPost", is_print: 0},

	// <<ppackbrother_nun>> = <<ppackbrother>>는 
	{ name: "ppackbrother_", orig_name: "ppackbrotherPost", is_print: 0},

	// <<pPackbrother_nun>> = <<pPackbrother>>는 
	{ name: "pPackbrother_", orig_name: "ppackbrotherPost", is_print: 0},

	// <<pheat_nun>> = <<pheat>>는 
	{ name: "pheat_", orig_name: "pheatPost", is_print: 0},

	// <<wolf_cave_plural_ul>> = <<wolf_cave_plural>>을 
	{ name: "wolf_cave_plural_", orig_name: "wolf_cave_pluralPost", is_print: 0},

	// <<beast_jaws_text_nun>> = <<beast_jaws_text>>는 
	// <<beast_Jaws_text_nun>> = <<beast_Jaws_text>>는 
	{ name: "beast_jaws_text_", orig_name: "beast_jaws_textPost", is_print: 0},
	{ name: "beast_Jaws_text_", orig_name: "beast_jaws_textPost", is_print: 0},

	// <<beast_teeth_text_nun>> = <<beast_teeth_text>>는 
	{ name: "beast_teeth_text_", orig_name: "beast_teeth_textPost", is_print: 0},

	// <<handtool_un>> = <<handtoolPost (handtoolname)>>은 
	{ name: "handtool_", orig_name: "handtoolPost", is_print: 0},

	// <<lefttool_un 1>> = $NPCList[1].lefttool은 
	{ name: "lefttool_", orig_name: "lefttoolPost", is_print: 0},

	// <<righttool_un 1>> = $NPCList[1].righttool은 
	{ name: "righttool_", orig_name: "righttoolPost", is_print: 0},

	// <<struggle_appendage_nun "mouth">> = <<struggle_appendage "mouth">>는 
	{ name: "struggle_appendage_", orig_name: "struggle_appendagePost", is_print: 0},

	// <<plant_details_nun>> = <<plant_details>>는, <<plant_details_nun "forest">> = <<plant_details "forest">>는 
	// <<Plant_details_nun>> = <<Plant_details>>는, <<Plant_details_nun "forest">> = <<Plant_details "forest">>는 
	{ name: "plant_details_", orig_name: "plant_detailsPost", is_print: 0},
	{ name: "Plant_details_", orig_name: "plant_detailsPost", is_print: 0},

	// <<tower_creature_text_nun>> = <<tower_creature_text>>는 
	{ name: "tower_creature_text_", orig_name: "tower_creature_textPost", is_print: 0},

	// <<pound_text_nun>> = <<pound_text>>는 
	{ name: "pound_text_", orig_name: "pound_textPost", is_print: 0},

	// personPost 
	// <<person_ul>> = <<person>>을 
	{ name: "person_", orig_name: "personPost", is_print: 0},

	// <<personsimple_ul>> = <<personsimple>>을 
	{ name: "personsimple_", orig_name: "personsimplePost", is_print: 0},

	// <<combatperson_ul>> = <<combatperson>>을 
	// <<combatPerson_ul>> = <<combatPerson>>을 
	{ name: "combatperson_", orig_name: "combatpersonPost", is_print: 0},
	{ name: "combatpersons_", orig_name: "combatpersonPost", is_print: 0},
	{ name: "combatPerson_", orig_name: "combatpersonPost", is_print: 0},

	// <<people_ul>> = <<people>>을 
	{ name: "people_", orig_name: "peoplePost", is_print: 0},

	// <<peopley_nun>> = <<peopley>>는 
	{ name: "peopley_", orig_name: "peopleyPost", is_print: 0},

	// <<persony_nun>> = <<persony>>는 
	{ name: "persony_", orig_name: "personyPost", is_print: 0},

	// <<group_ul>> = <<group>>을 
	{ name: "group_", orig_name: "groupPost", is_print: 0},

	// <<fullGroup_ul>> = <<fullGroup>>을 
	{ name: "fullGroup_", orig_name: "fullGroupPost", is_print: 0},

	// <<enumeratedGroup_ul>> = <<enumeratedGroup>>을 
	{ name: "enumeratedGroup_", orig_name: "enumeratedGroupPost", is_print: 0},

	// <<putpost_nun "man">> = <<putpost "man" "은">> 
	{ name: "putpost_", orig_name: "putpost", is_print: 0},

	// creature 
	// <<creature_nun "snake">> = <<trCreature "all" "snake" "은">> 
	{ name: "creature_", orig_name: "trCreature", is_print: 1},

	// <<tentacle_ul "narrow tentacle">> = <<trTentacle "narrow tentacle" "을">> 
	{ name: "tentacle_", orig_name: "trTentacle", is_print: 0},

	// <<vorecreature_nun>> = <<trVore $vorecreature "은">> 
	{ name: "vorecreature_", orig_name: "trVore", is_print: 1},

	// <<struggle_creature_nun "lurker">> = <<trStruggle "lurker" "은">> 
	{ name: "struggle_creature_", orig_name: "trStruggle", is_print: 1},

	// <<struggle_mouth_creature_nun>> = <<trStruggle $struggle.mouth.creature "은">> 
	{ name: "struggle_mouth_creature_", orig_name: "struggle_mouth_creature", is_print: 0},

	// <<struggle_vagina_creature_nun>> = <<trStruggle $struggle.vagina.creature "은">> 
	{ name: "struggle_vagina_creature_", orig_name: "struggle_vagina_creature", is_print: 0},

	// <<struggle_penis_creature_nun>> = <<trStruggle $struggle.penis.creature "은">> 
	{ name: "struggle_penis_creature_", orig_name: "struggle_penis_creature", is_print: 0},

	// <<struggle_anus_creature_nun>> = <<trStruggle $struggle.anus.creature "은">> 
	{ name: "struggle_anus_creature_", orig_name: "struggle_anus_creature", is_print: 0},

	// <<struggle_chest_creature_nun>> = <<trStruggle $struggle.chest.creature "은">> 
	{ name: "struggle_chest_creature_", orig_name: "struggle_chest_creature", is_print: 0},

	// <<swarmtype_ul>> = <<trSwarm $swarm.type "을">> 
	{ name: "swarmtype_", orig_name: "swarmtype", is_print: 0},

	// <<swarmname_ul>> = <<trSwarm $swarm.name "을">> 
	{ name: "swarmname_", orig_name: "swarmname", is_print: 0},

	// <<swarm_ul "eel">> = <<trSwarm "eel" "을">> 
	{ name: "swarm_", orig_name: "trSwarm", is_print: 1},

	// other 
	// <<beastdesc_nun "large dog girl">> = <<trBeastdesc "large dog girl" "은">> 
	{ name: "beastdesc_", orig_name: "trBeastdesc", is_print: 1},

	// <<bodypart_nun "left_arm">> = <<trBodypart "left_arm" "은">> 
	{ name: "bodypart_", orig_name: "trBodypart", is_print: 1},

	// <<bodywriting_ul "heart">> = <<trBodyWriting "heart" "을">> 
	{ name: "bodywriting_", orig_name: "trBodyWriting", is_print: 1},

	// <<breastsdesc_nun "heart">> = <<trBreastsdesc "heart" "은">> 
	{ name: "breastsdesc_", orig_name: "trBreastsdesc", is_print: 1},

	// <<namedNPC_nun "River">> = <<trNamedNPC "River" "은">> 
	{ name: "namedNPC_", orig_name: "trNamedNPC", is_print: 1},

	// <<NPCdesc_nun "shapely girl">> = <<trNPCdesc "shapely girl" "은">> 
	{ name: "NPCdesc_", orig_name: "trNPCdesc", is_print: 1},

	// <<NPCname_ul "River">> = <<trNPCname "River" "을">> 
	{ name: "NPCname_", orig_name: "trNPCname", is_print: 1},

	// <<penisdesc_nun "tiny penis">> = <<trPenisdesc "tiny penis" "은">> 
	{ name: "penisdesc_", orig_name: "trPenisdesc", is_print: 1},

	// <<plants_nun "daisy">> = <<trPlants "daisy" "은">> 
	{ name: "plants_", orig_name: "trPlants", is_print: 1},

	// <<plants_plural_ul "daisy">> = <<trPlants "daisy" "plural" "을">> 
	{ name: "plants_plural_", orig_name: "trPlantsPlural", is_print: 1},

	// <<weather_nun "rain">> = <<trWeather "rain" "은">> 
	{ name: "weather_", orig_name: "trWeather", is_print: 1},

	// <<sextoy_nun "dildo">> = <<sextoy "dildo">>는 
	{ name: "sextoy_", orig_name: "sextoyPost", is_print: 0},

	// <<relaxed_guard_nun 0>> = <<relaxed_guard 0>>는 
	{ name: "relaxed_guard_", orig_name: "relaxed_guardPost", is_print: 0},

	// <<anxious_guard_nun 0>> = <<anxious_guard 0>>는 
	{ name: "anxious_guard_", orig_name: "anxious_guardPost", is_print: 0},

	// <<veteran_guard_nun 0>> = <<veteran_guard 0>>는 
	{ name: "veteran_guard_", orig_name: "veteran_guardPost", is_print: 0},

	// <<methodical_guard_nun 0>> = <<methodical_guard 0>>는 
	{ name: "methodical_guard_", orig_name: "methodical_guardPost", is_print: 0},

	// <<tattooed_inmate_nun 0>> = <<tattooed_inmate 0>>는 
	{ name: "tattooed_inmate_", orig_name: "tattooed_inmatePost", is_print: 0},

	// <<scarred_inmate_nun 0>> = <<scarred_inmate 0>>는 
	{ name: "scarred_inmate_", orig_name: "scarred_inmatePost", is_print: 0},
];

const trEasyPostsList = {
	'un': "은", 'nun': "은",
	'i': "이", 'ga': "이",
	'ul': "을", 'rul': "을",
	'gwa': "과", 'wa': "과",
	'irang': "이랑", 'rang': "이랑",
	'a': "아", 'ya': "아",
	'iyo': "이여", 'yo': "이여",
	'iya': "이야", 
	'uro': "으로", 'ro': "으로",
	'uroseo': "으로서", 'roseo': "으로서",
	'urosseo': "으로써", 'rosseo': "으로써",
	'urobuter': "으로부터", 'robuter': "으로부터",
	'ira': "이라", 'ra': "이라",
	'irago': "이라고", 'rago': "이라고",
	'ina': "이나", 'na': "이나",
	'iran': "이란", 'ran': "이란",
	'idunga': "이든가", 'dunga': "이든가",
	'idonga': "이던가", 'donga': "이던가",
	'idunji': "이든지", 'dunji': "이든지",
	'idonji': "이던지", 'donji': "이던지",
	'iyamalro': "이야말로", 'yamalro': "이야말로",
	'iguna': "이구나", 'guna': "이구나",
	'ida': "이다", 'da': "이다",
	'iji': "이지", 'ji': "이지",
	'yi': "의"
};

/* ParseEasyPostParam : EasyPost 의 인자를 분류해 돌려준다 */
function ParseEasyPostParam(args)
{
	let post, sep, param=[];
	for (let i=0; i<args.length; i++)
	{
		if (i == 0 && typeof(args[0]) === "string")
		{
			if (args[0].charCodeAt() >= 0x0AC00)
				post = args[i];
			else
				post = trEasyPostsList[args[0]];
			
			if (post === undefined)
				param.push(args[0]);
		}
		else
			param.push(args[i]);
	}
	
	if (param.length > 0)
	{
		let i=param.length-1;
		if (typeof(param[i]) === "string" && param[i] == "sep")
			sep = param.pop();
	}
	return [post, sep, param];
}

/* EasyPostAddMacro : EasyPost 계열 매크로들을 등록한다 */
function EasyPostAddMacro()
{
	let name;
	let orig_name;
	let is_print;
	for (let i = 0; i < EasyPostMacroList.length; i++)
	{
		name =  EasyPostMacroList[i].name;
		orig_name =  EasyPostMacroList[i].orig_name;
		is_print =  EasyPostMacroList[i].is_print;
		// macro_template : 실제 매크로를 불러오는 본체의 템플릿
		let macro_template = `
		function ${name}(...args)
		{
			if (!Macro.has("${orig_name}"))
				return "<span class='red'>에러: ${name}: ${orig_name} 매크로가 존재하지 않음</span>";
			let [post, sep, param] = ParseEasyPostParam(args);
			let wikistr = "<<${orig_name}";
			for(let i = 0; i < param.length; i++)
			{
				if (param[i] === undefined)
					wikistr += " $_undefined";
				else if (typeof(param[i]) === "number")
					wikistr += " " + param[i].toString();
				else
					wikistr += " '" + param[i] + "'";
			}
			if (post)
			{
				wikistr += " '" + post + "'";
				if (sep)
					wikistr += " '" + sep + "'";
			}
			wikistr +=">>";
			if(${is_print})
				wikistr += "<<print _trResult>>";
			return wikistr;
		}
		DefineMacroS("${name}", ${name});
		`;
		eval(macro_template);
	}
}

EasyPostAddMacro();
