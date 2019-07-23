/**
 * 1. 原型链
 * 2. 什么是 原型 / 构造函数 /  实例 / 原型链
 * 3. instanceof 的原理是什么
 */

/**
 * 1. 原型链
 *
 * 1. JS 相互的串联就是以 原型链 为基础的 。
 * 2. 原型链是 JS 的一个基础
 * 3. 关于 原型链 的一些问题
 *    1. 创建对象 有几种方法 (是为考察 原型链 打下基础):
 */



/**
 * 1. 创建对象的方法 一: 字面量
 *    1. 对象字面量 是对象定义的一种简写形式, 目的在于简化创建包含大量属性的对象的过程 。
 *    2. 也就是说, 第一种和第二种方式创建对象的方法其实都是一样的, 只是写法上的区别不同 。
 *    3. 方法: 将成员信息写到 {} 中, 并且赋值给一个变量 。 此时的这个变量就是一个对象
 */
var person1 = {
  name: 'jack',
  sex: 'girl',
  job: function(){}
}
person1.job();


/**
 * 2. 创建对象的方法 二: new 操作符 + Object 创建对象
 *    1. 这行代码创建了 Object 引用类型的一个新实例, 然后把实例保存在变量 Person 中 。
 *    2. 以上两种方法在使用同一接口创建多个对象时, 会产生大量重复代码 。

 */
var Person2 = new Object();
Person2.name = 'Nike';
Person2.age = 29;
console.log('Object 构造函数方法', Person2) // {name: "Nike", age: 29}


/**
 * 3. 创建对象的方法 三: 工厂模式
 *    1. 在使用 工厂模式 创建对象的时候, 我们都可以注意到, 在 createPerson 函数中, 返回的是一个对象 。
 *    2. 那么我们就无法判断返回的对象究竟是一个什么样的类型 。
 *    3. 工厂模式解决了重复实例化多个对象的问题, 但没有解决对象识别的问题 (但是工厂模式却无从识别对象的类型, 因为全部都是 Object; 不像 Date/Array 等, 本例中, 得到的都是 o 对象, 对象的类型都是 Object, 因此出现了 构造函数 模式）
 */
function createPerson(name, age, family) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.family = family;
  o.say = function() {
    alert(this.name);
  }
  return o;
}
var person1 = createPerson("lisi", 21, ["lida","lier","wangwu"]); // instanceof 无法判断它是谁的实例, 只能判断他是对象, 构造函数都可以判断出
var person2 = createPerson("wangwu", 18, ["lida","lier","lisi"]);
console.log(person1 instanceof Object); // true
console.log(person1 instanceof createPerson); // false
console.log(person2 instanceof Object); // true
console.log(person2 instanceof createPerson); // false
console.log(person1); // {name: "lisi", age: 21, family: Array(3), say: ƒ}
console.log(person2); // {name: "wangwu", age: 18, family: Array(3), say: ƒ}
// 代码示例:
// 这种写法是声明一个变量, 将一个函数当作值赋给变量 。
var Circle = function() {
  var obj = new Object();
  obj.PI = 3.14159;
  obj.area = function(r) {
    return this.PI * r * r;
  }
  return obj;
}
var c = new Circle();
alert( c.area( 1.0 ) );


/**
 * 4. 创建对象的方法 四: 通过 构造函数模式
 *
 * 1. 可以识别的对象的类型 。 对于检测对象类型, 我们应该使用 instanceof 操作符
 *
 * 2. 方法: var person = new 函数名();
 *
 * 3. 通过该方法创建对象时, 会自动执行该构造函数 。
 *
 * 4. 对比工厂模式有以下不同之处:
 *    1. 没有显式地创建对象
 *    2. 直接将属性和方法赋给了 this 对象
 *    3. 没有 return 语句
 *
 * 5. 以此方法调用构造函数步骤:
 *    1. 创建一个新对象
 *    2. 将构造函数的作用域赋给新对象 (将 this 指向这个 新对象)
 *    3. 执行构造函数代码 (为这个 新对象 添加属性)
 *    4. 返回新对象
 *
 * 6. 构造函数也有其缺陷, 每个实例都包含不同的 Function 实例 (构造函数内的方法在做同一件事, 但是实例化后却产生了不同的对象, 方法是函数, 函数也是对象)
 *
 */

