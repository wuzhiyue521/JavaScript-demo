/**
 * 1. 开发环境:
 *
 * 1. AMD
 * 2. CMD
 */

/**
 * 1. CommonJS:
 *
 * 1. CommonJS 是以在浏览器环境之外构建 JavaScript 生态系统为目标而产生的项目, 比如在服务器和桌面环境中, Node.JS 遵循 CommonJS 的规范。
 * 2. CommonJS 规范是为了解决 JavaScript 的作用域问题而定义的模块形式, 可以使每个模块它自身的命名空间中执行 。 该规范的主要内容是, 模块必须通过 module.exports 导出对外的变量或接口, 通过 require() 来导入其他模块的输出到当前模块作用域中 。
 * 3. CommonJS 是同步加载模块 。
 */
var clock = require('clock');
clock.start();




/**
 * 2. AMD
 *
 * 1. 基于 CommonJS 规范的 nodeJS 出来以后, 服务端的模块概念已经形成, 很自然地, 大家就想要客户端模块 。 而且最好两者能够兼容, 一个模块不用修改, 在服务器和浏览器都可以运行 。 但是, 由于一个重大的局限, 使得 CommonJS 规范不适用于浏览器环境。 如果将上面的代码运行在客户端浏览器, 就会报错 。
 * 2. 上面的 require 方法是同步的。 这对服务器端不是一个问题, 因为所有的模块都存放在本地硬盘, 可以同步加载完成, 等待时间就是硬盘的读取时间 。 但是, 对于浏览器, 这却是一个大问题, 因为模块都放在服务器端, 等待时间取决于网速的快慢, 可能要等很长时间, 浏览器处于 "假死" 状态。
 * 3. 因此, 浏览器端的模块, 不能采用 "同步加载", 只能采用 "异步加载"。 这就是 AMD 规范诞生的背景 。
 * 4. CommonJS 是主要为了 JS 在后端的表现制定的, 他是不适合前端的, AMD 出现了, 它就主要为前端 JS 的表现制定规范 。
 * 5. AMD 是 Asynchronous Module Definition 的缩写, 意思就是 "异步模块定义" 。 它采用异步方式加载模块, 模块的加载不影响它后面语句的运行 。 所有依赖这个模块的语句, 都定义在一个回调函数中, 等到加载完成之后, 这个回调函数才会运行 。
 * 6. AMD 也采用 require()语句加载模块, 但是不同于 CommonJS 。
 * 7. requireJs 就是 AMD 规范的实现 。
 */
require([module], callback);
require(['clock'],function(clock){
  clock.start();
});

//requirejs 非常简单, 我们只需要定义在页面加载的时候, 引入 requirejs 并且, 把 mainjs 指定在 data-main 中, 在 mainjs 中引入我们的 requirejs.config 和我们需要用到的页面 js, requirejs 会根据我们的模块去加载相应的依赖, 然后执行代码 。
// 页面引入
<script data-main="main" src="./amdjs/require.js"></script>
// 模块, 这里使用 AMD 定义模块的方式, 例如: 定义一个模块 module1
define('module1', ['zepto'], function($) {
    console.log('this is module1')
})
// mainjs 内容
require.config({
    baseUrl: 'amdjs/modules',
    paths: {
        main: 'amdjs/main'
        zepto: 'http://zeptojs.com/zepto.min'
    },
    shim: {
    },
    waitSeconds: 15
});
// 你的模块
requirejs(['module1'],function($) {
    console.log('load success!')
});


// define.amd (Object)用来标识有 amd 模块加载器的存在
// 创建一个名为 "alpha" 的模块, 使用了 require , exports, 和名为 "beta" 的模块:
define("alpha", ["require", "exports", "beta"], function (require, exports, beta) {
  exports.verb = function() {
      return beta.verb();
      //Or:
      return require("beta").verb();
  }
});
//一个返回对象的匿名模块:
define(["alpha"], function (alpha) {
  return {
    verb: function(){
      return alpha.verb() + 2;
    }
  };
});
//一个没有依赖性的模块可以直接定义对象:
define({
  add: function(x, y){
    return x + y;
  }
});
// 一个使用了简单 CommonJS 转换的模块定义:
define(function (require, exports, module) {
  var a = require('a'),
      b = require('b');
  exports.action = function () {};
});






/**
 * 3. CMD:
 *
 * 1. CMD (Common Module Definition), 是 seajs 推崇的规范, CMD 则是依赖就近, 用的时候再 require 。
 * 2. AMD 和 CMD 最大的区别是对依赖模块的 执行时机 处理不同, 而不是加载的时机或者方式不同, 二者皆为异步加载模块 。
 * 3. AMD 依赖前置, JS 可以方便知道依赖模块是谁, 立即加载; 而 CMD 就近依赖, 需要使用把模块变为字符串解析一遍才知道依赖了那些模块 。
 */
define(function(require, exports, module) {
   var clock = require('clock');
   clock.start();
});

define(function(require, exports) {
  // 获取模块 a 的接口
  var a = require('./a');
  // 调用模块 a 的方法
  a.doSomething();
});

// require.async: 用来在模块的内部异步加载模块, 并且完成后执行指定回掉 。
define(function(require, exports, module) {
  // 异步加载一个模块，在加载完成时，执行回调
  require.async('./b', function(b) {
    b.doSomething();
  });
  // 异步加载多个模块，在加载完成时，执行回调
  require.async(['./c', './d'], function(c, d) {
    c.doSomething();
    d.doSomething();
  });
});

// require.resolve: 使用模块系统内部的路径解析机制来解析并返回模块路径 。该函数不会加载模块, 只返回解析后的绝对路径 。
define(function(require, exports) {
  console.log(require.resolve('./b')); // ==> http://example.com/path/to/b.js
});

// exports: 是一个对象, 用来向外提供模块接口 。
define(function(require) {
  // 通过 return 直接提供接口
  return {
    foo: 'bar',
    doSomething: function() {}
  };
});

//  module.exports: 模块暴露的出口
define(function(require, exports, module) {
  // 正确写法
  module.exports = {
    foo: 'bar',
    doSomething: function() {}
  };
});