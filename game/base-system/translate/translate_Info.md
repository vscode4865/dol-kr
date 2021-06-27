대부분의 결과물은 _trResult에 저장함
조사를 분리하여 저장하는 경우 _trPost에 저장함


#폴더
*(.twee)파일
    *메크로




-----------------
# Clothes

* trClothes
    ```
    <<trClothes>>
        <<trClothes *part *clothes_name>>
        <<trClothes *part *clothes_name *name post "sep">>
        <<trClothes *part *clothes_name *[desc | description]>>

        옷의 이름이나 설명을 번역한다.


        필수사항
        - *part: 착용 부위
        - *clothes_name: 옷의 이름
        - *name: 옷의 이름을 출력한다.
        - *desc , description: 옷의 설명을 출력한다.

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trClothes *upper "sundress">>                                 //  "선 드레스"
        <<trClothes "upper" "sundress" "name" "을" "sep">>              //  _trResult: "선 드레스", _trPost: "를"
        <<trClothes "upper" "sundress" "desc">>                         //  "뛰어 놀기에 좋다."
    ```

    ```
    <<trSearchClothes>>
        <<trSearchClothes *clothes_name>>
        <<trSearchClothes *clothes_name *name post "sep">>
        <<trSearchClothes *clothes_name *[desc | description]>>

        
        옷 타입의 지정 없이 번역한다.
        +모든 항목과 대조한다.

        필수사항
        - *clothes_name: 옷의 이름
        - *name: 옷의 이름을 출력한다.
        - *desc , description: 옷의 설명을 출력한다.

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trSearchClothes "sundress">>                                  //  "선 드레스"
        <<trSearchClothes "sundress" "name" "을" "sep">>                //  _trResult: "선 드레스", _trPost: "를"
        <<trSearchClothes "sundress" "desc">>                           //  "뛰어 놀기에 좋다."
    ```


* trClothesType
    ```
    <<trClothesType>>
        <<trClothesType *clothesType post>>

        옷의 타입을 번역합니다.

        필수사항
        - *clothesType: 옷의 타입
        
        선택사항
        - post: 번역결과 뒤에 해당 조사를 붙인다.

        e.g.
        <<trClothesType "upper">>               //  "상의"
    ```

* trClothingTrait
    ```
    <<trClothingTrait>>
        <<trClothingTrait *clothingTrait>>

        옷의 특성을 번역합니다.

        필수사항
        - *clothingTrait: 옷의 특성

        e.g.
        <<trClothingTrait "holy">>               //  "신성함"
    ```

* trIntegrityKeyword
    ```
        옷의 해어진 상태를 번역합니다.
		 
		 이것은 window.integrityKeyword (base.js) 의 한글 대용 버전이며
		 function integrityWord() (base.js) 에서 integrityKeyword 대신 사용됩니다.

    ```


-----------------
# Post
    + 바로 출력하기 때문에 _trResult를 사용하지 않음

* beasttypePost
    ```
    <<beasttypePost>>
        <<beasttypePost [num] post "sep">>

            <<beasttype>>의 대체 위젯. 조사를 붙일 수 있다.
        

            선택사항
            - num: 원본 매크로에 사용되는 인수값.
            - post: 번역결과의 뒤에 조사를 붙인다.
            - sep: 조사를 분리하여 저장한다.

            e.g.
            <<beasttypePost 1 "을">>                            //<<breasts 1>>을
            <<beasttypePost "을">>                              //<<breasts>>을
    ```

     ```
    <<beastspluralPost>>
        <<beastspluralPost post "sep">>

            <<beastsplural>>의 대체 위젯. 조사를 붙일 수 있다.
        

            선택사항
            - post: 번역결과의 뒤에 조사를 붙인다.
            - sep: 조사를 분리하여 저장한다.

            e.g.
            <<beastsplural "을">>                               //<<beastsplural>>을
    ```


* bodyPost
    ```
    <<breastsPost>>
        <<breastsPost post "sep">>

        <<breasts>>의 대체 위젯. 조사를 붙일 수 있다.
       

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<breastsPost "을">>                //<<breasts>>을
    ```

    ```
    <<nipplePost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<nipplesPost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<bottomPost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<pussyPost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<genitalsPost>>
        <<genitalsPost [num] post "sep">>

        <<genitals>>의 대체 위젯. 조사를 붙일 수 있다.

        선택사항
        - num: 원본 매크로에 사용되는 인수값.
        - post: 조사
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<genitalsPost 1 "이">>                 //<<genitals 1>>이
        <<genitalsPost "이">>                   //<<genitals>>이
    ```

    ```
    <<clitPost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<penisPost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<glansPost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<testiclesPost>>
        + <<breastsPost>>와 용도 및 방식 같음. 생략
    ```


