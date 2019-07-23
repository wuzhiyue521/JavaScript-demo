/**
 * 第二章:
 *
 * 1. 原型 (规则和示例)
 * 2. this
 * 3. 循环
 */

/**
 * 1. 什么是内置函数:
 *    1. js 内置函数是 浏览器内核 自带的, 不用任何函数库引入就可以直接使用的函数 。
 *    2. JS 中有哪些 内置函数 -- 数据封装类对象 ？
 *       1. 注意: JS 的内置函数是有一个前提的: 抛开所有的运行环境(浏览器)的, 只说 JS 这门语言 。
 *       2. 10 内置函数:
 *          1. String/Number/Boolean/Object/Function/Array/Date/Math/RegExp/Error 它们都是一个函数
 */


/**
 * 1. 原型的 5 条原型规则: 内置函数
 *
 * 1. 所有的 引用类型(数组 / 函数 / 对象), 都具有对象特性, 即可自由扩展属性 (除了 null 以外)。
 *
 * 2. 所有的 引用类型(数组 / 对象 / 函数), 都有一个 __proto__ (隐式原型)属性, 属性值是一个普通的对象 。
 *
 * 3. 所有的 函数, 都有一个 prototype (显式原型)属性, 属性值也是一个普通的对象 。
 *
 * 4. 所有的 引用类型(数组 / 函数 / 对象), __proto__ (隐式原型)属性值指向它的构造函数的 prototype (显式原型)属性值 。
 *
 * 5. 当试图得到一个 对象 的某个属性时, 如果这个对象本身没有这个属性, 那么会去他的 __proto__ (即它的构造函数的 prototype) 中寻找 。
 */

/**
 * 1. 原型的 5 条原型规则 *1*
 */
var obj1 = {}; obj1.a1 = "100";
var arr1 = []; arr1.b1 = 200
function fn1 () {}
fn1.c1 = 300
console.log('对象 - 对象特性: ', obj1) // {a1: "100"}
console.log('数组 - 对象特性: ', arr1) // [b1: 200]
console.log('函数 - 对象特性: ', fn1) // ƒ fn1 () {}

/**
 * 2. 原型的 5 条原型规则 *2*
 */
var obj1 = {}; obj1.a1 = "100";
var arr1 = []; arr1.b1 = 200
function fn1 () {}
fn1.c1 = 300
console.log('对象 - __proto__ (隐式原型)属性: ', obj1.__proto__)
console.log('数组 - __proto__ (隐式原型)属性: ', arr1.__proto__)
console.log('函数 - __proto__ (隐式原型)属性: ', fn1.__proto__)


/**
 * 3. 原型的 5 条原型规则 *3*
 */
console.log('函数 - prototype (显式原型)属性: ', fn1.prototype)

/**
 * 4. 原型的 5 条原型规则 *4*
 */
console.log(obj1.__proto__ === Object.prototype) // true

/**
 * 5. 原型的 5 条原型规则 *5*
 */
// 构造函数
function Foo1(name, age) {
  this.name = name
}
// 对其进行扩展属性; 扩展成了 alertName 属性; 并且赋值成一个函数 。
Foo1.prototype.alertName = function() {
  console.log('所有的函数, 都有一个 prototype 属性; prototype 的属性值也是一个普通的对象 (对象特性:即可自由扩展属性): ', this.name)
}
// 创建实例
// 通过 Foo1 这个构造函数 (new)创建了一个对象 t 。
var t = new Foo1('王五')
t.printName = function() {
  console.log('通过 Foo1 这个构造函数创建了一个对 t(对象特性:即可自由扩展属性): ', this.name);
}
// 测试
// t 有什么属性: 就一个 name 属性; 因为 Foo1 构造函数里面 this.name = name 已经定义了。
t.printName()
// 第五条规则 与 第四条规则 的体现 。
t.alertName()



/**
 * 2. this
 *
 * 1. new Foo1 这个函数实例化的时候就会执行到 Foo1 这个函数里面去, this 代表当前的 t 这个实例 。
 * 2. 执行的时候首先执行 t.printName(), 就会执行到他相应的函数里面去, console.log(this.name) 这个 this 就是 t 。
 * 3. 再 t.alertName() 的时候, 就到相应的函数里面去, console.log(this.name) 这里需要注意: 如果是原型里面的函数, 执行的时候 this 也是 t 也就是当前的实例 。
 */
// 构造函数
function Foo1(name, age) {
  this.name = name
}
Foo1.prototype.alertName = function() {
  console.log('所有的函数, 都有一个 prototype 属性; prototype 的属性值也是一个普通的对象 (对象特性:即可自由扩展属性): ', this.name)
}
// 创建实例
var t = new Foo1('王五')
t.printName = function() {
  console.log('通过 Foo1 这个构造函数创建了一个对 t(对象特性:即可自由扩展属性): ', this.name);
}
// 测试
t.printName()
t.alertName()


/**
 * 3. 循环
 *
 * 1. 也就是说, 他定义在原型上的属性 如 Foo2.prototype.alertName 的 alertName , 我们不希望通过 for in 这种方式去遍历出来; 我们希望通过 for in 遍历出来的是我们 直接赋值的属性 。
 */
// 构造函数
function Foo2(name, age) {
  this.name = name
}
Foo2.prototype.alertName = function() {
  console.log('所有的函数, 都有一个 prototype 属性; prototype 的属性值也是一个普通的对象 (对象特性:即可自由扩展属性): ', this.name)
}
// 创建实例
var todo = new Foo2('王五')
todo.printName = function() {
  console.log('通过 Foo2 这个构造函数创建了一个对 t(对象特性:即可自由扩展属性): ', this.name);
}
var item
for (item in todo) { // for in 是取 todo 这个对象的属性的 。
  // 高级浏览器已经在 for in 中屏蔽了来自 原型 的属性。
  // 但这里建议大家加上这个判断, 保证程序的健壮性 。
  if (todo.hasOwnProperty(item)) { // hasOwnProperty 用来判断 item 这个属性是不是 todo 他自己赋值的属性 。
    console.log('循环: ', item) // name   printName
  }
}