function Person3(name,age,job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name); // Nike 、 Arvin
  };
  this.sayName()
}
var personF = new Person3('Nike',29,'teacher');
var personS = new Person3('Arvin',20,'student');
//当做构造函数使用
var personT = new Person3('Nicholas',29,'Software Engineer');
//this-->person3
personT.sayName(); // 'Nicholas'

console.log(personF instanceof Object); // ture
console.log(personF instanceof Person3); // ture
console.log(personS instanceof Object); // ture
console.log(personS instanceof Person3); // ture
console.log(personF) // Person3 {name: "Nike", age: 29, job: "teacher", sayName: ƒ}
console.log(personS) // Person3 {name: "Arvin", age: 20, job: "student", sayName: ƒ}


/**
 *
 * 5. 创建对象的方法 五: 原型模式
 *
 * 1. 使用 原型 prototype 方式创建对象的方式, 可以让所有对象实例共享它所包含的属性和方法 。
 * 2. 原型模式: 的好处是所有对象实例共享它的属性和方法 (即所谓的共有属性);
 * 3. 此外还可以如代码第 112,113 (var person5 = new Person(); person5.name = "wangwu"; ) 行那样设置实例自己的属性(方法) (即所谓的私有属性); 可以覆盖原型对象上的同名属性(方法)
 *
 */
function Person() {
  // ...
}
Person.prototype.name = "lisi";
Person.prototype.age = 21;
Person.prototype.family = ["lida","lier","wangwu"];
Person.prototype.say = function(){
  alert(this.name);
};
// {name: 'lisi', age: 21, family: Array[3]}
// {name: 'lisi', age: 21, family: ["lida", "lier", "wangwu"]}
console.log(Person.prototype);

var person4 = new Person(); // 创建一个实例 person4
console.log(person4.name); // lisi

var person5 = new Person(); // 创建实例 person5
person5.name = "wangwu";

person5.family = ["lida","lier","lisi"];
console.log(person5); //Person {name: "wangwu", family: Array[3]}
// console.log(person5.prototype.name); //报错
console.log(person5.age); // 21




/**
 * 6. 创建对象的方法 六: 混合模式 (构造函数模式 + 原型模式)
 *
 * 1. 使用构造函数模式与原型模式结合的方式, 构造函数模式用于定义实例属性, 而原型模式用于定义方法和共享的属性 。
 * 2. 混合模式共享着对相同方法的引用, 又保证了每个实例有自己的私有属性 。 最大限度的节省了内存 。
 *
 */
function Person6(name, age, family) {
  this.name = name;
  this.age = age;
  this.family = family;
}
Person6.prototype = {
  constructor: Person6,  // 每个函数都有 prototype 属性, 指向该函数 原型对象; 原型对象 都有 constructor 属性, 这是一个指向 prototype 属性所在函数的指针
  say: function(){
    alert(this.name);
  }
}

var person7 = new Person("lisi",21,["lida","lier","wangwu"]);
console.log(person7);
var person8 = new Person("wangwu",21,["lida","lier","lisi"]);
console.log(person8);



/**
 * 7. 创建对象的方法 七: Object.create 方法创建
 *    1. 代码示例:
 */
var obj = {name: '123'}
var cret = Object.create(obj)
console.log(cret)
console.log(cret.name)
// 对数据起到一个保护的作用
var obj = {name: '123'}
var cret = Object.create(obj)     // 我们这里打印出来的内容是： {} 一个空对象 。
// Object.create 方法创建的对象, 是用 原型链 来连接的 。
// cret.__proto__ 指向的就是 obj 对象 ，
console.log(cret) //{} 一个空对象 。
console.log(cret.__proto__) // {name: "123"}
// 为什么 name 不直接在 cret 对象上 ？
// 在 JS 引擎查找 cret, 它本身是一个空对象, 这个空对象上是没有 name 属性的, 它是在它的原型对象上;
// 也就是说: create 方法是把参数中的这个对象作为一个新对象的原型对象 赋给 cret 的, cret 本身是不具备 name 属性的 。 是通过原型链来连接原型对象的 。
console.log(cret.name) // 123



