/**
 * 1. 第五章 - JS-Web-API: BOM 操作
 *
 * 1. navigator -> 浏览器
 * 2. screen -> 屏幕(屏幕的宽高)
 * 3. location -> 地址(获取地址栏的一些信息)
 * 4. history -> 历史(前进后退)
 */

/**
 * 1. BOM 操作: Browser Object Model 简称， 浏览器对象模型 。
 *
 * 2. 我们在页面元素加载之外, 对浏览器的一些信息我们需要拿到 。
 */

/**
 * 2. 面试题目:
 *
 * 1. 如何检测浏览器的类型 (还有系统类型, 主要是针对移动端)？
 * 2. 解析 url 的各个部分
 */

/**
 * 3. 知识点:
 *
 * 1. navigator -> 浏览器
 * 2. screen -> 屏幕(屏幕的宽高)
 * 3. location -> 地址(获取地址栏的一些信息)
 * 4. history -> 历史(前进后退)
 */

/**
 * 1. navigator:
 */
var ua = navigator.userAgent;
var isChrome = ua.indexOf('Chrome');
console.log('浏览器类型:  ', ua);
console.log('浏览器类型 indexOf :  ', isChrome);

/**
 * 2. screen:
 */
console.log('浏览器屏幕尺寸 1: ', screen.width); // 1680 (不变)
console.log('浏览器屏幕尺寸 1: ', screen.height); // 1050 (不变)

console.log('浏览器屏幕尺寸2: ', window.screen.width); // 1680 (不变)
console.log('浏览器屏幕尺寸2: ', window.screen.height); // 1050 (不变)

console.log('浏览器屏幕尺寸3: ', document.body.clientWidth); // 316<可变> 网页可见区域宽(body), 是对象看到的宽度 (不含边线,即 border)
console.log('浏览器屏幕尺寸3: ', document.body.clientHeight); // 394<可变> 网页可见区域高(body),
console.log('浏览器屏幕尺寸4: ', document.body.offsetWidth); // 316<可变> 网页可见区域宽(body); 是指对象自身的宽度，整型，单位像素（含边线，如滚动条的占用的宽，值会随着内容的输入而不断改变）。
console.log('浏览器屏幕尺寸4: ', document.body.offsetHeight); // 394<可变> 网页可见区域宽(body)，包括border、margin等

console.log('浏览器屏幕尺寸5: ', document.body.scrollWidth); // 316<可变> 网页正文全文宽, 包括有滚动条时的未见区域; 是对象实际内容的宽度（若无padding，那就是边框之间距离，如有padding，就是左padding和右padding之间距离）。
console.log('浏览器屏幕尺寸5: ', document.body.scrollHeight); // 394<可变> 网页正文全文高, 包括有滚动条时的未见区域

console.log('浏览器屏幕尺寸6: ', document.body.scrollTop); // 0<可变> 网页被卷去的 Top(滚动条)
console.log('浏览器屏幕尺寸6: ', document.body.scrollLeft); // 0<可变> 网页被卷去的 Left(滚动条)

console.log('浏览器屏幕尺寸7: ', window.screenTop); // 浏览器距离屏幕 Top
console.log('浏览器屏幕尺寸7: ', window.screenLeft); // 浏览器距离屏幕 Left

/**
 * 3. location:
 */
console.log('location:  ', location.href); // 我们通过 location.href 来改变网站的地址。 location.href = http://localhost:8080/a-fifth.html?from=phpkecheng&from1=phpkecheng1#mid=100
console.log('location 协议 :  ', location.protocol); // 协议: http / https
console.log('location 域名 :  ', location.host); // 域名: localhost:8080
console.log('location 路径 :  ', location.pathname); // 路径: /a-fifth.html
console.log('location 中问号后面的参数 :  ', location.search); // url 中问号后面的参数: ?from=phpkecheng&from1=phpkecheng1
console.log('location # 后面的内容 :  ', location.hash); // url 中 # 后面的内容: #mid=100

/**
 * 4. history
 */
// history.back(); // 返回
// history.forward(); // 前进
