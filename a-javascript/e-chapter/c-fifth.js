/**
 * 1. 第五章 - JS-Web-API: DOM 节点操作
 *
 * 1. 获取 DOM 节点
 * 2. prototype
 * 3. Attribute
 */

/**
 * 1. DOM的节点操作 和 DOM的结构操作 就体现了 js 可识别的性质 。
 * 1. 拿 js 写一段代码, 能够生效, 这就说明它是能面向 js 开发的, 即 js 可操作的 。
 */

/**
 * 2. DOM 节点操作:
 *
 * 1. 获取 DOM 节点
 * 2. prototype
 * 3. Attribute
 */

/**
 * 1. 获取 DOM 节点
 *
 * 1. getElementById          通过 id 查找 HTML 元素
 * 2. getElementsByTagName    通过标签名查找 HTML 元素
 * 3. getElementsByClassName  通过类名查找 HTML 元素
 * 4. querySelectorAll        通过 CSS 选择器查找 HTML 元素
 */
var div1 = document.getElementById('div1'); // 元素
var divList = document.getElementsByTagName('div'); // 集合
console.log('getElementById - divList: :', divList.length);
console.log('getElementsByTagName:     :', divList[0]);

var contList = document.getElementsByClassName('container'); // 集合
var pList = document.querySelectorAll('p'); // 集合
console.log('getElementsByClassName:   :', contList);
console.log('querySelectorAll:         :', pList);

/**
 * 2. protertype: JS 对象的一个属性叫做 prototype 。
 *    1. 我们将 p 元素的第一个节点取出来 p1, 这个时候 p1 是个什么东西? 我们会认为 p1 是一个 dom 节点, p1 本质上是一个 JS 对象 。
 *    2. js可操作 (DOM 的节点操作和 DOM 的结构操作就体现了 js 可识别的性质) 这里 p1 是获取的 js 对象。
 *    3. js 对象有一个特点 (在 原型 的时候就说过), 它的属性是可扩展的, 那我们的浏览器就可以对它进行扩展属性 。
 *    4. 下面的这些属性都是浏览器塞入的, 浏览器就是这样规定的, 为什么浏览器这样规定, 是因为 W3C 这样规定的, 浏览器必须按照这个规则来。
 */
var p1 = pList[0];

console.log('获取样式:              :::', p1.style.width);
p1.style.width = '200px';

p1.className = 'p1'
console.log('获取指定元素的 class 类名: ', p1.className);

console.log('获取 nodeName  :       :::', p1.nodeName); // nodeName 是 p1 的一个 prototype 。
console.log('获取 nodeType  :       :::', p1.nodeType);

var obj = { // x 是 obj 的一个 protertype 。
  x: 100,
  y: 200
}


/**
 * 3. Attribute: 并不是 js 的属性, 而是文档标签内容, 即元素标签自带的 herf, src, style, class, 自定以 ... 的属性。
 *    1. getAttribute 方法也是 p1 的一个属性.
 */
var p2 = pList[1];

p2.getAttribute('data-name')
console.log("p2.getAttribute('data-name')  :::", p2.getAttribute('data-name'));

p2.setAttribute('data-name', 'abc'); // setAttribute 对相应的值进行设置
console.log("p2.getAttribute('data-name')  :::", p2.getAttribute('data-name'));

p2.getAttribute('style');
p2.setAttribute('style', 'font-size:50px;');
console.log(p1.getAttribute('style'));


