/**
 * 第二章: 原型和原型链
 *
 * 1. 构造函数
 * 2. 构造函数 - 扩展
 */

/**
 * 1. 面试题目
 *
 * 1. 如何判断一个变量是 数组类型
 * 2. 写一个原型链继承的例子
 * 3. 描述 new 一个对象的过程
 * 4. zepto (或其他框架) 源码中如何使用原型链
 *
 */

/**
 * 2. 知识点:
 *
 * 1. 构造函数
 * 2. 构造函数 - 扩展
 * 3. 原型规则和示例
 * 4. 原型链
 * 5. instanceof
 */

/**
 * 1. 构造函数
 *
 * 1. 什么是构造函数:
 *    1. 当任意一个普通函数, 用于创建一类对象时, 只要通过 new 操作符来调用, 它就被称作构造函数 。
 *    2. 任何函数, 如果不通过 new 操作符来调用, 那它跟普通函数也没有什么两样 。
 *
 * 2. 一个函数要作为一个真正意义上的构造函数, 需要满足下列条件:
 *    1. 在函数内部, 对新对象 (this) 的属性进行设置, 通常是添加属性和方法 。
 *    2. 构造函数可以包含, 返回语句 (不推荐); 但返回值必须是 this, 或者其它非对象类型的值 。
 *
 * 3. 构造函数的函数名首字母大写 (基本上看到大写字母开头的函数就是构造函数) 。
 *    1. 如果我们自己写代码的时候, 构造函数不使用大写字母开头, 会给其它阅读者带来很大的麻烦 。
 *
 * 4. new 构造函数, 就是构造函数形成一个实例的过程 。
 *
 * 5. 通过一个构造函数可以 new 出来很多个不同的实例; 构造函数有点类似模板机制 。
 *
 * 6. new 一个构造函数返回一个对象的过程:
 *    1. new 一个构造函数的时候 (我们可以将参数传入, 也可以不传), 函数在执行的时候, this 会赋值成一个空对象, 参数赋值完成之后会, 默认将 this return 回来, return 回来之后就赋值给 f(实例) 了 。
 *    2. 赋值给 f(实例) 之后, 实例就具备了构造函数的属性和方法 (f.name = 'zhangsan' ...) 。
 */
function Foo (name, age) {
  this.name = name
  this.age = age
  this.class = 'class-1'
  // return this // 默认有这一行 。
}
var f = new Foo('zhangsan', 20)
var f1 = new Foo('lisi', 25)
console.log('构造函数 f.name: ', f.name)
console.log('构造函数 f.age: ', f.age)
console.log('构造函数 f.class: ', f.class)
console.log('构造函数 f1.name: ', f1.name)
console.log('构造函数 f1.age: ', f1.age)
console.log('构造函数 f1.class: ', f1.class)
/**
 * 2. 示例:
 */
function Person(name,age){
  this.name=name;
　this.age=age;
　this.say=function(){
　　console.log('早上好'+ name)
　}
}
//当做构造函数
var jone=new Person('mingming',12);
jone.say()
//当做普通函数
Person('mingming',12);
window.say()

/**
 * 2. new 运算符 (实现 new 运算符的一个效果, 也是 new 运算符工作的原理)
 *
 * 1. Javascript 中 new 对象的过程:
 *    1. 创建一个空的 实例 对象
 *       1. var obj = new Object();
 *    2. 将构造函数中 this 指向刚创建的 实例 对象 (让 Person 中的 this 指向 obj(实例), 并执行 Person(构造函数) 的函数体)
 *       1. var result = Person.call(obj);
 *    3. 将创建的 实例 的 __proto__ 指向构造函数的 prototype 。 这一步是建立 对象和原型 直接的对应关系 。 firefox 下通过对象的 __proto__ 属性能够访问到原型, IE 下则没有暴露出相应的属性 。
 *       1. 设置 原型链, 将 obj(实例) 的 __proto__ 成员指向了 Person(构造函数) 函数对象的 prototype 成员对象
 *       2. obj.__proto__ = Person.prototype;
 *    4. 执行构造函数中的代码 。
 *       1. 判断 Person 的返回值类型, 如果是值类型, 返回 obj 。
 *       2. 如果是引用类型, 就返回这个引用类型的对象 。
 */
var new2 = function(fn) {//我们传入的参数 fn 就是构造函数 。
    // 第一步: 先要生成一个 (空对象) 新对象 (空的 实例 对象) 。
    // 新对象要指定它的 Object, 构造函数的 原型对象
    var obj = Object.create(fn.prototype);
    // 第二步: 执行这个构造函数 fn
    // 函数的 call 就是用来转移上下文的 。
    var k = fn.call(obj)
    // 第三步: 我们要来判断这个 构造函数 执行完的结果是不是 对象 类型 。
    if (typeof k === 'object') {
        // 如果是对象类型的话, 我们就直接返回 k
        return k;
    } else {
        // 如果不是, 我们直接返回我们刚创建得到那个对象 obj
        return obj;
    }
}
var M = function (name) {
    this.name = name
    console.log( this.name )
}
o6 = new2( M );
console.log('o6: ', o6) // M {name: undefined}
// 判断 o6 是不是 M 的一个实例 。
console.log(o6 instanceof M) // true


/**
 * 3. 构造函数 - 扩展
 *
 * 1. var a = {} 其实是 var a = new Object() 的语法糖
 *    1. a 的 构造函数 其实是 Object 构造函数
 *
 * 2. var a = [] 其实是 var a = new Array() 的语法糖
 *    1. a 的构造函数其实是 Array 构造函数
 *
 * 3. function Foo() {...} 其实是 var Foo = new Function(...)
 *    1. a 的构造函数其实是 Function 构造函数
 *
 * 4. 使用 instanceof 判断一个函数是否是 一个变量 的 构造函数
 */
