/**
 * 1. 第四章 - 异步和单线程: 异步
 *
 * 1. 什么是异步
 * 2. 什么是同步
 * 3. 何时需要异步
 * 4. 前端使用 异步 的场景
 */


/**
 * 1. 什么是 同步:
 *    1. 是指一个进程在执行某个请求的时候, 若这个请求没有执行完成, 那么这个进程将会一直等待下去, 直到这个请求执行完毕, 才会继续执行下面的请求 。
 *
 *
 * 2. 什么是异步:
 *    1. 什么是异步: 是指一个进程在执行某个请求的时候, 如果这个请求没有执行完毕, 进程不会等待, 而是继续执行下面的请求 。
 *
 * 3. 何时需要异步:
 *    1. JS 是基于异步的语言 。
 *    2. 在可能发生等待的情况下(比如 setTimeout ); 等待的过程中不能像 alert 一样阻塞程序的运行; 因此, 所有的 ‘等待的情况’ 都需要异步 。
 *
 * 4. 同步和异步有什么特点:
 *    1. 同步是会阻塞程序的运行; 异步会无阻塞的向下执行 。
 *    2. 如果按照同步的理解的话, 先打印 100, 再是 200 (打印出 200 之后再过 1 秒钟之后才会打印出 300; 这 1 秒钟的时间, 程序就阻塞在这里等待, 无法运行), 再是 300 。
 *
 * 5. 执行程序:
 *    1. 我们会先执行 console.log(100); 接着去执行 setTimeout, 但是执行的时候它不会立马去打印, 因为添加了一秒钟的延迟, 但是程序不会去等着, 它会执行 console.log(300); 然后一秒钟之后执行 setTimeout 。(setTimeout 设置为 0 执行的顺序也是最后打印内容)
 *    2. 这个地方就能体现出异步
 *
 */
//异步示例: 打印顺序 100 300 200 400
console.log('同步', 100);
setTimeout(function () { // setTimeout 就是定时任务, 这个定时任务是延迟 1 秒 。
  console.log('异步:', 200);
}, 0);
setTimeout(function () {
  alert('setTimeout 异步 中的 alert:', 400);
}, 3000);
console.log('同步', 300);

// 同步示例:
console.log('同步 1');
alert('同步 2'); // 同步 alert 在点击之前 下面的程序是不会执行的 。
console.log('同步 3');



/**
 * 3. 前端使用 异步 的场景:
 *
 * 1. 定时任务: setTimeout setInterval
 * 2. 网络请求: ajax 请求, 动态 <img> 加载(网络请求: 请求时间不固定, 如果网速与服务器好的话这个请求响应会很快)
 * 3. 事件绑定 (我们在一个按钮上绑定一个事件等待用户去点击, 我们将事件绑定上去之后无论用户是否点击, 我们的程序该怎么执行还是怎么执行, 什么时候点击了, 什么时候去执行这个点击事件) 。
 */

/**
 * 1. ajax  请求示例:
 */
console.log('ajax 请求示例 start: ');
$.get('./data.json', function(data1) {
  console.log('ajax 请求示例', data1);
})
console.log('ajax 请求 end: ');

/**
 * 2. img 加载示例:
 *
 * 1. 在图片加载完成之后, 才会执行 img.onload 函数中的代码 。
 */
console.log('图片加载: start');
var img = document.createElement('img');
img.onload = function() {
  console.log('img 加载: loaded');
}
img.src = './1.jpg'
document.body.appendChild(img)
console.log('图片加载: end')

/**
 * 3. 事件绑定示例
 */
console.log('事件绑定 - start');
document.getElementById('btn').addEventListener('click', function() {
  alert('事件绑定 - clicked');
})
console.log('事件绑定 - end');
