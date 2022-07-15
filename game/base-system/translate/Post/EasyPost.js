/* EasyPost 리팩토링 */

const trEasyPostsList = {
	'un': "은",
	'nun': "은",
	'i': "이",
	'ga': "이",
	'ul': "을",
	'rul': "을",
	'gwa': "과",
	'wa': "과",
	'irang': "이랑",
	'rang': "이랑",
	'a': "아",
	'ya': "아",
	'iyo': "이여",
	'yo': "이여",
	'iya': "이야",
	'uro': "으로",
	'ro': "으로",
	'uroseo': "으로서",
	'roseo': "으로서",
	'urosseo': "으로써",
	'rosseo': "으로써",
	'urobuter': "으로부터",
	'robuter': "으로부터",
	'ira': "이라",
	'ra': "이라",
	'irago': "이라고",
	'rago': "이라고",
	'ina': "이나",
	'na': "이나",
	'iran': "이란",
	'ran': "이란",
	'idunga': "이든가",
	'dunga': "이든가",
	'idonga': "이던가",
	'donga': "이던가",
	'idunji': "이든지",
	'dunji': "이든지",
	'idonji': "이던지",
	'donji': "이던지",
	'iyamalro': "이야말로",
	'yamalro': "이야말로",
	'iguna': "이구나",
	'guna': "이구나",
	'ida': "이다",
	'da': "이다",
	'iji': "이지",
	'ji': "이지",
	'yi': "의"
};

/* ParseEasyPostParam : EasyPost 의 인자를 분류해 돌려준다 */

function ParseEasyPostParam()
{
	let post, sep, param=[];
	for (let i=0; i<T.args.length; i++)
	{
		if (i == 0 && typeof(T.args[0]) === "string")
		{
			if (T.args[0].charCodeAt() >= 0x0AC00)
				post = T.args[i];
			else
				post = trEasyPostsList[T.args[0]];
			
			if (post === undefined)
				param.push(T.args[0]);
		}
		else
			param.push(T.args[i]);
	}
	
	if (param.length > 0)
	{
		let i=param.length-1;
		if (typeof(param[i]) === "string" && param[i] == "sep")
			sep = param.pop();
	}
	return [post, sep, param];
}

/* EasyPost : EasyPost 의 기본 몸체
	사용법 : <<widget "EasyPost매크로명">><<print EasyPost("실제매크로명"[, _trResult표시여부])>><</widget>>
*/
window.EasyPost = function(macro, isprint)
{
	let [post, sep, param] = ParseEasyPostParam();
	let wikistr = "<<" + macro;
	for (let i = 0; i < param.length; i++)
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
	wikistr += ">>";
	if (isprint)
		wikistr += "<<print _trResult>>";
	return wikistr;
};