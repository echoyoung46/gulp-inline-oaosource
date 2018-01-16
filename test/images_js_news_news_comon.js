function getUrlHost(sURL)
{
	var hostname = (sURL.indexOf("://")==-1?
					(/^([^/:\?#]*)(?::|\/|$|\?|#)/.test(sURL)?RegExp["$1"]:""):
					(/:\/\/([^/:\?#]*)(?::|\/|$|\?|#)/.test(sURL)?RegExp["$1"]:""));
	return hostname;
}

function getUrlPathName(sURL)
{
	var pathname = (sURL.indexOf("://")==-1?
					(/(\/[^#\?]*)/.test(sURL)?RegExp["$1"]:""):
					(/:\/\/.*?(\/[^\?#]*)/.test(sURL)?RegExp["$1"]:""));
	return pathname;
}

var pathArr = getUrlPathName(self.location.href).split("/");
//ATM自定义上报示例
var ATM_Config={
	"sServiceType":self.location.host.split(".")[0],
	"sChannel":pathArr[pathArr.length-4],
	"type":"news"
}
/**loadScript("http://ossweb-img.qq.com/images/ams/atm/reporting.js?r="+new Date().getTime(),function(loaded){
	if(!loaded)
	{
		return;
	}
});**/
var newsUrlFilterXSS=function(str){
		   str=str.replace("<","&lt;");
		   str=str.replace("<","&gt;");
		   str=str.replace("'","&apos;");
		   str=str.replace("\"","&&quot;");
		   return str;
		}
document.write('<script type="text/javascript" src="//ossweb-img.qq.com/images/ams/atm/reporting.js"></script>');

//广告
//InitAmsRec(3, newsUrlFilterXSS(pathArr[pathArr.length-1].split(".")[0]), newsUrlFilterXSS(getUrlHost(self.location.href).split(".")[0]));
/*  |xGv00|cc9e632e08eff6617019fbe0de347e4c */