/**
 * 5. JS 中常用的 Prototype, 那么 Prototype 有什么用:
 *    1. 不使用 prototype 属性定义的对象方法, 是静态方法, 只能直接用类名进行调用! 另外, 此静态方法中无法使用 this 变量来调用对象其他的属性!
 *    2. 使用 prototype 属性定义的对象方法, 是非静态方法, 只有在实例化后才能使用! 其方法内部可以 this 来引用对象自身中的其他属性 !
 */

/**
 * 2. 什么是 原型 / 构造函数 /  实例 / 原型链:
 *
 * 1. 什么是 原型:
 *    1. 原型对象 怎么区分, 它是被哪一个构造函数引用呢? 我们可以使用 constructor 构造器; 原型对象中会有一个构造器, 这个构造器会默认你声明的哪个函数 。
 * 2. 什么是构造函数:
 *    1. 构造函数都应该以 一个大写字母开头
 *    2. 任何函数, 只要通过 new 操作符来调用, 那它就可以作为构造函数;
 *    3. 任何函数, 如果不通过 new 操作符来调用, 那它跟普通函数也没有什么两样
 *    4. 构造函数可以通过 new 运算符生成一个实例 。
 *    5. 函数都有一个 prototype 属性, 这时在声明一个函数的时候 js 自动添加的属性, prototype 指的就是 原型对象 。
 *    6. 构造函数 和 原型对象 的关联:
 *       1. 构造函数 的 原型对象 通过 constructor 和 构造函数 关联
 *    7. 构造函数和实例的关联
 *       1. 构造函数通过 new 和实例关联
 *
 * 3. 什么是 实例:
 *    1. 我们 new 一个对象, 他就是一个实例
 *    2. 实例下面有一个 __proto__ 属性
 *    3. 实例 与 原型对象 的关系:
 *       1. 实例的  __proto__ 属性, 指向 构造函数 的 原型对象 prototype
 *
 * 4. 什么是 原型链:
 *    1. 实例对象 与 原型 之间的链接, 叫做 原型链
 *    2. 原型链 是通过什么实现向上找的过程的:
 *       1. 他是通过 __proto__ 与 prototype 来实现原型链的查找的 。
 *    3. 原型链 和 原型对象 起了一个什么作用:
 *       1. 构造函数中增加了很多的属性和方法, 我们的实例就可以公用这些属性和方法, 当有多个实例的时候, 想去公用这些方法的时候, 我们不能每一个实例都拷贝一份;
 *       2. 它们之间有共同的方法的时候, 我们可以考虑将这些方法存在一个共同的地方, 这个共同的地方就是 原型对象 。
 *       3. 代码示例:
 *          // 讲解 原型对象 和 原型链 的作用
 *           var M = function (name) {
 *             this.name = name
 *             // 如果我们给它增加一些方法, 我们可以直接在这里
 *             this.say = function() {
 *               console.log('执行的操作')
 *             }
 *             // 这样的话我们的每一个实例都会将这个方法拷贝一份 。 这样占内存没有必要 。
 *           }
 *           // 我们可以通过在 M 的原型链上增加这个方法, 这样在 原型对象 上增加以后, 通过 原型链 的方式, 实例对象 是可以找到这个 原型对象 的方法, 那么实例也是可以拥有的; 这就是 JS 引擎做的 原型链 的基本功能 。
 *           // 也就是说任何一个 实例对象 通过 原型链 找到它上面的 原型对象, 那个上面的 方法和属性 都是被 实例 所共享的; 这就是 原型链 的一个基本原理 。
 *           // 我们在 M 的原型上增加一个方法 ：
 *           M.prototype.say= function() {
 *             console.log('say 是我们在 M 的原型上增加一个方法')
 *           }
 *           var o3 = new M('o3')
 *           var o5 = new M('o5')
 *           // 从这里我们可以看到 o3 / o5 都有 say 这个方法;
 *           // 也就是说通过 原型链 的方式, 找到 原型对象, 原型对象 上的方法是被不同的 实例 所共有的; 这就是 原型链 的工作原理 。
 *           console.log('o3.say', o3.say)
 *           console.log('o5.say', o5.say)
 *         4. 原型链 的工作原理:
 *            1. 通过 原型链 的方式找到 原型对象, 原型 上的方法是被不同的实例所共有的, 这就是 原型链 的工作原理 。
 *            2. 按照 js 对象, js 引擎的分析方式, 在访问一个实例的时候, 比如说这个实例上有什么 属性/方法, 在这个实例本身上它没有找到这个属性或方法的情况下, 它会向他的原型对象上找, 也就是通过 __proto__ 方法, 向他的上一级去找, 如果在他的上一级对象上还没有找到这个属性和方法, 它会在它原型对象的基础上再通过原型对象的 __proto__ 方法, 再往上一级查找, 以此类推, 直到找到 Object.prototype; 如果在这个地方还没有找到, 那么它会原路返回, 告诉实例没有找到。
 *            3. Object.prototype 是整个原型链的顶端 。到这里就结束了 。
 *            4. 如果说它在中间的任何一个环节找到了, 我们需要查找的 属性/方法, 那么它会停止向上查找, 原路返回这个 方法/属性 。
 *            5. 注意1: 函数才会有 prototype 属性, 对象是没有 prototype 属性的 。
 *            6. 注意2: 只有实例对象才有 __proto__ 属性, 函数是没有 __proto__ 属性的 。
 *               1. 我们有时候会发现一些函数也有 __proto__ 属性, 函数它既是函数, 也是对象;
 *               2. 它的这个 __proto__ 属性, 举例:
 *               3. M.__proto__ === Function.prototype  //结果是 true 《 M是一个构造函数 》
 *               4. 这句话说明了 M 的构造函数是 Function, 也可以理解为 M 这个 普通的函数是 Function 这个函数的一个实例 。
 *            7. 注意3: 我们的实例明明是通过构造函数来生成的, 它是怎么和原型对象产生关联的 ？
 *               1. 也就是 构造函数的 prototype 属性, 也就是说我们修改了 prototype 属性, 其实也就是修改了实例的上一级的原型对象 。
 *               2. 实例对象的 __proto__ 属性和构造函数本身没有什么关联,   __proto__ 关联的是 构造函数下的 prototype 属性所引用的 原型对象 。
 *
 *
 */
