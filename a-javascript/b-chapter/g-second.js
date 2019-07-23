/**
 * 第二章: 原型 和 原型链
 *
 * 1. 原型链
 * 2. instanceof
 */

/**
 * 1. 原型链
 *
 * 1. t.toString() 要去什么地方找?
 *    1. t.__proto__.__proto__
 *      1. 要去 t(实例) 中的 __proto__(隐式原型) 中去找;
 *      2. t.__proto__ 就是 Foo1(构造函数) 的 prototype(显示原型) 即 Foo1.prototype 中去找
 *      3. Foo1.prototype 它也是一个对象, 在这里没有找到, 那么我们就要去 Foo1.prototype 的 __proto__(隐式原型) 中去找;
 *      4. 这个时候执行的就是 对象 的构造函数; 对象这个构造函数有 prototype(显示原型), 再去这里面查找, 到这里再找不到就为 null (这是个特例, 这是 JS 为了避免死循环)。
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
t.toString() // t.__proto__.__proto__


/**
 * 2. instanceof
 *
 * 1. instanceof 用于判断 引用类型 属于哪个构造函数的方法 。
 * 2. t instanceof Foo1 的判断逻辑
 *    1. t 的 __proto__ 一层一层的往上找, 能否对应到 Foo1.prototype 。
 */
t instanceof Foo1
t instanceof Object
console.log('instanceof: ', t instanceof Foo1); // true
console.log('instanceof: ', t instanceof Object); // true