* clothesPost
    ```
    <<undertopPost>>
        <<undertopPost post "sep">>

        <<undertop>>의 대체 위젯. 조사를 붙일 수 있다.


        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<undertopPost "을">>               //<<undertop>>을
    ```

    ```
    <<groinPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<crotchPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<undiesPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<bottomsPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<underbottomsPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<topPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<topasidePost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<breastsasidePost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<outfitPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<underoutfitPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<lewdnessPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<nudityPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 다만, 문장의 매끄러운 처리를 위해 <<nudityPostend>>를 문장의 끝에 붙여야 한다.
    ```

    ```
    <<nudityPostend>>
        + <<nudityPost>>가 사용된 문장의 끝에 붙여야하는 매크로.

        e.g.
        당신은 당신의 <<nudityPost "을">> 의식한다.<<nudityPostend>>
    ```

    <<allTopsPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```
    <<allBottomsPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```
    <<allTopsUnderwearPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```
    <<allBottomsUnderwearPost>>
        + <<undertopPost>>와 용도 및 방식 같음. 생략
    ```

* HePost
    ```
    <<HePost>>
        <<HePost [num] post "sep">>
        
        <<HePost>>의 대체 위젯. 조사를 붙일 수 있다.
        + <<hePost>> , <<HimPost>>, <<ShePost>>등도 사용할 수 있음.

        선택사항
        - num: 원본 매크로에 사용되는 인수값.
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<HePost 1 "을">>               // <<He 1>>을 | <<He 1>>를
        <<HePost "을">>                 // <<He>>을 | <<He>>를
    ```

    ```
    <<bHePost>>
        <<bHePost [num] post "sep">>
        
        <<bHePost>>의 대체 위젯. 조사를 붙일 수 있다.
        + <<bhePost>> , <<bHimPost>>, <<bhisPost>>등도 사용할 수 있음.

        선택사항
        - num: 원본 매크로에 사용되는 인수값.
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<bHePost 1 "을">>               // <<bHe 1>>을
        <<bHePost "을">>                 // <<bHe>>을
    ```

    ```
    <<pShePost>>
        <<pShePost post "sep">>
        
        <<pShe>>의 대체 위젯. 조사를 붙일 수 있다.
        + <<pshePost>> , <<pHimPost>>, <<pherPost>>등도 사용할 수 있음.

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<pShePost "을">>               // <<pShe>>을 | <<pShe>>를
    ```

    ```
    <<ohePost>>
        + <<pShePost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<hisselectPost>>
        + <<pShePost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<his1Post>>
        <<his1Post post "sep">>

        <<his1>>의 대체 위젯. 조사를 붙일 수 있다.
        + <<his2Post>>, <<his3Post>>등도 사용할 수 있음.

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<his1Post "의">>               // <<his1>>의
    ```

* otherPost
    ```
    <<charlesPost>>
        <<charlesPost post "sep">>

        <<charles>>의 대체 위젯. 조사를 붙일 수 있다.
        
        선택사항
            - post: 번역결과의 뒤에 조사를 붙인다.
            - sep: 조사를 분리하여 저장한다.

        e.g.
        <<charlesPost "을">>               // <<charles>>을
    ```

    ```
    <<aPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<theownerPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<someonePost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<someonesPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<theirPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<spousePost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<girlPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<girlsPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<girlfriendPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<wifePost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<victimgirlPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<victimgirlsPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<lassPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<genderPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<bitchPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<slutPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<semenPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<prostatePost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<personpenisPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<walletPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<sirPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<monkPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<monks_and_nunsPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<priestPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<priests>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<farm_text_manyPost>>
        <<farm_text_manyPost [type] post "sep">>

        <<farm_text_many>>의 대체 위젯. 조사를 붙일 수 있다.
        
        선택사항
            - type: 원본 매크로에 사용되는 인수값.
            - post: 번역결과의 뒤에 조사를 붙인다.
            - sep: 조사를 분리하여 저장한다.

        e.g.
        <<farm_text_manyPost "dog" "을">>               // <<farm_text_manyPost "dog">>을
    ```

    ```
    <<farm_textPost>>
        + <<farm_text_manyPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<MasterPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<masterPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<daylight>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<ppackbrotherPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<pPackbrotherPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<pheatPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<wolf_cave_pluralPost>>
        + <<charlesPost>>와 용도 및 방식 같음. 생략
    ```
    

