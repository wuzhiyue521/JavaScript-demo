/**
 * 1. 第四章 - 异步和单线程: 单线程
 *
 * 1. 单线程
 * 2. setTimeout / ajax / 事件 来说明单线程和异步
 * 3. 单线程和异步的关系
 */


/**
 * 1. 单线程:
 *    1. 单线程一次只能干一件事 。
 *
 * 2. 单线程和异步的关系:
 *    1. js 是一个单线程的语言, 单线程就是我一次只能干一件事, 如果想要让其同时执行两件事情或者多件事情, 那就需要一些事件在一边等待, 就需要我们使用异步的方法 。
 *    1. js 之所以有异步, 是因为它是单线程的原因 (JS 是基于异步的语言)。
 *
 * 3. 程序的执行过程:
 *    1. 执行 第一行打印 100
 *    2. 执行 setTimeout 后, 传入 setTimeout 的函数会被暂时存起来, 不会立即执行(单线程的特点, 不能同时干两件事)。
 *    3. 执行最后一行打印 300.
 *    4. 待所有程序执行完, 处于空闲状态时, 会立马看有没有暂存起来的要执行的 。
 *    5. 发现暂存起来的 setTimeout 中的函数无需等待, 就立即来执行。
 *    6. 打印出来的顺序: 100 -> 300 -> 200
 *    7. 程序的执行中如果有异步的存在, 异步程序会放在一边, 需要先把同步的程序执行完才会回过头来执行异步程序 。
 */
console.log(100);
setTimeout(() => { // 这里的 setTimeout 并没有添加延迟时间。
  console.log(200);
});
console.log(300);

console.log(1001);
setTimeout(() => { // 这里的 setTimeout 并没有添加延迟时间。
  console.log(2001);
}, 1000);
console.log(3001);

/**
 * 1. ajax 请求的例子:
 *
 * 1. 这个 ajax 请求没有时间封禁, 它的时间限制就是我们发送的请求什么时候返回 。
 * 2. 这个请求什么时候返回, 什么时候返回什么时候执行, 如果请求的内容过多, 需要很长时间返回, 那么就需要很长时间后才会执行 。
 */
console.log('ajax - start');
$.get('./data.json', function(con) {
  console.log(con);
});
console.log('ajax - end');

/**
 * 1. 事件:
 *
 * 1. 这里的异步执行时机是: 点击; 不点击的话, 他永远也不会执行, 点击之后才会执行 。
 *
 * 2. 区别: 在这里 setTimeout 与 ajax 都是只执行一次; click 可能执行多次, 我们点击一次执行一次点击一次执行一次 。
 */
console.log('事件 - 1');
document.getElementById('btn1').addEventListener('click', function() {
  alert('事件 - 2');
});
//  错误原因: document.getElementsByClassName(...)捕捉到的是该类名元素的数组
// document.getElementsByClassName('btn2').addEventListener('click', function() {
//   alert('事件 - 2');
// });
document.getElementsByClassName('btn2')[0].addEventListener('click', function() {
  alert('事件 - 2');
});
console.log('事件 - 3');
