/* Korean translation information */

window.koTrans = {
	"version": "0.1.2023.1201",
	
	"info": 
		'한국어 번역판<span class="blue"><<link "(?)">><<run koTrans.legal()>><</link>></span><br>'+
		'v<<= koTrans.version>>'+
		'<br><br>',
	"legal": function() 
		{ 
			Dialog.setup("번역본 저작권 정보"); 
			Dialog.wiki(
				'원본의 [["CC-BY-NC-SA 라이센스"|"https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.ko"]]에 의거 동일조건으로 아카라이브 텍스트게임 채널([["https://arca.live/b/textgame"]])에서 번역중입니다.'
			); 
			Dialog.open(); 
		}
}

l10nStrings.errorTitle = StartConfig.version + "-" + koTrans.version + " Error";
l10nStrings.restartTitle = "게임 재시작";
l10nStrings.restartPrompt = "정말 재시작하시겠습니까? 저장되지 않은 진행상황은 사라지게 됩니다.";
l10nStrings.cancel = "취소";
l10nStrings.ok = "확인";
