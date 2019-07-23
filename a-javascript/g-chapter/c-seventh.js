/**
 * 1. 开发环境: AMD
 */

/**
 * 1. 面试题:
 *
 * 1. 模块化本身就是一个面试题 。
 */

/**
 * 2. 知识点:
 *
 * 1. 不使用模块化的情况
 * 2. 使用模块化 (在同样的场景下使用模块化的好处)
 * 3. AMD
 * 4. CommonJS
 */



/**
 * 1. 不使用模块化的情况:
 * ****** 一层一层的引用关系
 *
 * 1. util.js getFormatDate 函数 (util.js 文件作为我们最基础的函数库, 封装一个底层功能函数 getFormatDate)。
 * 2. a-util.js aGetFormatDate 函数, 使用 getFormatDate (a-util.js 文件作为我们最基础的业务库, 它里面有一个 aGetFormatDate 函数, 但是这个函数需要依赖 getFormatDate 函数才能使用)。
 * 3. a.js aGetFormatDate (a.js 就是我们的真正的业务实现代码, 他需要使用 aGetFormatDate 这个函数)。
 */
/**
 * util.js
 */
function getFormatDate(date, type) {
  // type === 1, 返回 2017-06-07 格式
  // type === 2, 返回 2017年6月7日 格式
}

/**
 * a-util.js
 */
function aGetFormatDate(date) {
  // 要求返回 2017年6月7日 格式
  return getFormatDate(date, 2);
}

/**
 * a.js
 */
var dt = new Date();
console.log(aGetFormatDate(dt));

/**
 * 2. 使用方式:
 *
 * <script src="util.js"></script>
 * <script src="a-util.js"></script>
 * <script src="a.js"></script>
 * 这里的 js 文件引用顺序错误, 程序执行就会报错, 他们之间是 强依赖 的引用关系。
 *
 * 这些代码中的函数必须是全局变量, 才能暴露给对方使用 。 (全局变量的污染, 也就是容易覆盖其他人的或者其他人覆盖我们自己的)
 * a.js 知道要引用 a-util.js , 但是它知道还需要依赖 util.js 吗? (我们只清楚我们当前维护的 js 文件的依赖, 对于我们依赖文件的依赖是什么我们并不清楚)
 */


/**
 * 2. 使用模块化 -- CommonJS
 *
 * 1. 直接 <script src="a.js"></script> , 其他的根据依赖关系, 自动引用。
 * 2. 那两个函数没有必要做成全局变量, 不会带来污染和覆盖。
 */
/**
 * util.js
 */
export {
  getFormatDate: function(date, type) {
    // type === 1, 返回 2017-06-07 格式
    // type === 2, 返回 2017年6月7日 格式
  }
}

/**
 * a-util.js
 */
var getFormatDate = require('./util.js');
export {
  aGetFormatDate: function(date) {
    // 要求返回 2017年6月7日 格式
    return getFormatDate(date, 2);
  }
}

/**
 * a.js
 */
var aGetFormatDate = require('./a-util.js');
var dt = new Date();
console.log(aGetFormatDate(dt));



/**
 * 3. AMD
 *
 * 1. require.js : requirejs.org/
 * 2. 全局 define 函数。
 * 3. 全局 require 函数。
 * 4. 依赖的 js 会自动 、 异步加载。
 */

/**
 * 1. 使用 require.js :
 */

/**
 * 1. util.js
 */
// define([
//   'require',
//   'dependency'
// ], function(require, factory) {
//   'use strict';
// });
define(function() {
  return {
    getFormatDate: function(date, type) {
      if (type === 1) {
        return '2017-06-07'
      }
      if (type === 2) {
        return '2017年6月7日'
      }
    }
  }
});

/**
 * 2. a-util.js
 */
define(['./util.js'], function(util) {
  return {
    aGetFormatDate: function(date) {
      return util.getFormatDate(date, 2);
    }
  }
})

/**
 * 3. a.js
 */
define('./a-util', function(aUtil) {
  return {
    printDate: function(date) {
      console.log(aUtil.getFormatDate(date));
    }
  }
});

/**
 * main.js
 */
require(['./a.js'], function(a) {
  var date = new Date();
  a.printDate(date);
});