var M = function (name) {
  this.name = name
  /**
   * 1. 如果我们给它增加一些方法, 我们可以直接在这里 this.say = function() { console.log('执行的操作')}
   * 2. 这样的话我们的每一个实例都会将这个方法拷贝一份 。这样占内存没有必要 。
   */
}
/**
 * 1. 我们可以通过在 M 的 原型链 上增加这个方法, 这样在 原型对象 上增加以后, 通过 原型链 的方式, 实例对象 是可以找到这个原型对象的方法, 那么实例也是可以拥有的 。
 * 2. 这就是 JS 引擎做的 原型链 的基本功能 。
 *
 * 3. 也就是说任何一个 实例对象 通过 原型链 找到它上面的 原型对象, 那个上面的 方法和属性 都是被实例所共享的 。这就是原型链的一个基本原理
 */
// 我们在 M 的 原型 上增加一个方法:
M.prototype.say = function(){
  console.log('say 是我们在 M 的原型上增加一个方法')
}
var o3 = new M('o3')
var o5 = new M('o5')
// 从这里我们可以看到 o3 / o5 都有 say 这个方法
// 也就是说通过 原型链 的方式, 找到 原型对象, 原型对象 上的方法是被不同的 实例 所共有的 。 这就是原型链的工作原理 。
console.log('o3.say', o3.say) // ƒ (){console.log('say 是我们在 M 的原型上增加一个方法')}
console.log('o5.say', o5.say) // ƒ (){console.log('say 是我们在 M 的原型上增加一个方法')}




