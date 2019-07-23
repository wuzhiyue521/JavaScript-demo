/**
 * 1. javascript 中有 5 中 数据类型 (也称为 基本数据类型):
 *    1. Undefined / Null / Boolean / Number / String;
 *    2. 还有一种复杂数据类型 —— object; object 本质是由一组键值对组成的 。
 */

/**
 * 1. js 使用 typeof 能够得到哪些类型?
 *    1. typeof 用于检测给定变量的 数据类型 。
 *
 * 1. 六种: undefined / String / Number / Boolean / Object / Function
 * 2. ES6 补充: Symbol
 */

/**
 * 2. 何时使用 === 何时使用 ==？
 *
 * 1. 只有在判断 对象属性 或 函数参数 是否存在时用 == ; 其余情况均用 === 。
 * 2. 注意: 我们判断的值, 前提是定义了, 否则会报错 。
 */
// if (obj.a == null) { // 只有这种情况使用 == , 其它情况使用 === 。
//   // 这里相当于 obj.a === null || obj.a === undefined 的简写形式 。
//   // JQ 源码中推荐这种使用方法 。
// }

/**
 * 3. JS 中有哪些 内置函数 -- 数据封装类对象 ？
 * 1. 注意: JS 的内置函数是有一个前提的: 抛开所有的运行环境(浏览器)的, 只说 JS 这门语言 。
 * 2. 9 内置函数:
 *    1. String/Number/Boolean/Object/Function/Array/Date/RegExp/Error 它们都是一个函数
 * 3. 2 内置对象:
 *    1. Math / JSON
 */

/**
 * 4. js 变量按照存储方式 区分为哪些类型, 并描述其特点?
 *    1. 值类型 和 引用类型
 *       1. typeof 能够很清晰的分出 值类型: undefined / String / Number / Boolean
 *       2. typeof 对于引用类型的只能分出: Object / Function
 */

/**
 * 5. 如何理解 json ？
 *
 * 1. JSON 只不过是一个 JS 对象 (前提是从 JS 语法来看)。
 * 2. JSON 在 JS 代码中仅仅是一个全局变量, 和我们平时所说的 “JSON 格式”要分开。
 *
 * 2. JSON 同时也是一种数据格式
 */
JSON.stringify({a6:10, b6:20}) // 把对象变成字符串
JSON.parse('{"a7":30, "b7":40}') // 把字符串变成对象
// JSON.parse 是用 eval (用 eval 会有很多坑); JSON.stringify 就不是了
console.log('如何理解 json？:', JSON.stringify({a6:10, b6:20})); // {"a6":10,"b6":20}
console.log('如何理解 json？:', JSON.parse('{"a7":30, "b7":40}')); // {a7: 30, b7: 40}