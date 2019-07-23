/**
 * 1. 事件 - ajax: XMLHttpRequest
 *
 * 1. open(method, url, async)
 * 2. send()
 * 3. onreadystatechange
 * 4. readyState
 * 5. status
 * 6. responseText
 * 7. setRequestHeader()
 * 8. 状态码
 */

/**
 * 1. 面试题目:
 *
 * 1. 手动编写一个 ajax, 不依赖第三方库 。
 * 2. 跨域的几种实现方式(首页: imooc.com ; 移动: m.imooc.com ; 实战: coding.imooc.com)。
 */

/**
 * 2. 知识点:
 *
 * 1. XMLHttpRequest
 * 2. 状态码说明 (浏览器上的状态码 / 发送请求返回的状态码)。
 * 3. 跨域。
 */

/**
 * 1. XMLHttpRequest:
 *
 * 1. 状态码:
 *    1. 浏览器本身的状态码 。
 *    2. 发送 http 请求返回的状态码 。
 *
 * 1. open 完了之后, 咱们定义一个函数, 最后是 send; send 完了之后这个对象会随时监听 readyState 状态变化; 每次 readyState 状态变化都会触发 onreadystatechange 执行。
 */
var xhr = new XMLHttpRequest(); // 声明一个对象 。
xhr.open('GET', './api.json', true); // open 打开;  GET: 请求方式; /api: 请求地址; false: 使用同步的方式
xhr.onreadystatechange = function() { // 这个函数定义的时候它不可能一下子就执行, 所以使用异步, 等待后面执行 。
  // 这里的函数异步执行
  if (xhr.readyState == 4) { // 说明已经完成 。
    if (xhr.status == 200) { // 服务端返回 200, 证明返回成功
      alert(xhr.responseText); // responseText: 服务端返回的内容
      console.log(xhr.responseText);
      console.log(JSON.parse(xhr.responseText));
      console.log(JSON.parse(xhr.responseText).main.a);
    }
  }
}
xhr.send(null); // send: 最后发送


/**
 * 1. open(method, url, async) -> xhr.open("POST", url, true > :
 *    1. method: 发送请求所使用的方法 (GET或POST); 与POST相比, GET更简单也更快, 并且在大部分情况下都能用 。
 *      1. 在以下情况中, 请使用 POST 请求:
 *        1. 无法使用缓存文件 (更新服务器上的文件或数据库) 。
 *        2. 向服务器发送大量数据 (POST 没有数据量限制) 。
 *        3. 发送包含未知字符的用户输入时, POST 比 GET 更稳定也更可靠 。
 *    2. url: 规定服务器端脚本的 URL (该文件可以是任何类型的文件; 比如 .txt 和 .xml, 或者服务器脚本文件比, 如 .asp 和 .php (在传回响应之前, 能够在服务器上执行任务))
 *    3. async: 规定应当对请求进行 异步(true) 或 同步(false) 处理; true 是在等待服务器响应时执行其他脚本, 当响应就绪后对响应进行处理; false 是等待服务器响应再执行 。
 *
 * 2. send() 方法可将请求送往服务器 。
 *
 * 3. onreadystatechange: 存有处理服务器响应的函数, 每当 readyState 改变时, onreadystatechange 函数就会被执行 。
 *
 * 4. readyState: 存有服务器响应的状态信息 (浏览器本身的状态码)。
 *    1. 0: 初始化;  请求初始化 (未调用 open() 方法)
 *    2. 1: 启动;    与服务器连接已建立 (已经调用open(), 未调用send())
 *    3. 2: 发送;    请求已接收 (send 方法已经被调用, 并且 头部和状态 已经可获得, 尚未接收到响应)
 *    4. 3: 接受;    请求处理中 (正在解析响应内容, responseText 已经包含部分数据)
 *    5. 4: 完成;    请求已完成, 且响内容解析完成, 可以在客户端调用 。
 *
 * 5. status 状态码 (发送 http 请求返回的状态码):
 *    1. 2xx: 表示成功处理请求 。 如 200
 *    2. 3xx: 需要重定向, 浏览器直接跳转 。 如 302
 *    3. 4xx: 客户端请求错误 (服务端没有发生错误, 客户端发生错误) 。 如 404
 *    4. 5xx: 服务端错误 。如 504 (服务端链接数据库超时)
 *
 * 6. responseText: 获得字符串形式的响应数据 。
 *
 * 6. setRequestHeader(): POST传输数据时, 用来添加 HTTP 头; 然后 send(data), 注意 data 格式; GET 发送信息时直接添加参数到 url 上就可以, 比如 url?a=a1&b=b1。
 *
 * 7. 注意: PS: Fetch polyfill 的基本原理是探测是否存在 window.fetch 方法, 如果没有则用 XHR 实现。
 *
 */
var Ajax = {
  get: function(url, fn) {
    // XMLHttpRequest 对象用于在后台与服务器交换数据
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      // readyState == 4说明请求已完成
      if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
        // 从服务器获得数据
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send();
  },
  
  // datat应为 'a=a1&b=b1' 这种字符串格式, 在 jq 里如果 data 为对象, 会自动将对象转成这种字符串格式.
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    // 添加 http 头, 发送信息至服务器时内容编码类型
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send(data);
  }
}