* personPost
    ```
    <<personPost>>
        <<personPost post "sep">>

        <<person>>의 대체 위젯. 조사를 붙일 수 있다.

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.
        
        e.g.
        <<personPost "을">>               // <<person>>을 | <<person>>를
    ```

    ```
    <<personsPost>>
        <<personsPost post "sep">>
        + <<personPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<personsimplePost>>
        + <<personPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<combatpersonPost>>
        + <<personPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<peoplePost>>
        + <<personPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<peopleyPost>>
        + <<personPost>>와 용도 및 방식 같음. 생략
    ```

    ```
    <<personyPost>>
        + <<personPost>>와 용도 및 방식 같음. 생략
    ```

    ```
	<<handtoolPost>>
		<<handtoolPost *target *post 'sep'>>

		손에 있는 도구 이름을 번역한다. + 메이크업 이름도 번역한다.
		+ trinit.twee의 _handtoolList에 미리 정의되어 있어야 함.

		필수사항
		- target: 툴 이름
		
		선택사항
		- post: 번역 결과의 뒤에 조사를 붙인다.
		- sep: 조사를 분리하여 저장한다.

		e.g.
		<<handtoolPost "marker" "을">>_trResult              // "마커펜을"
    ```

	<<lefttoolPost>>
		<<lefttoolPost [num] *post 'sep'>>

		NPC 손에 있는 도구 이름을 번역한다.
		(내부적으로 handtoolPost 를 부름)

		
		선택사항
		- num: NPCList 의 번호. 생략시 0번.
		- post: 번역 결과의 뒤에 조사를 붙인다.
		- sep: 조사를 분리하여 저장한다.

		e.g.
		<<lefttoolPost 0 "을">>_trResult              // $NPCList[0].lefttool을
    ```

    ```
	<<righttoolPost>>
        + <<lefttoolPost>>와 용도 및 방식 같음. 생략
    ```


* putpost
    ```
    <<putpost *target *post 'sep'>>

    단어 뒤에 조사를 붙인다.
    + 해당 파일의 _putpostList에 미리 정의되어 있어야 함.

    필수사항
    - target: 조사를 붙일 대상
    - post: 번역 결과의 뒤에 조사를 붙인다.

    선택사항
    - sep: 조사를 분리하여 저장한다.

    e.g.
    <<putpost "man" "이">>              // "남자가"
    ```


-----------------
# Tentacle

* trTentacle
    ```
    <<trTentacle>>
        <<trTentacle *tentacledesc post "sep">>

        촉수의 상세를 번역한다.
        # 바로 출력하기 때문에 _trResult를 사용하지 않음

        필수사항
        - tentacledesc: 촉수의 상세

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        $tentacles[_i].fullDesc = "narrow tantacle"
        <<trTentacle $tentacles[_i].fullDesc "을">>              //"가느다란 촉수를"
    ```


-----------------
# Slime

* slimeEvent.twee
    ```
    <<trSlimeEvent>>
        <<trSlimeEvent>>

        슬라임 이밴트를 번역한다.
        # 바로 출력하기 때문에 _trResult를 사용하지 않음
    ```
	
-----------------
# ListboxItems

* trListboxItemsFromArray
	```
	<<trListboxItemsFromArray>>
		<<trListboxItemsFromArray *arrayname>>
		
		<<listbox>> 에 배열이 들어갈 때 배열을 번역하여 _trListboxItems 에 설정한다.
		
		필수사항
		- arrayname 원본 배열 이름 (따옴표를 붙여줄것)
		- 해당 arrayname 에 대한 번역표가 trListboxItems.twee 의 <<trListboxItemsInit>> 매크로 안에 존재할것
		
		e.g.
		/* 원본 */
		<<set _options to ["Everyone","Strangers","Animals","Acquaintances","Robin","Bailey"]>>
		
		<<listbox "_defaultActions" autoselect>>
			<<optionsfrom _options>>	
		<</listbox>>
		
		/* 번역 */
		<<set _options to ["Everyone","Strangers","Animals","Acquaintances","Robin","Bailey"]>>
		
		<<trListboxItemsFromArray "_options">><<listbox "_defaultActions" autoselect>>	/* listbox 앞에 배열이름을 따옴표로 붙여서 매크로 부름 */
			<<optionsfrom _trListboxItems>>	/* 원래 배열 대신 _trListboxItems 를 사용 */
		<</listbox>>

		note
		- listbox 에 들어가는 옵션이 배열 ([] 안에 정의되는 것) 이 아니라 오브젝트 모음 ({} 안에 "이름":"값" 형식으로 정의되는 것) 인 경우 그냥 
			앞의 "이름"만 번역하면 되므로 trListboxItemsFromArray 를 사용할 필요가 없음.
		
	```
	
-----------------
# Other

* trBeastdesc
    ```
    <<trBeastdesc>>     // 개선 필요
        <<trBeastdesc *beastdesc post "sep">>

        짐승의 상세를 번역한다.

        필수사항
        - beastdesc: 짐승의 상세

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trBeastdesc 'large dog girl' '을'>>             // '큰 개 소녀를'
    ```


* trBodypart
    ```
    <<trBodypart>>
        <<trBodypart *bodyPart post "sep">>

        몸의 부위를 번역한다.

        필수사항
        - *bodyPart: 몸의 부위

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trBodypart 'left_arm' '을'>>             // '왼팔을'
    ```

* trBodyWriting
    ```
    <<trBodyWriting>>
        <<trBodyWriting *bodywriting post "sep">>

        바디라이팅을 번역한다.

        필수사항
        - *bodywriting

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trBodyWriting "heart">>               //  "하트"
    ```
* trBodyWritingCategory
    ```
    <<trBodyWritingCategory>>
        <<trBodyWritingCategory *category>>

        문신 종류를 번역한다.

        필수사항
        - *catgory 종류명

        e.g.
        <<trBodyWritingCategory "Masochism">>_trResult               //  "마조히즘"
    ```

* trBreastsdesc
    ```
    <<trBreastsdesc>>
        <<trBreastsdesc *Breastdesc post "sep">>

        가슴의 상세를 번역한다.

        필수사항
        - *Breastdesc: 가슴의 상세

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trBreastsdesc "budding breasts" "을">>             //"약간 솟아오른 가슴을"
    ```

* trColour
    ```
    <<trColour>>
        <<trColour *colour>>

        색을 번역한다.

        필수사항
        - *colour: 번역할 색

        e.g.
        <<trColour 'red'>>
    ```

* trHairtype
    ```
    <<trHairtype>>
        <<trHairtype *hairtype>>
        
        머리카락의 타입을 번역한다.

        필수사항
        - hairtype: 머리카락의 타입

        e.g.
        <<trHairtype "braid left">>             // "왼쪽으로 땋은 머리"