/**
 * 3. instanceof 的原理是什么:
 *    1. instanceof 的原理就是来判断实例对象的  __proto__ 属性和构造函数的 prototype 属性是不是同一个引用 。
 *    2. 我们在使用 instanceof 的时候, 左边是 实例对象, 右边是 构造函数
 *    3. 在判断这个实例对象, 是否是这个构造函数的实例的的时候, 其实判断的是 实例对象下的 __proto__ 属性, 与构造函数下的 prototype 属性, 是否引用的同一个地址;
 *      1. 如果是, 它就返回 true, 如果不是就返回 false 。
 *      1. 有一点我们需要强调: 原型链的原型对象上, 可能还会有原型链 。也就是说原型对象它本身也是一个对象, 它这个对象本身还是有 __proto__ 属性, 它还会有它的构造函数的 prototype 属性, 以此类推向上走 。
 *      2. 那么在 instanceof 判断的时候, 原型有它的构造函数, 那么用实例对象来判断原型对象的构造函数是不是它的实例, 这里返回的也是 true 。
 *      3. 只要是在这条原型链上的构造函数, 都是这个实例对象的构造函数 。
 *    4. 代码演示 ：
 *        1. 解释  instanceof 的使用 。
 *           var M = function(name) {
 *             this.name = name
 *           }
 *           M.prototype.say= function(){
 *             console.log('say 是我们在 M 的原型上增加一个方法')
 *           }
 *           var o3 = new M('o3') //O3 是 M 生成的一个实例
 *           var o5 = new M('o5')
 *           // 判断 o3 是不是 M 的实例 。
 *           console.log(o3 instanceof M) // true
 *           // 只要是在这个原型链上的构造函数, 都会被这个 instanceof 看作是 o3(实例) 的构造函数
 *           console.log(o3 instanceof Object)  //true
 *           // 为什么  o3 instanceof Object 返回了一个 true 。
 *           // 我们来找 M 这个原型链, 也就是 o3 对象的 原型链, 实例对象的 __proto__ 属性指向的就是 构造函数的 prototype 即 M 的 原型对象 。
 *           console.log( o3.__proto__ === M.prototype) // true
 *           // 原型对象的 __proto__ 指向的是什么 ？
 *           console.log( M.prototype.__proto__ === Object.prototype ) //true
 *           // 通过上面的介绍我们得出: o3 instanceof Object 返回 true
 *           // 连接起来就是: M 构造函数原型对象的 __proto__ 属性指向的是 Object.prototype 即 Object 的原型对象; 所以 Object 的构造函数也会被看做是 o3 的一个构造函数 。
 *           // 虽然 Object 不是 o3 的真正的构造函数, 但是它在这条原型链上, 它返回的结果也是 true .
 *           // 所以我们在使用的时候, 就不能轻易的说 o3 是 Object 的一个实例 。
 *           //
 *           // 遇到这种情况: A 继承了 B ; B 继承了 C; 那么 A 生成的实例对象, 用 instanceof 判断 A、 B 、 C 返回的都是 true, 我们怎么判断这个实例是 A/B/C 它们的直接实例呢? 这里我们要使用 constructor 属性 。
 *           console.log( o3.__proto__.constructor === M ) // true
 *           // 当它返回 true 的时候, 就说明它是直接生成的 。
 *           console.log( o3.__proto__.constructor === Object ) //false
 *           // 当它返回 false 的时候 ， 就说明它不是直接生成的 。
 *    5. 这里说明使用 constructor 判断, 比使用 instanceof 更加严谨 。
 *
 */
