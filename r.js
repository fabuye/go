var p = navigator.platform;
var u = navigator.userAgent;
var system = {
    win: false,
    mac: false,
    iPhone: false,
    xll: false,
    ipad: false,
    Android: false,
    Ios: false
};
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.iPhone = p.indexOf('iPhone') == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
system.Android = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
system.ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
//if (system.win || system.xll ) {
//    window.location.href = "http://baidu.com/";
//} 

var u1a = "http://cddac.nxxstc.cn:3555/"; 
var u2h = "https://dizhi365.github.io/gan/hxc.html?";


function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
    // 
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}
