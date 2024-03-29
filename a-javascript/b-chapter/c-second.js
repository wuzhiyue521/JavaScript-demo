/**
 * 第二章:
 *
 * 1. 变量类型
 * 2. 变量计算 - 强制类型转化
 * 3. typeof 运算符详解
 */



/**
 * 1. 变量类型:
 *    1. 值类型 和 引用类型 的区别:
 *    2. typeof 运算符详解
 *      1. typeof 能够出来几种变量形式 。
 */


/**
 * 1. 值类型 和 引用类型 的区别
 *
 * 1. 按照存储类型区分就分为: 值类型(保存在 栈 中) 和 引用类型(保存在 堆 中) 。
 *    1. 值类型(基本类型) <6种>: 字符串(string), 数值(number), 布尔值(boolean), undefined, null 这5种基本数据类型, 还包括 ECMAScript 2016 新增了一种基本数据类型: symbol
 *    2. 引用类型 <3种>: 对象(Object), 数组(Array), 函数(Function)
 *
 * 1. 值类型:
 *    1. 我们定义了 a, 它在内存中是一个变量, 占一个位置 也就是  a = 100; b 也是一个变量, 它赋值成了 a 的值;
 *    2. 这样内存中就有了两个位置, 第一个位置存储了 a 是 100, 第二个存储了 b 也是 100; 这个时候再对 a 赋值成 200, 其实并没有影响 b = 100 这个值 。
 *    3. 我们在对值类型赋值的时候, 他是直接把变量的值, 赋值到各个变量所对应的内存的 内存区块 里面的 。
 *    4. 占用空间固定, 保存在 栈 中
 *    5. 保存与复制的是值本身
 *    6. 使用 typeof 检测数据的类型
 *    7. 基本类型数据是值类型
 *
 * 2. 引用类型:
 *    1. 引用类型 对 a 赋值成为一个对象之后, 它是把这个对象单独存放在一个地方, 这个地方是一个独立的 内存区域; 然后把 a 赋值成这个内存区域的一个地址的值(也就是我们常说的指针), b 赋值成 a, 其实就是相当于把 a 这里的指针赋值给了 b; 也就是说经过赋值之后, a 和 b 其实指向的都是 {age: 20} 这个地址 。
 *    2. 所以说这个时候通过 b 去修改 age 的值的时候, 因为 a 和 b 同时指向同一个内存地址, 也就是指向的同一个数据, 所以 a.age 也会改变 。
 *    3. 占用空间不固定, 保存在 堆 中
 *       1. 堆内存中的对象不会随方法的结束而销毁, 即使方法结束后, 这个对象还可能被另一个引用变量所引用(方法的参数传递时很常见), 则这个对象依然不会被销毁, 只有当一个对象没有任何引用变量引用它时, 系统的垃圾回收机制才会在核实的时候回收它 。
 *    4. 保存与复制的是指向对象的一个指针
 *    5. 使用 instanceof 检测数据类型
 *    6. 使用 new() 方法构造出的对象是引用型
 */

/**
 * 2. 为什么计算机对 值类型 与 引用类型 的做法不一样:
 *
 * 1. 值类型里面存放的大部分是: 数字, true/false, 字符串 等一些相对比较小的内容; 在内存中所占的空间就比较小 。
 * 2. 引用类型是一个 对象/数组/函数, 里面可能会有各种各样的属性, 可能会非常大, 这样做有利于内存优化 。
 */
/**
 * 1. 变量类型 - 值类型:
 *
 * 1. b 是由 a 赋值过来的, a 的改变没有影响 b, 这是值类型的一个特点 。
 */
var a1 = 100;
var b1 = a1;
a1 = 200;
console.log('值类型: ', b1) // 100
/**
 * 2. 变量类型 - 引用类型:
 *
 * 1. a 和 b 相等的情况下, 改了 b, a 受到了影响 。
 */
var a2 = {age: 20}
var b2 = a2
b2.age = 50
console.log('引用类型: ', a2.age) // 50



/**
 * 3. typeof 运算符详解
 *    1. typeof 操作符会返回 数据类型 的字符串表示
 *
 * 1. typeof undefined        undefined
 * 2. typeof 'abs'            String
 * 3. typeof 123              Number
 * 4. typeof true / false     Boolean
 *
 * 5. typeof {}               Object
 * 6. typeof []               Object
 * 7. typeof null             Object
 *
 * 8. typeof console.log()    Function
 *
 * 1. typeof 一共是 7 中数据类型 (ES6 类型)
 * 2. typeof 能够很清晰的分出值类型: undefined / String / Number / Boolean
 * 3. typeof 对于引用类型的只能分出: Object / Function
 */
// ES6 类型 Symbol : 我们通过 Symbol 生成的变量它永远都不会重复 。
// 作用就是: 防止 key 重复覆盖上面的内容 (不会覆盖我们前面的值, 它会新加一个) 。
var s = Symbol()
console.log('ES6 类型', s) //  Symbol()


/**
 * 2. 变量计算 - 隐式类型转化
 *    1. 字符串拼接
 *    2. == 运算符
 *    3. if 语句
 *    4. 逻辑运算
 */
/**
 * 1. 字符串拼接
 *
 * 1. 数字 + 字符串: JS 会将数字转换成字符串, 然后再去拼接; 这是 JS 的一个规则 。
 * 2. 字符串拼接的时候, 会牵扯到一个类型转换的问题 。
 */
var a3 = 100 + 10
var b3 = 100 + '10'
console.log('字符串拼接: ', a3); // 110
console.log('字符串拼接: ', b3); // 10010

/**
 * 2. == 运算符
 *
 * 1. JS 中的双等于号, 会发生类型转换, 尝试让这两个数相等 。
 */
100 == '100' // 将 100 数字, 转换为字符串 '100' 。
0 == '' // 会将 0 与 '' 转换为 false 。
null == undefined // 会 null 与 undefined 转换为 false 。
console.log('== 运算符: ', 100 == '100'); // true
console.log('== 运算符: ', 0 == ''); // true
console.log('== 运算符: ', null == undefined); // true

/**
 * 3. if 语句
 *
 * 1. 在 if 语句里面也会发生强制类型转换的事情, 它会将传进来的变量强制转换为 boolean 类型 。
 * 2. 0 / NaN / '' / null / undefined / false 在 if 中会被强制转换为 false 。
 */
var a4 = true
if (a4) {
  console.log('if 语句:', a4);
}
var b4 = 100
if (b4) { // 执行 if 语句的时候 b4 这里转变为 true
  console.log('if 语句:', b4);
}
var c4 = ''
if (c4) { // 执行 if 语句的时候, c4 会转换为 false
  console.log('if 语句:', c4);
}

/**
 * 4. 逻辑运算符
 */
10 && 0 // 对 10 进行强制类型转换, 转换为 true 。
'' || 'abc' // 对 '' 进行强制类型转换, 转换为 false 。
!window.abc
console.log('逻辑运算符:', 10 && 0); // 0
console.log('逻辑运算符:', '' || 'abc');  // abc
console.log('逻辑运算符:', !window.abc); // true
// 判断一个变量会被当做 true 或 false 我们可以使用 !!(取正) 来判断 。
var a5 = 100
console.log('逻辑运算符:', !!a5) // true
