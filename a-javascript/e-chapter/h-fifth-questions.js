/**
 * 1. 第五章 - JS-Web-API: 面试题解答
 */

/**
 * 2. 面试题目:
 *
 * 1. 如何检测浏览器的类型 (还有系统类型, 主要是针对移动端)？
 * 2. 解析 url 的各个部分
 */

/**
 * 1. 如何检测浏览器的类型 (还有系统类型, 主要是针对移动端)？
 */
// PC端:
var ua = navigator.userAgent.toLowerCase();
console.log(ua)
if (ua.match(/webkit/i)) {
  alert("chrome");
} else if (ua.match(/firefox/i)) {
  alert("firefox");
} else if (ua.match(/opera/i)) {
  alert("opera");
} else if (ua.match("trident")) {
  alert("IE");
}

function myBrowser() {
  var userAgent = navigator.userAgent; //取得浏览器的 userAgent 字符串
  var isOpera = userAgent.indexOf("Opera") > -1; //判断是否 Opera 浏览器
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
  var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
  var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
  var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否Chrome浏览器
  if (isIE) {
      var IE5 = IE55 = IE6 = IE7 = IE8 = false;
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      IE55 = fIEVersion == 5.5;
      IE6 = fIEVersion == 6.0;
      IE7 = fIEVersion == 7.0;
      IE8 = fIEVersion == 8.0;
      if (IE55) {
          return "IE55";
      }
      if (IE6) {
          return "IE6";
      }
      if (IE7) {
          return "IE7";
      }
      if (IE8) {
          return "IE8";
      }
  }//isIE end
  if (isFF) {
      return "FF";
  }
  if (isOpera) {
      return "Opera";
  }
  if (isChrome) {
      return "Chrome";
  }
}//myBrowser() end

// 移动端:
var ua=navigator.userAgent.toLowerCase();
var neihe=document.getElementById('neihe');
if (ua.match(/qq/i)) {
  neihe.innerHTML="QQ";
} else if (ua.match(/microMessenger/i)) {
  neihe.innerHTML="微信";
} else if (ua.match(/oppo/i)) {
  neihe.innerHTML="OPPO";
} else if (ua.match(/iphone/i)||ua.match(/ipad/i)) {
  neihe.innerHTML="safari";
} else if(ua.match(/opera/i)) {
  neihe.innerHTML="opera";
}

/**
 * 2. 解析 url 的各个部分
 */