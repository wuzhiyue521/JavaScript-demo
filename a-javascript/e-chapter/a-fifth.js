/**
 * 1. 第五章 - JS-Web-API
 *
 * 1. 常说的 js (浏览器执行的 js)包含两个部分
 */

/**
 * 1. js 基础: 基于 ECMA 262 标准。
 *
 * 1. 表面看起来不能用于工作中开发代码.
 * 2. 内置函数: Object , Array , Boolen , String 。
 * 3. 内置对象: Math , JSON
 * 4. 我们在链接网页连一句 hellow word 都不能实现。
 */

/**
 * 2. JS-Web-API: 即 W3C 标准 (关于浏览器)。
 *
 * 1. DOM 操作 (网页内容的 - 增 / 删 / 改)。
 * 2. BOM 操作 (浏览器的特性: 当前电脑屏幕尺寸的 - 宽高, 获取当前地址栏的地址)。
 * 3. 事件绑定 (click / mouseup / keyup ... )。
 * 4. ajax 请求 (包括 http 协议)。
 * 5. 存储
 */

/**
 * 1. 页面弹出框: window.alert(123) , 浏览器需要做:
 *    1. 定义一个 window 全局变量, 对象类型 。
 *    2. 给它定义一个 alert 属性, 属性值是一个函数 。
 *    3. 然后我们就可以执行 window.alert(123) 。
 *
 * 2. 获取元素 document.getElementById('btn1') , 浏览器需要:
 *    1. 浏览器需要定义一个 document 全局变量, 对象类型 。
 *    2. 给 document 添加一个 getElementById 属性, 属性值是一个函数 。
 *
 * 3. 浏览器作为 js 的产出方和执行方, 也就是浏览器作为 js 的执行环境, 浏览器可以为 js 注入很多东西 。
 *
 * 4. 但是 W3C 没有规定任何 js 基础相关的东西 。
 *
 * 5. W3C 标准, 不管什么变量类型, 原型, 作用域, 异步 语法和相关原理 。
 *
 * 6. W3C 标准, 只管定义用于浏览器中 js 操作页面的 api 和全局变量 。
 */
window.alert(123);
document.getElementById('btn1');

/**
 * 4. 全面考虑 js 内置的全局函数和对象有哪些?
 *
 * 1. js 基础: Object , Array , Boolen , String , Math , JSON 等。
 * 2. W3C 标准中: window , document
 * 3. 所有未定义的全局变量 (浏览器的): navigator.userAgent (navigator 获取浏览器特性) 等
 *
 */

/**
 * 5. 常说的 js (浏览器执行的 js)包含两个部分:
 *    1. js 基础知识: ECMA262 标准。
 *    2. JS-Web-API: W3C 标准。
 *
 */