* trNamedNPC
    ```
    <<trNamedNPC>>
        <<trNamedNPC [*npcName | *npcTitle] post "sep">>
        <<trNamedNPC [*npcName | *npcTitle] "name" post "sep">>
        <<trNamedNPC [*npcName | *npcTitle] "title" post "sep">>

        namedNPC를 번역한다.
        
        필수사항
        - *npcName: 번역할 NamedNPC의 이름
        - *npcTitle: 번역할 NamedNPC의 타이틀

        선택사항
        - name: 해당 NPC의 이름을 출력한다.
        - title: 해당 NPC의 타이틀을 출력한다.
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trNamedNPC "River">>                          // '리버'
        <<trNamedNPC "maths teacher">>                  // '수학 교사'
        <<trNamedNPC "River" "title">>                  // '수학 교사' 
        <<trNamedNPC "River" '을'>>                     // '리버를'    
    ```

* trNPCdesc
    ```
    <<trNPCdesc>>
        <<trNPCdesc *NPCdesc>>
        <<trNPCdesc *NPCfulldesc post "sep">>

        NPC의 상세(Adj)를 번역한다.
        +인수가 _NPCdesc에 없는 경우 인수 그대로 출력한다.

        필수사항
        - *NPCdesc: NPC의 상세
        - *NPCfulldesc: NPC의 모든 상세

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trNPCdesc "shapely">>                         //  "균형잡힌"
        <<trNPCdesc "shapely girl" "을">>               //  "균형잡힌 소녀를"
        <<trNPCdesc "Robin" "을">>                      //  "로빈을"
    ```

