/**
 * 1. 第三章 - 作用域和闭包:
 *
 * 1. this
 */

/**
 * 1. this 的定义
 *    1. 表示当前执行代码的 环境对象;
 *    2. this 要在执行时才能确认, 定义时无法确认 。
 *
 * 2. 因此可将 this 的剖析分为 "全局环境" 和 "函数环境" 两种类型的 环境对象
 */

/**
 * 1. 全局环境
 *    1. 全局代码中的 this 是指向全局对象 window 。
 */
console.log(this === window); // true
var a = 10;
console.log(this.a); // 10

/**
 * 2. 函数环境
 *
 * 1. 在函数内部, this 的取值, 取决于函数被调用时的 运行环境 。
 * 2. 这里涉及到内存里的数据结构相关的知识点, 当我们定义以下字面量对象时会发生一系列的关联关系 。
 * 3. var obj = { name: 'Tom' };
 *    1. javascript 引擎会先在内存中生成 { name: 'Tom' } 对象, 接着再把这个对象的内存地址赋值给 obj 变量; 所以 obj 变量保存的只是一个内存地址而已, 如果要获取 obj.name, javascript 引擎会先从 obj 变量中拿到内存地址, 然后从该地址中获取原始对象, 再返回 name 属性 。
 *    2. 而属性值为函数时, 该函数会被保存在内存中, 然后将该内存地址赋值给该属性, 因此该地址赋值给不同环境执行时它的作用域是不一样的, 而 this 对象就是指向函数当前的执行 环境对象, 执行环境是会在 Event Loop(事件循环) 过程中变化的, 因此 this 在函数环境下是属于 运行时 的 。
 */

/**
 * 1. 下面的例子说明 obj.say() 执行环境为 obj 对象;
 * 2. 而 obj.sub.say() 的执行环境却是 obj.sub 对象; 而对于 obj.sub 来说并没有 name 属性, 因此为 undefined;
 * 3. 而 var say = obj.say; 则表示将 say 方法的内存地址赋值给全局变量, 因此从全局变量 name 中取值 。
 */
var name = 'Tom';
var obj = {
  name: 'Iceberg',
  say: function() {
    console.log('my name is ' + this.name);
  },
  sub: {
    say1: function() {
      console.log('my name is ' + this.name);
    }
  }
};
obj.say(); // my name is Iceberg
obj.sub.say1() // my name is undefined;
var say = obj.say;
var say1 = obj.sub.say1;
say1() // my name is Tom
say(); // my name is Tom;


/**
 * 3. 从 this 在函数环境下的不同 运用场景 来剖析
 *
 *
 * 1. 作为 对象属性 执行
 *    1. 作为对象的方法调用时, 指向调用这个函数的对象
 *
 * 2. 作为 普通函数 执行
 *
 * 3. 事件回调函数:
 *    1. 以上逻辑点击触发后输出的是 undefined, 因为函数被当做事件触发的回调函数执行时, this 是指向该触发事件对应的元素;
 *    2. 如要 this 仍然以 handler 对象为执行环境, 则可使用函数的 bind 方法进行执行环境对象的绑定操作 。
 *    3. 如果是使用的箭头函数定义回调函数即可无需 bind，因为箭头函数中 this 就是对应定义时所在的对象。
 *
 * 4. 构造函数:
 *    1. 作为 构造函数, 指向创建的对象
 *    1. 要理解 this 在构造函数中的逻辑就要理清楚构造函数在实例化过程中都发生了什么 。
 *    2. 使用 new 命令实例化构造函数 A 的过程中会发生以下流程:
 *       1. 创建一个空对象，作为将要返回的对象实例
 *       2. 将该空对象的原型指向构造函数的 prototype 属性
 *       3. 将该空对象赋值给构造函数内部的 this 关键字
 *       4. 执行构造函数内部代码
 *       5. 默认返回 this 对象（如 return 的为非对象类型，如数字 123，会被忽略进而默认 return this 对象
 *       6. 由以上逻辑可知道 this 关键字在构造函数中表示的是其实例对象。
 *
 * 5. bind:
 *    1. bind 方法将函数体中的 this 指向新对象并返回一个新函数
 *
 * 6. call & apply
 *    1. 使用 apply 和 call 设置 this
 *    2. call (call 是一个一个添加的) 的第一个参数确定 this 是什么 {x: 100} 。
 *    3. aplay 是一个数组的形式 。
 *    4. call 方法是指 Function.prototype.call，因此每个函数都会具备 call 方法，fun.call(thisArg, arg1, arg2, ...)，call 方法接收的第一个参数会替换原有的 this 指向的执行环境对象。
 *    5. 而 apply 方法与 call 的区别仅在于 call 接收参数列表而 apply 接收数组参数或者类数组对象（如函数的 arguments 对象）。
 *
 * 7. 总结:
 *    1. 由于 javascript 的 Event Loop 原理, 决定了执行上下文会不断变化, 因此 this 对象诞生于表达当前的执行环境对象 。
 */

// 作为 对象属性 执行
var a2 = {
  name: 'A',
  age: 20,
  fn2: function() {
    console.log(this) // a2
  }
}
a2.fn2() // name: "A" age: 20

// 作为 普通函数 执行
var a3 = {
  name: 'A',
  age: 20,
  fn3: function() {
    console.log(this)
  }
}
var fn4 = a3.fn3
fn4() // window
function pu() {
  console.log('普通函数', this)
}
pu() // window

// 事件回调函数:
var handler = {
    nickname: 'anonymous',
    register: function() {
      console.log(this)
      // console.log(this.nickname);
    }
}
$('#registerBtn').on('click', handler.register); // undefined
$('#registerBtn').on('click', handler.register.bind(handler)); // anonymous


// 构造函数:
function A() {
  this.name = 'Tom';
  this.age = 20;
}
var a = new A();

// bind:
function A() {
  this.nickname = 'Tom';
  this.say = function() {
    console.log(this.nickname);
  }
}
var b = { nickname: 'John' };
var a = new A();
var say = a.say;
var say1 = a.say.bind(a);
var say2 = a.say.bind(b);
say(); // undefined
say1(); // Tom
say2(); // John

// call & apply:
function A() {
  this.name = 'Tom';
  this.sayName = function(){
    console.log(this.name);
  };
}
function B() {
  this.name = 'John';
}
var a = new A();
a.sayName.call(new B()); // John

// call / aplay / bind
var a4 = {
  name: 'A',
  age: 20,
  fn4: function() {
    console.log(this)
  }
}
a4.fn4.call({name: 'B'}) // name: "B"

function cal(name, age) {
  console.log('name1: ', name) // Window
  console.log('call1: ', this); // zhangsan
}
cal('zhangsan', 20); // window

// call
cal.call({x: 100}, 'zhangsan', 20) // {x: 100}

// aplay
cal.apply({x: 200}, [ 'zhangsan', 20]) // {x: 200}


// bind
function bin1(name, age) {
  console.log('name2: ', name) // lisi
  console.log('call2: ', this); // Window 
}
bin1('lisi', 80) // window

var bin2 = function (name, age) {
  console.log('name3: ', name) // lisi
  console.log('call3: ', this); // {y: 500}
}.bind({y: 500})
bin2('lisi', 80) // ({y: 500}
