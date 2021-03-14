window.ctf = {
    "defficulty" : 20,
    "accept" : false,
    "key" : 'e',
    "answer" : ""
}

window.certification_resetQuestion = function () {
	var temp = "";
    var char = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    while (temp.search(ctf.key) == -1){
        temp = "";
        for (var i=0; i < ctf.defficulty; i++){
            temp += char[Math.floor(Math.random()*char.length)];
        }
    }
    ctf.answer = temp.substring(0,temp.search(ctf.key)+1)+"era"
    return temp;
}

window.certification_check = function () {
    if (ctf.accept && State.variables.certification.accept){            /*  && (State.variables.certification.version == Customconfig.version) && State.variables.certification.stack < 1*/
        return true;
    } else {
        return false;
    }
}

window.certification_input = function () {
	var input = document.getElementById("certificationInput");
	if (input.value == ctf.answer){
        /*if (JSON.parse(localStorage.certification).stack < 1) {*/     /*JSON.parse(localStorage.certification).stack < 1*/
            ctf.accept = true;
            State.variables.certification.accept = true;
            State.variables.certification.version = Customconfig.version;
            localStorage.certification = JSON.stringify(State.variables.certification);
        /*} else {
            State.variables.certification = JSON.parse(localStorage.certification);
            ctf.accept = false;
            State.variables.certification.accept = false;
            State.variables.certification.version = Customconfig.version;
            State.variables.certification.stack += 1;
            localStorage.certification = JSON.stringify(State.variables.certification);
        }*/
    } else {
        ctf.accept = false;
        State.variables.certification.accept = false;
        State.variables.certification.version = Customconfig.version;
        State.variables.certification.stack += 1;
        localStorage.certification = JSON.stringify(State.variables.certification);
    }
}

Macro.add('certification_update', {
	handler: function () {
        if (!State.variables.certification) {
            if (localStorage.certification && localStorage.certification != "undefined"){
                State.variables.certification = JSON.parse(localStorage.certification);
            } else {
                State.variables.certification = {
                    "accept" : false,
                    "version" : Customconfig.version,
                    "stack" : 0
                }
                localStorage.certification = JSON.stringify(State.variables.certification);
            }
        }

        if (localStorage.certification && localStorage.certification != "undefined"){
            State.variables.certification = JSON.parse(localStorage.certification);
        }
        
        if (State.variables.certification.accept){          /* && (State.variables.certification.version == Customconfig.version) && State.variables.certification.stack < 1*/
            ctf.accept = true;
        } else {
            ctf.accept = false;
            /*
            State.variables.certification.accept = false;
            if (State.variables.certification.version != Customconfig.version) {
                State.variables.certification.stack = 0;
                State.variables.certification.version = Customconfig.version;
                localStorage.certification = JSON.stringify(State.variables.certification);
            }*/
        }
        

        /*편의성 업데이트에 따른 빠진 기능 추가*/
        if (State.variables.certification.version != Customconfig.version) {
            State.variables.certification.stack = 0;
            State.variables.certification.version = Customconfig.version;
            localStorage.certification = JSON.stringify(State.variables.certification);
        }
	}
});