* trNPCname
    ```
    <<trNPCname>>
        <<trNPCname [NPCname | NPCnum]>>
        <<trNPCname [NPCname | NPCnum] post "sep">>

        NPC의 이름을 번역한다.

        필수사항
        - NPCname: NPC의 이름
        - NPCnum: NPC의 번호 (1-6)
        - 주어지지 않은 경우 1번 NPC 이름으로 가정함

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trNPCname "Olivia">>                         //  "올리비아"
        <<trNPCname "Robin" "을">>                      //  "로빈을"
    ```

* trParasite
    ```
    <<trParasite>>
        <<trParasite *parasite post "sep">>

        기생충을 번역한다.

        필수사항
        - *parasite: 기생충 이름

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trParasite tantacle '을'>>               // '촉수를'
    ```

* trPenisdesc
    ```
    <<trPenisdesc>>
        <<trPenisdesc *Penisdesc post "sep">>

        남성기의 상세를 번역한다.

        필수사항
        - *Penisdesc: 남성기의 상세

        선택사항
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trPenisdesc "tiny penis" "을">>             //"조그마한 자지를"
    ```

    ```
    <<trPenissize>>
        <<trPenissize *Penisdesc post "sep">>

        <<Penissize>>의 대체 매크로. 남성기의 크기를 번역한다.

        e.g.
        <<trPenissize>>             //"조그마한"
    ```


* trPill
    ```
    <<trPill>>
        <<trPill *PillType>>

        약의 타입을 번역합니다.

        필수사항
        - *PillType: 약의 타입

        e.g.
        <<trPill "Growth">>     // 성장약
    ```


* trPlants
    ```
    <<trPlants>>
        <<trPlants *plantName ["name"|"plural"] post "sep">>
        <<trPlants *plantPlural ["name"|"plural"] post "sep">>

        식물을 번역한다.

        필수사항
        - *plantName: 식물의 이름
        - *plantPlural: 식물의 복수형 단어

        선택사항
        - 'name': 식물의 이름을 이용해서 번역
        - 'plural': 식물의 복수형태 단어를 이용해서 번역
        - post: 번역결과의 뒤에 조사를 붙인다.
        - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trPlants 'daisy' '을'>>                       // '데이지를'
        <<trPlants 'daisies' 'name' '을'>>              // '데이지를'
        <<trPlants 'daisies' '을'>>                     // '데이지들을'
        <<trPlants 'daisy' 'plural' '을'>>              // '데이지를을'
    ```


* trPost
    ```
    <<trPost>>
        <<trPost *postNum *post "sep">>
        
        조사를 번역하여 _trResult의 뒤에 붙인다.

        필수사항
        - *postNum: 종성이 있을 경우 (단, ㄹ 제외) 0, 종성이 없을 경우 1, 종성이 ㄹ일 경우 2.
        - *post: 종성이 있을 경우의 일반 조사 (예: "은", "을", "으로" 등)

        선택사항
        - sep: 조사를 _trPost에 따로 저장한다.

        e.g.
        /* _trResult = "가나다" */
        <<trPost 0 '은'>>                   //  '가다나은'
        /* _trResult = "abc" */
        <<trPost 1 '을'>>                   //  'abc를'
        /* _trResult = "123" */
        <<trPost 1 '이' 'sep'>>             //  _trReulst:'123', _trPost: "가"
    ```

    ```
    <<getPostNum>>
        <<getPostNum *txt>>
        
        문자열에서 조사 번호를 찾아 _postNum에 넣는다

        필수사항
        - *txt: 문자열

        주의점
        - 현재 한글과 숫자만 가능

        e.g.

        <<getPostNum '가'>>                   //  _postNum = 1
		<<getPostNum '가능'>>                   //  _postNum = 0
		<<getPostNum '팔'>>                   //  _postNum = 2
		<<getPostNum '11'>>                   //  _postNum = 2 (십일)
		<<getPostNum 'ABC'>>                   //  _postNum = undefined
		<<getPostNum>>                   //  _postNum = undefined
    ```

* trVirginity
    ```
    <<trVirginity>>
        <<trVirginity *NPCdesc>>
        <<trVirginity *Boolean>>

        순결성을 번역한다.

        필수사항
        - NPCdesc: 순결을 빼앗아간 NPC의 상세
        - Boolean: 순결성 (true , false)
    ```

