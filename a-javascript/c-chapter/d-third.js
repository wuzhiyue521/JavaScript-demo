/**
 * 1. 第三章 - 作用域和闭包:
 *
 * 1. 作用域
 *    1. JS 无块级作用域
 *    2. 全局作用域 和 函数作用域
 * 2. 作用域链
 *    1. 自由变量
 * 3. es6 中是有块级作用域的
 */

/**
 * 1. 作用域:
 * 
 * 1. js 没有块级作用域
 * 2. 只有函数和全局作用域
 */


/**
 * 1. JS 无块级作用域
 *    1. 如果 js 有块级作用域, 那么这里打印的结果应该是 undefind 。
 *    2. 我们尽量不要在 块里面 {} 声明变量, 这样会造成我们的代码不易读 。
 *    3. 在 {} 里面是没有办法约束变量的, 所以就是没有块级作用域 。
 *    4. 下面的两种写法是完全一样的。
 */
// var name = 'zhangsan: 无块级作用域'
if (true) {
  var name = 'zhangsan: 无块级作用域'
}
console.log(name);



/**
 * 2. 全局作用域和 函数
 *
 * 1. 全局作用域
 *   1. 全局作用域非常的不安全 (容易被覆盖).
 *
 * 2. 函数作用域
 *   1. 自由变量: 全局变量在局部使用时可以称作 自由变量 (函数使用的变量在父级上面)
 *   2. 函数里面定义的变量在外面时获取不到的 。
 *   3. 如果是在函数中定义变量, 在函数中获取这个变量的时候, 它就会在函数这个范围内获取 。
 *   4. 函数中定义的变量在外面是修改不了的, 函数中的变量是与外界隔绝的 。
 *   5. 如 JQ / Zepto 这些第三方库, 它们如何保证自己的变量不会被别人污染, 就是它们把所有的变量都定义在一个大的函数里面 。
 */
var a = 100;
function fn() {
  // var a = 200;
  // console.log('函数内部 - function - a: ', a); // 200
  var b = 'bbb'
  // 全局变量在局部使用时可以称作 自由变量
  console.log('函数内部 - function - a: ', a); // 100
  console.log('函数内部: function  - b: ', b);
}
console.log('函数内部: function  - b: ', b); // 报错
console.log('全局作用域 - global - a: ', a); // 100
var b = 500; // 这个全局变量无法影响函数内部的变量值。
fn(); // bbb


/**
 * 3. 自由变量:
 *
 * 1. 作用域链 我们需要了解 '自由变量'
 *    1. 当前作用域没有定义的变量, 叫做 *自由变量*
 *    2. 函数体里面我们可以定义一个作用域, 在这里面我们并没有规定 a 是谁, 单是就是要使用 a, 我们不能让它报错, 这个时候就需要去它的父级去找这个 a 。
 *    3. 注意: 函数的父级作用域是什么: 是函数定义的时候的作用域, 不是函数执行时的作用域 。
 */
var c = '可变为 自由变量';
function fn1() {
  var b = 300;
  // 当前作用域没有定义的变量， 即 "自由变量"
  console.log('function-1: ', a); // 100
  console.log('自由变量: ', c); // 可变为 自由变量
}
fn1();

/**
 * 4. 作用域链
 *    1. 作用域链 就是一个自由变量, 一直不断的向父级作用域去找, 形成的一个链式结构 。
 *
 * 1. d / b 是自由变量, 因为 Fn3 这个函数没有定义这两个变量, 没有, 所以我们就要去父级作用域去找 。
 * 2. 它是在 Fn2 这个函数中定义的, 他就去 Fn2 这个函数中去找, 没有 d ,那怎么办？ 需要再向上去找也就是向 Fn2 这个函数的父级作用域去找, 在这里找到了 d, 然后就 OK 了 。
 * 3. 使用 b 的时候, 我们也要去他的父级作用域去找, 在 Fn2 函数这个父级作用域中找到了, 然后就 OK 了 。
 */
var d = '测试自由变量';
function Fn2() {
  var b = 400;
  function Fn3() {
    var c = 500;
    console.log('自由变量(全局变量): ', d); // 测试自由变量   d 自由变量
    console.log('自由变量(父级变量): ', b); // 400     b 自由变量
    console.log(':::::::(自己内部的变量)', c); // 500
  }
  Fn3();
}
Fn2();



/**
 * 1. 无块级作用域在 ES6 中的补充:
 *    1. es6 中是有块级作用域的
 *
 * 2. es5 中没有作用域, 一旦牵扯到 es6 语法， es6 是有块级作用域的, 但前提是符合 es6 语法规范, 使用 let 或者 const 去定义变量。
 */
/**
 * 1. 使用 es5 的语法证明 es5 确实是没有块级作用域的。
 */
for(var i = 0; i < 10; i++) {}
console.log('es5 的 for循环中的 i: ', i); // 10

// es5的语法声明的变量
if (true) {
  var name1 = '100'
}
console.log(name1); // 100
/**
 * 1. 使用 es6 的语法证明 es6 是有块级作用域的。
 */
for (let j = 0; j < 10; j++) {}
console.log('es6 的 for 循环的 j: ', j) // 打印结果为 undefind

if (true) {
  const name2 = 'es6声明的变量'
}
console.log(name2); // 打印结果为 undefind