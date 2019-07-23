/**
 * 1. 第三章 - 作用域和闭包:
 *
 * 1. 执行上下文
 * 2. 变量提升
 */

/**
 * 1. 执行上下文:
 *
 * 1. 执行上下文:
 *    1. javascript 是一个单线程语言, 这意味着在浏览器中同时只能做一件事情 。 当 javascript 解释器初始执行代码, 它首先默认进入全局上下文 。 每次调用一个函数将会创建一个新的执行上下文 。
 *    2. 每次新创建的一个执行上下文会被添加到 作用域链 的顶部, 有时也称为执行或调用栈 。 浏览器总是运行位于作用域链顶部的当前执行上下文 。 一旦完成, 当前执行上下文将从栈顶被移除, 并且将控制权归还给之前的执行上下文 。
 *    3. 执行上下文 一种形式: 可以通过 *先使用后定义* 这样的方式来验证
 *        1. 范围: (执行上下文针对的对象)一段 <script>标签 或者 一个函数
 *        2. 全局上下文(<script>标签): 变量定义, 函数声明 。
 *            1. 一段代码在执行之前(并不是在定义之前), 它会先摘出里面的 变量定义 和 函数声明, 用来占位 。
 *        3. 函数上下文(一个函数): 变量定义, 函数声明, this, arguments(参数)
 *            1. 在代码执行之前(并不是在定义之前), 在函数里面也是先把函数里面的 变量定义, 函数声明, this, argument 先拿出来, 用来占位 。
 *        4. 注意: 函数声明 和 函数表达式 的区别。
 *            1. 函数声明: function 函数名; 以 function 开头的叫做函数声明 。
 *            2. 函数表达式: 定义一个变量赋值为function 。
 *
 *
 * 3. 代码实例解析:
 *    1. 在这里代码执行之前会把 var a / function fn 先拿出来进行一个占位
 *    2. 占位的时候我们不能让它空着; 占位的时候这个 var a 因为我们还没有开始执行, 所以它不是 100 , 它会默认赋值成 undefined (因为 var a 没有值, 所以是 undefined) 。
 *    3. 我们先去定义一个 var a, 再去 console , 再把 a 赋值成 100 。
 *
 *
 * 3. 这一点就我们所说的*变量提升* 。
 *    1. 函数声明 / 变量声明 都将被提升到函数的最顶部 。
 *    2. 函数声明 / 变量声明 总是会被解释器悄悄地被"提升"到方法的最顶部 。
 *    3. 只有声明的变量会提升, 初始化的不会 。
 */

// 示例 一: 这里针对的是 script 标签
console.log('执行上下文: ', a) // undefined
var a = 100;

// 示例 二:
fn('zhangsan'); // zhangsan 20
function fn(name) {
  console.log('this: ', this);
  console.log('arguments: ', arguments);
  // 函数上下文
  age = 20;
  console.log('执行上下文: ', name, age)
  var age
}

// 示例 三: 这里是函数表达式; fn1() 执行会报错 。
fn1()
var fn1 = function() {
  console.log(1111111111)
}

// 示例 四:
var sayHello = 'Hello'
function person() {
  var first = 'First';
  var last = 'Last'
  function firstNamr() {
    console.log('firstNamr: ', sayHello) // Hello
    return first
  }
  function lastNamr() {
    console.log('lastNamr', sayHello) // Hello
    return last
  }
  console.log( sayHello + firstNamr() + lastNamr() )
}
person() // HelloFirstLast

// 示例 五:
person() // undefinedFirstLast
function person() {
  var first = 'First';
  var last = 'Last'
  function firstNamr() {
    console.log('firstNamr: ', sayHello) // undefined
    return first
  }
  function lastNamr() {
    console.log('lastNamr', sayHello) // undefined
    return last
  }
  console.log( sayHello + firstNamr() + lastNamr() )
}
// person() // undefinedFirstLast
var sayHello = 'Hello'