* trVore
    ```
    <<trVore>>
        <<trVore *voretype post "sep">>

        보어 타입을 번역한다.

        필수사항
        - voretype: 보어 타입

        선택사항
            - post: 번역결과의 뒤에 조사를 붙인다.
            - sep: 조사를 분리하여 저장한다.
        e.g.
        <<trVore "whale" "의">>             // "고래의"
    ```


* trWeather
    ```
    <<trWeather>>
        <<trWeather *weather post "sep">>

        날씨를 번역한다.

        필수사항
        - *weather: 날씨

        선택사항
            - post: 번역결과의 뒤에 조사를 붙인다.
            - sep: 조사를 분리하여 저장한다.

        e.g.
        <<trWeather "rain">>                //  "비"
    ```

===============================================
# EasyPost

위의 매크로들을 좀 더 직관적으로 쉽게 사용하기 위해 추가한 매크로입니다.

* 규칙
	- <<(명사 | 대명사)_(조사 | 어미) [옵션]>>
		예: <<He_nun>> - 그는, <<weather_ga "rain">> - 비가
	- 조사/어미 종류는 trinit_post 에 정의된 것에 준해 만들었음
		은/는 - _un/_nun
		이/가 - _i/_ga
		을/를 -  _ul/_rul
		과/와 -  _gwa/_wa
		이랑/랑 - _irang/_rang
		아/야 - _a/_ya
		이여/여 - _iyo/_yo
		이야/야 - _iya (_ya 는 아/야 에서 이미 사용하고 있어서 _iya로 통일시킴)
		으로/로 - _uro/_ro
		으로서/로서 - _uroseo/_roseo
		으로써/로써 - _urosseo/_rosseo
		으로부터/로부터 - _urobuter/_robuter
		이라/라 - _ira/_ra
		이라고/라고 - _irago/_rago
		이나/나 - _ina/_na
		이란/란 - _iran/_ran
		이든가/든가 - _idunga/_dunga
		이던가/던가 - _idonga/_donga
		이든지/든지 - _idunji/_dunji
		이던지/던지 - _idonji/_donji
		이야말로/야말로 - _iyamalro/_yamalro
		이구나/구나 - _iguna/_guna
		이다/다 - _ida/_da
		이지/지	- _iji/_ji
		의 - _yi
	- 붙는 조사/어미는 명사/대명사의 영어발음에 준해 붙임
		예: He_nun - 히_는, bottom_un - 바텀_은
	- 옷의 경우 $worn.(위치).name 식의 사용이 대부분으로 보여 이를 대체하는 매크로만 만들었음
		예: $worn.under_lower.name은 - <<worn_under_lower_name_un>>

* 예시
	원본: <<He>> ripped your $worn.under_lower.name and shove <<his>> <<penis>> into your <<pussy>>.
	기존번역: <<HePost "은">> 당신의 <<trClothes "under_lower" $worn.under_lower.name "name" "을">>_trResult 찢고 <<hisPost "의">> <<penisPost "을">> 당신의 <<pussyPost "으로">> 집어넣는다.
	EasyPost: <<He_nun>> 당신의 <<worn_under_lower_name_ul>> 찢고 <<his_yi>> <<penis_rul>> 당신의 <<pussy_ro>> 집어넣는다.
	출력: 그는 당신의 평범한 팬티를 찢고 그의 조그마한 자지를 당신의 보지로 집어넣는다.

