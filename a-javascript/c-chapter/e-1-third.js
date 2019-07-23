/**
 * 1. 闭包
 */


/**
 * 1. 闭包 的解析:
 *
 * 1. 官方对闭包的解释是:
 *    1. 一个拥有许多变量 和 绑定了这些变量的环境的表达式 (通常是一个函数), 因而这些变量也是该表达式的一部分
 *    2. JavaScript 中所有的 function 都是一个闭包 。不过一般来说, 嵌套的 function 所产生的闭包更为强大, 也是大部分时候我们所谓的 “闭包” 。
 *
 * 2. 闭包的特点:
 *    1. 作为一个函数变量的一个引用, 当函数返回时, 其处于激活状态 。
 *    2. 一个闭包就是当一个函数返回时, 一个没有释放资源的栈区 。
 *
 * 3. 内部函数:
 *    1. Javascript 允许使用内部函数 --- 即函数定义和函数表达式位于另一个函数的函数体内 。
 *    2. 而且, 这些内部函数可以访问它们所在的外部函数中声明的所有 局部变量/参数/声明的其他内部函数 。
 *    3. 当其中一个这样的内部函数, 在包含它们的外部函数之外被调用时, 就会形成闭包 。
 */


/**
 * 4. 闭包的几种写法和用法:
 *    1. 第一种方式:
 *       1. 这种写法没什么特别的, 只是给函数添加一些属性 。
 */

/**
 * 1. 第一种写法
 */
// 代码示例:
function Circle(r) {
  this.r = r;
}
Circle.PI = 3.14159;
Circle.prototype.area = function() {
  return Circle.PI * this.r * this.r;
}
var c = new Circle(1.0);
alert(c.area());

/**
 * 2. 第二种写法:
 *    1. 这种写法是声明一个变量, 将一个函数当作值赋给变量 。
 */
// 代码示例:
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
 * 3. 第三种方式:
 *    1. 这种方法最好理解, 就是 new 一个对象, 然后给对象添加属性和方法 。
 */
// 代码示例:
var Circle = new Object();
Circle.PI = 3.14159;
Circle.Area = function(r) {
  return this.PI * r * r;
}
alert( Circle.Area( 1.0 ) );

/**
 * 4. 第四种方式:
 *    1. 这种方法使用较多, 也最为方便 。 var obj = {} 就是声明一个空的对象 。
 */
// 代码示例:
var Circle = {
  "PI":3.14159,
  "area": function(r) {
    return this.PI * r * r;
  }
};
alert( Circle.area(1.0) );

/**
 * 5. JS 中常用的 Prototype, 那么 Prototype 有什么用:
 *    1. 不使用 prototype 属性, 定义的对象方法, 是静态方法, 只能直接用类名进行调用! 另外, 此静态方法中无法使用 this 变量来调用, 对象其他的属性!
 *    2. 使用 prototype 属性, 定义的对象方法, 是非静态方法, 只有在实例化后才能使用! 其方法内部可以 this 来引用对象自身中的其他属性 !
 */


/**
 * 6. Javascript 闭包 的用途
 *    1. 匿名自执行函数:
 *      1. 我们知道所有的变量, 如果不加上 var 关键字, 则默认的会添加到全局对象的属性上去, 这样的临时变量加入全局对象有很多坏处, 比如: 别的函数可能误用这些变量; 造成全局对象过于庞大, 影响访问速度(因为变量的取值是需要从原型链上遍历的) 。 除了每次使用变量都是用 var 关键字外, 我们在实际情况下经常遇到这样一种情况, 即有的函数只需要执行一次, 其内部变量无需维护
 *      2. 比如 UI 的初始化, 那么我们可以使用闭包:
 *          1. 我们创建了一个匿名的函数, 并立即执行它, 由于外部无法引用它内部的变量, 因此在函数执行完后会立刻释放资源, 关键是不污染全局对象 。
 */
var data= {
  table : [],
  tree : {}
};

(function(dm){
  for(var i = 0; i < dm.table.rows; i++){
    var row = dm.table.rows[i];
    for(var j = 0; j < row.cells; i++){
      drawCell(i, j);
    }
  }
})(data);

/**
 * 2. 结果缓存:
 *    1. 我们开发中会碰到很多情况, 设想我们有一个处理过程很耗时的函数对象, 每次调用都会花费很长时间, 那么我们就需要将计算出来的值存储起来, 当调用这个函数的时候, 首先在缓存中查找, 如果找不到, 则进行计算, 然后更新缓存并返回值; 如果找到了, 直接返回查找到的值即可 。 闭包正是可以做到这一点, 因为它不会释放外部的引用, 从而函数内部的值可以得以保留 。
 */
// 2. 代码示例:
var CachedSearchBox = (function(){
  var cache = {},
  count = [];
  return {
    attachSearchBox : function(dsid){
      if(dsid in cache){
        // 如果结果在缓存中
        return cache[dsid]; // 直接返回缓存中的对象
      }
      var fsb = new uikit.webctrl.SearchBox(dsid); //新建
      cache[dsid] = fsb; // 更新缓存
      if(count.length > 100){// 保正缓存的大小 <= 100
        delete cache[count.shift()];
      }
      return fsb;
    },
    clearSearchBox : function(dsid){
      if(dsid in cache){
        cache[dsid].clearSelection();
      }
    }
  };
})();
CachedSearchBox.attachSearchBox("input");
// 3. 这样我们在第二次调用的时候, 就会从缓存中读取到该对象 。


/**
 * 3. 封装:
 */
// 1. 代码示例:
var person = function(){
// 变量作用域为函数内部, 外部无法访问
var name = "1111111";
return {
  getName : function(){
    return name;
  },
  setName : function(newName) {
      name = newName;
    }
  }
}();
// print(person.name);
console.log(person.name) // undefined
// print(person.getName());
console.log(person.getName()) // 1111111
person.setName("abruzzi");
// print(person.getName());
console.log(person.getName()) // abruzzi


/**
 * 4. 实现 类 和 继承:
 */
// 1. 代码示例:
function Person(){
  var name = "default";
  return {
    getName : function(){
      return name;
    },
    setName : function(newName){
      name = newName;
    }
  }
};
var p = new Person();
p.setName("Tom");
alert(p.getName());
var Jack = function(){};
//继承自 Person
Jack.prototype = new Person();
//添加私有方法
Jack.prototype.Say = function(){
  alert("Hello,my name is Jack");
};
var j = new Jack();
j.setName("Jack");
j.Say();
alert(j.getName());
// 2. 我们定义了 Person, 它就像一个类, 我们 new 一个 Person 对象, 访问它的方法 。
//   1. 下面我们定义了 Jack, 继承 Person, 并添加自己的方法 。


/**
 * 4. 立即执行函数
 *    1. ( function(){…} )() 和 ( function (){…} () ) 这两种立即执行函数的写法
 *    2. 通过定义一个匿名函数, 创建了一个新的函数作用域, 相当于创建了一个 “私有” 的命名空间, 该命名空间的变量和方法, 不会破坏污染全局的命名空间 。 此时若是想访问全局对象, 将全局对象以参数形式传进去即可
 */