/**
 * 1. 开发环境: commonJS
 */

/**
 * 1. commonJS
 *
 * 1. commonJS 是 nodejs 模块化规范, 现在被大量的前端使用 。
 *
 * 2. 前端开发依赖的插件和库, 都可以从 npm 中获取 。
 * 3. 构建工具的高度自动化, 使得使用 npm 的成本非常低 。
 *
 * 4. commonjs 不会异步加载 JS, 而是同步一次性加载出来 (高级的构建工具可以将 commonJS 配置成异步加载, 但是它的本质上是同步加载)。
 */

/**
 * 2. 使用 commonJS 的代码:
 */
// util.js
module.exports = {
  getFormatDate: function(date, type) {
    if (type === 1) {
      return '2017-06-07'
    }
    if (type === 2) {
      return '2017年6月7日'
    }
  }
}
// a-util.js
var util = require('./util.js');
module.exports = {
  aGetFormatDate: function(date) {
    return util.getFormatDate(date, 2);
  }
}

/**
 * 3. AMD 和 commonJS 的使用场景:
 *
 * 1. AMD 和 commonJS 没有优劣之分, 只是各自都有自己的使用场景。
 * 2. 需要异步加载 JS , 就是用 AMD 。
 * 3. 需要同步加载, 或者使用了 npm 之后建议使用 commonJS 。
 */

/**
 * 4. CMD 和 AMD 之间的差异
 *
 * 1. AMD (异步加载模块, CMD（通用模块, AMD是需要通过异步加载的形式把依赖加载进来, 然而 CMD 在 require 依赖的时候, 可以通过同步的形式（require), 也可以通过异步的形式(require.async)。 当然 AMD 也可以通过特殊的写法支持 CMD, 但是不推崇 。
 * 2. CMD 推崇依赖就近, AMD 推崇依赖前置 。 在 AMD 中, 我们需要把依赖前置在依赖数组中 。 而在 cmd 中, 我们只需要在使用这个模块前, 把依赖的模块 require 进来 。
 * 3. seajs 专注于浏览器环境下的模块加载, 而 requirejs 集成了在 node 环境以及 Rhino 环境下的代码, 这导致requirejs 比 seajs 更大 。
 */