* 현재 등록된 매크로
	- trClothes 계열
		<<worn_(착용부위)_name_(조사)>> 시리즈. 옵션으로 "sep" 인자를 받도록 함
		<<worn_(착용부위)_name>> 시리즈. 조사 없이 이름만 가져오게 함
	- beasttypePost 계열
		<<beasttype_(조사)>>, <<beastsplural_(조사)>>
	- bodyPost 계열
		<<breasts_(조사)>>, <<nipple_(조사)>>, <<nipples_(조사)>>, <<bottom_(조사)>>, <<pussy_(조사)>>, <<genitals_(조사)>>, <<clit_(조사)>>, <<penis_(조사)>>, <<glans_(조사)>>, <<testicles_(조사)>>
	- clothesPost 계열
		<<undertop_(조사)>>, <<groin_(조사)>>, <<crotch_(조사)>>, <<undies_(조사)>>, <<bottoms_(조사)>>, <<underbottoms_(조사)>>, <<top_(조사)>>, 
		<<topaside_(조사)>>, <<breastsaside_(조사)>>, <<outfit_(조사)>>, <<underoutfit_(조사)>>, <<lewdness_(조사)>>, <<nudity_(조사)>>
	- HePost 계열
		<<He_(조사)>>, <<he_(조사)>>, <<She_(조사)>>, <<she_(조사)>>, <<Him_(조사)>>, <<him_(조사)>>, <<Her_(조사)>>, <<her_(조사)>>, <<Himself_(조사)>>, 
		<<himself_(조사)>>, <<Herself_(조사)>>, <<herself_(조사)>>, <<bHe_(조사)>>, <<bhe_(조사)>>, <<bHim_(조사)>>, <<bhim_(조사)>>, <<pShe_(조사)>>, <<phim_(조사)>>, <<pshe_(조사)>>, <<ohe_(조사)>>, 
		<<farm_He_(조사)>>, <<farm_he_(조사)>>, <<nnpc_He_(조사)>>, <<nnpc_he_(조사)>>, <<nnpc_Him_(조사)>>, <<nnpc_him_(조사)>>, <<nnpc_himself_(조사)>>, 
		<<nnpc_wife_(조사)>>, <<nnpc_lass_(조사)>>, <<nnpc_gender_(조사)>>, <<nnpc_gendery_(조사)>>, <<nnpc_genitals_(조사)>>, <<nnpc_girlfriend_(조사)>>
		<<His_yi>>, <<his_yi>>, <<bhis_yi>>, <<pher_yi>>, <<hisselect_yi>>, <<his1_yi>> ~ <<his6_yi>>, <<farm_His_yi>>, <<farm_his_yi>>, <<nnpc_His_yi>>, <<nnpc_his_yi>> 는 소유격이라 _yi 조사만 지원함
	- otherPost 계열
		<<charles_(조사)>>, <<theowner_(조사)>>, <<someone_(조사)>>, <<spouse_(조사)>>, <<girl_(조사)>>, <<girls_(조사)>>, <<girlfriend_(조사)>>, <<wife_(조사)>>,
		<<victimgirl_(조사)>>, <<victimgirls_(조사)>>, <<lass_(조사)>>, <<gender_(조사)>>, <<bitch_(조사)>>, <<slut_(조사)>>, <<semen_(조사)>>, <<prostate_(조사)>>, 
		<<personpenis_(조사)>>, <<wallet_(조사)>>, <<sir_(조사)>>, <<monk_(조사)>>, <<monks_and_nuns_(조사)>>, <<priest_(조사)>>, <<priests_(조사)>>,
		<<farm_text_many_(조사)>>, <<farm_text_(조사)>>, <<Master_(조사)>>, <<master_(조사)>>, <<daylight_(조사)>>, <<ppackbrother_(조사)>>, <<pPackbrother_(조사)>>, 
		<<pheat_(조사)>>, <<wolf_cave_plural_(조사)>>, <<beast_jaws_text_(조사)>>, <<beast_Jaws_text_(조사)>>, <<beast_teeth_text_(조사)>>, <<beast_claws_text_(조사)>>,
		<<lefttool_(조사)>>, <<righttool_(조사)>>
		<<someones_yi>>,  <<their_yi>> 는 소유격이라 _yi 조사만 지원함
	- personPost 계열
		<<person_(조사)>>, <<personsimple_(조사)>>, <<combatperson_(조사)>>, <<people_(조사)>>, <<peopley_(조사)>>, <<persony_(조사)>>
		<<persons_yi>> 는 소유격이라 _yi 조사만 지원함
	- putpost 계열
		<<putpost_(조사)>>
	- tentacle 계열
		<<tentacle_(조사)>>
	- 기타
		<<beastdesc_(조사)>>, <<bodypart_(조사)>>, <<bodywriting_(조사)>>, <<breastsdesc_(조사)>>, <<namedNPC_(조사)>>, <<namedNPC_name_(조사)>>, 
		<<namedNPC_title_(조사)>>, <<NPCdesc_(조사)>>, <<NPCname_(조사)>>, <<penisdesc_(조사)>>, <<plants_(조사)>>, <<plants_plural_(조사)>>, 
		<<vore_(조사)>>, <<weather_(조사)>>