var M = function (name) {
    this.name = name
}
M.prototype.say= function(){
    console.log('say 是我们在 M 的原型上增加一个方法')
}
var o3 = new M('o3')// O3 是 M 生成的一个实例
var o5 = new M('o5')
// 判断 o3 是不是 M 的实例 。
console.log(o3 instanceof M) // true
// 只要是在这个 原型链 上的 构造函数, 都会被这个 instanceof 看作是 o3(实例) 的构造函数
console.log(o3 instanceof Object)  //true
// 为什么  o3 instanceof Object 返回了一个 true 。
// 我们来找 M 这个原型链, 也就是 o3 对象的原型链 ，
//实例对象的 __proto__ 属性指向的就是 构造函数的 prototype 即 M 的 原型对象 。
console.log( o3.__proto__ === M.prototype) // true
// 原型对象的 __proto__ 指向的是什么 ？
console.log('M.prototype::: ', M.prototype) // {say: ƒ, constructor: ƒ}
console.log( M.prototype.__proto__ === Object.prototype ) // true
// 通过上面的介绍我们得出: o3 instanceof Object 返回 true
// 连接起来就是: M 构造函数原型对象的 __proto__ 属性指向的是 Object.prototype 即 Object 的原型对象, 所以 Object 的构造函数也会被看做是 o3 的一个构造函数 。
// 虽然 Object 不是 o3 的真正的构造函数, 但是它在这条原型链上, 它返回的结果也是 true .
// 所以我们在使用的时候, 就不能轻易的说 o3 是 Object 的一个实例 .

// 遇到这种情况 : A 继承了 B ; B 继承了 C . 那么 A 生成的实例对象 , 用 instanceof 判断 A、 B 、 C 返回的都是 true  ，我们怎么判断这个实例是 A 、 B 、 C 它们的直接实例呢 ？ 这里我们要使用 constructor 属性 。
console.log( o3.__proto__.constructor === M ) // true
// 当它返回 true 的时候 ， 就说明它是直接生成的 。
console.log( o3.__proto__.constructor === Object ) // false
// 当它返回 false 的时候, 就说明它不是直接生成的 。
// 这里说明使用 constructor 判断, 比使用 instanceof 更加严谨 。



/**
 * 4. new 运算符:
 *    1. new 运算符后面跟的是一个构造函数 。
 *    2. 步骤一: 一个新对象被创建 《 是一个空对象 》; 它继承自 foo.prototype (构造函数的原型对象)这个时候原型链已经被关联上一部分了, 就是原型对象已经被关联上了; 但是还没有关联上最终的实例对象上 。
 *    3. 步骤二: 构造函数被执行 。 执行的时候, 相应的传参会被传入, 同时上下文 (this) 会被指定为这个新实例 。
 *        1. new foo 等同于 new foo(), 只能用在不传递任何参数的情况下 。
 *        2. 构造函数被执行, 非常必要, 如果构造函数没有执行, 那么构造函数, 函数体内的所有跟 this 相关的都是执行不了的 。
 *    4. 步骤三: 如果构造函数返回了一个 “对象”,  那么这个对象会取代整个 new 出来的结果 。
 *        1. 如果构造函数没有返回对象, 那么 new 出来的结果为步骤1 创建的对象 。
 */
var new2 = function(func) { // 我们传入的参数 func 就是构造函数 。
  // 第一步: 先要生成一个 (空对象) 新对象 。
  // 新对象要指定它的 (Object) 构造函数的 原型对象
  var o = Object.create(func.prototype);
  // 第二步: 执行这个构造函数 func
  // 函数的 call 就是用来转移上下文的 。
  var k = func.call(o)
  // 第三步: 我们要来判断这个构造函数执行完的结果是不是对象类型 。
  if (typeof k === 'object') {
      // 如果是对象类型的话, 我们就直接返回 k
      return k;
  } else {
      // 如果不是, 我们直接返回我们刚创建得到那个对象 o
      return o;
  }
}
var M = function (name) {
    this.name = name
    console.log(this.name) // {name: undefined}
}
o6 = new2( M );
console.log(o6)
// 判断 o6 是不是 M 的一个实例 。
console.log(o6 instanceof M) // true