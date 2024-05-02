/* Korean translation information */
window.koTrans = {
	"version": "0.1.2024.0502.1",
	
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

/* l10nStrings */
l10nStrings.errorTitle = StartConfig.version + "-" + koTrans.version + " Error";
l10nStrings.restartTitle = "게임 재시작";
l10nStrings.restartPrompt = "정말 재시작하시겠습니까? 저장되지 않은 진행상황은 사라지게 됩니다.";
l10nStrings.cancel = "취소";
l10nStrings.ok = "확인";



l10nStrings.savesHeaderSaveLoad = "세이브/로드";
l10nStrings.savesHeaderIDName = "ID/이름";
l10nStrings.savesHeaderDetails = "상세";
l10nStrings.savesTitle = "세이브";
l10nStrings.savesDisallowed = "이 경로에서는 세이브가 금지되어 있습니다.";
l10nStrings.savesLabelAuto = "자동저장";
l10nStrings.savesLabelDelete = "삭제";
// l10nStrings.savesLabelExport = "Save to Disk…";
// l10nStrings.savesLabelImport = "Load from Disk…";
l10nStrings.savesLabelLoad = "로드";
l10nStrings.savesLabelClear = "모든 세이브를 삭제";
l10nStrings.savesLabelSave = "저장";
l10nStrings.savesLabelSlot = "슬롯";
// l10nStrings.savesUnavailable = "No save slots found…";
// l10nStrings.savesUnknownDate = "unknown";
l10nStrings.savesDescTitle = "제목: ";
l10nStrings.savesDescName = "세이브 이름: ";
l10nStrings.savesDescId = "세이브 Id: ";
l10nStrings.savesDescDate = ", 날짜: ";
l10nStrings.savesPagerJump = " 가장 최근의 수동 저장으로 이동 ";
l10nStrings.savesPagerPage = "페이지: ";
l10nStrings.savesPagerSavesPerPage = " 페이지당 세이브 수: ";
l10nStrings.savesOptionsConfirmOn = " 다음의 경우 확인 필요: ";
l10nStrings.savesOptionsUseLegacy = " 기존의 세이브 저장 공간 사용: ";
l10nStrings.savesWarningSaveOnSlot = "에 저장하시겠습니까?";
l10nStrings.savesWarningOverwriteSlot = "에 덮어쓰시겠습니까?";
l10nStrings.savesWarningOverwriteID = "세이브 ID가 일치하지 않습니다. 덮어쓰시겠습니까?";
l10nStrings.savesWarningDeleteInSlot = " 삭제하시겠습니까?";
l10nStrings.savesWarningLoad = "에서 로드하시겠습니까?";
l10nStrings.savesWarningDeleteAll = "주의 - 정말로 모든 세이브를 삭제하시겠습니까?";

l10nStrings.savesDisallowedReplay = "리플레이 씬 뷰어가 현재 작동중이므로, 세이브를 할 수 없습니다.";
l10nStrings.savesExportReminder = "여기에서의 세이브는 당신의 브라우저 캐시가 지워지면 사라집니다. 세이브가 사라지는 상황을 방지하기 위해 내보내기 기능을 사용하시기를 권장합니다.";

// l10nStrings.identity = "game";
// l10nStrings.savesIncapable = "{_warningIntroLacking} the capabilities required to support saves, so saves have been disabled for this session.";
// l10nStrings._warningIntroLacking = "Your browser either lacks or has disabled";
// l10nStrings._warningOutroDegraded = ", so this {identity} is running in a degraded mode. You may be able to continue, however, some parts may not work properly.";

// l10nStrings.aborting = "Aborting";
// l10nStrings.close = "Close";
// l10nStrings.errorToggle = "Toggle the error view";
// l10nStrings.errorNonexistentPassage = "the passage "{passage}" does not exist";
// l10nStrings.errorSaveDiskLoadFailed = "failed to load save file from disk";
// l10nStrings.errorSaveMissingData = "save is missing required data. Either the loaded file is not a save or the save has become corrupted";
// l10nStrings.errorSaveIdMismatch = "save is from the wrong {identity}";
// l10nStrings.warningNoWebStorage = "{_warningIntroLacking} the Web Storage API{_warningOutroDegraded}";
// l10nStrings.warningDegraded = "{_warningIntroLacking} some of the capabilities required by this {identity}{_warningOutroDegraded}";
// l10nStrings.debugBarToggle = "Toggle the debug bar";
// l10nStrings.debugBarNoWatches = "— no watches set —";
// l10nStrings.debugBarAddWatch = "Add watch";
// l10nStrings.debugBarDeleteWatch = "Delete watch";
// l10nStrings.debugBarWatchAll = "Watch all";
// l10nStrings.debugBarWatchNone = "Delete all";
// l10nStrings.debugBarLabelAdd = "Add";
// l10nStrings.debugBarLabelWatch = "Watch";
// l10nStrings.debugBarLabelTurn = "Turn";
// l10nStrings.debugBarLabelViews = "Views";
// l10nStrings.debugBarViewsToggle = "Toggle the debug views";
// l10nStrings.debugBarWatchToggle = "Toggle the watch panel";
// l10nStrings.uiBarToggle = "Toggle the UI bar";
// l10nStrings.uiBarBackward = "Go backward within the {identity} history";
// l10nStrings.uiBarForward = "Go forward within the {identity} history";
// l10nStrings.uiBarJumpto = "Jump to a specific point within the {identity} history";
// l10nStrings.jumptoTitle = "Jump To";
// l10nStrings.jumptoTurn = "Turn";
// l10nStrings.jumptoUnavailable = "No jump points currently available…";
// l10nStrings.settingsTitle = "Settings";
// l10nStrings.settingsOff = "Off";
// l10nStrings.settingsOn = "On";
// l10nStrings.settingsReset = "Reset to Defaults";
// l10nStrings.shareTitle = "Share";
// l10nStrings.alertTitle = "Alert";
// l10nStrings.autoloadTitle = "Autoload";
// l10nStrings.autoloadCancel = "Go to start";
// l10nStrings.autoloadOk = "Load autosave";
// l10nStrings.autoloadPrompt = "An autosave exists. Load it now or go to the start?";
// l10nStrings.macroBackText = "Back";
// l10nStrings.macroReturnText = "Return";
