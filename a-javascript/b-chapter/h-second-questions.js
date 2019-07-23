/**
 * 1. 第二章: 面试题解答
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
 * 1. 如何判断一个变量是 数组类型
 *
 * 1. 判断 数据类型 必须使用 instanceof 。
 */
var arr = []
arr instanceof Array
typeof arr
console.log('如何判断一个变量的数据类型 instanceof : ', arr instanceof Array); // true
console.log('如何判断一个变量的数据类型 typeof : ', typeof arr); // object



/**
 * 2. 写一个 原型链继承 的例子
 *    1. 一个简单的实例
 *    2. 封装一个 dom 查询的实例
 */
// 动物
function Animal() {
  this.eat = function() {
    console.log('Animal eat');
  }
}
// 狗
function Dog() {
  this.back = function() {
    console.log('Dog back');
  }
}
/**
 * 1. Dog.prototype 就是 Dog 构造函数的显示原型, 它已经有了一个对象, 我们可以将这个对象改掉赋值成了 new Animal(); new Animal() 返回的其实就是 Animal new 出来的一个对象, 它有一个 eat 的属性 。
 * 2. 其实就是把 Dog 的显示原型, 给它赋值成一个对象, 这个对象有一个 eat 属性 。
 */
Dog.prototype = new Animal()
// 哈士奇
var hashiqi = new Dog()
console.log(hashiqi.eat()); // Animal eat
console.log(hashiqi.back()); // Dog back

/**
 * 2. *封装一个 dom 查询的实例***********************
 */
function Elem(id) {
  this.elem = document.getElementById(id)
}
Elem.prototype.htmlDoc = function(val) { // 扩展一个 htmlDoc 函数 。
  // 将上面的 this.elem = document.getElementById(id) 获取到变量中来 。
  var ele = this.elem
  if (val) {
    // ele.innerHTML = val
    // ele.insertAdjacentHTML('beforeBegin', val)
    ele.insertAdjacentHTML('afterBegin', val)
    return this // (为了链式操作)把整个这个对象返回回去 。
  } else {
    return ele.innerHTML
  }
}
Elem.prototype.on = function(type, fn) { // 扩展一个事件绑定的方法
  var ele = this.elem.firstChild
  ele.addEventListener(type, fn) // 对元素进行一个事件的绑定 。
}
var div1 = new Elem('div1')
console.log(div1.htmlDoc());
// div1.htmlDoc('<p>扩展一个 htmlDoc 函数</p>')
// div1.on('click', function() {
//   alert('扩展一个事件绑定的方法')
// })
// 链式操作:
div1.htmlDoc('<div><p>扩展一个 htmlDoc 函数</p><p>测试添加元素的方法</p></div>').on('click', function() {
  alert('扩展一个事件绑定的方法')
})



/**
 * 3. 描述 new 一个对象的过程 (考察构造函数的理解)
 *    1. new 一个新对象
 *    2. this 指向这个新对象
 *    3. 执行代码即对 this 赋值
 *    4. 返回 this
 */
function Gou(name, age) {
  this.name = name
  this.age =age
  this.class = 'class-1'
}
var z = new Gou('张珊', '18')



/**
 * 4. zepto (或其他框架) 源码中如何使用原型链
 *    1. 阅读源码是高效提高技能的方式
 *    2. 不能埋头苦专, 有技巧在其中
 *    3. zepto 设计和源码分析
 */



/**
 *
 * 1. 获取子节点的方式: dom / childNodes / children / firstChild / firstElementChild
 *    1. dom 直接获取子节点
 *      1. var a = document.getElementById("test").getElementsByTagName("div");
 *      2. 其中 test 的父标签 id 的值, div为标签的名字 。
 *      3. getElementsByTagName 是一个方法 。 返回的是一个数组 。 在访问的时候要按数组的形式访问 。
 *    2. childNodes 获取子节点
 *      1. var b =document.getElementById("test").childNodes;
 *      2. 使用 childNodes 获取子节点的时候, childNodes 返回的是子节点的集合, 是一个数组的格式 。 他会把换行和空格也当成是节点信息。
 *    3. children 获取子节点
 *      1. var getFirstChild = document.getElementById("test").children[0];
 *      2. 利用 children 来获取子元素是最方便的, 他也会返回出一个数组 。 对其获取子元素的访问只需按数组的访问形式即可 。
 *    4. firstChild 获取第一个子节点
 *      1. var getFirstChild = document.getElementById("test").firstChild;
 *      2. firstChild 来获取第一个子元素, 但是在有些情况下我们打印的时候会显示 undefined, 这是什么情况呢？？
 *         1. 其实 firstChild 和 childNodes 是一样的, 在浏览器解析的时候会把他当换行和空格一起解析, 其实你获取的是第一个子节点, 只是这个子节点是一个换行或者是一个空格而已 。
 *    5. firstElementChild 获取第一个子节点
 *      1. var getFirstChild = document.getElementById("test").firstElementChild;
 *      2. 使用 firstElementChild 来获取第一个子元素的时候, 这就没有 firstChild 的那种情况了 。 会获取到父元素第一个子元素的节点 这样就能直接显示出来文本信息了 。 他并不会匹配换行和空格信息 。
 *
 *
 *
 * 2. 获取最后一个子节点: lastChild
 *    1. var getLastChildA = document.getElementById("test").lastChild;
 *    2. var getLastChildB = document.getElementById("test").lastElementChild;
 *    3. lastChild 获取最后一个子节点的方式其实和 firstChild 是类似的 。 同样的 lastElementChild 和 firstElementChild 也是一样的 。
 *
 *
 *
 *
 * 3. 获取父节点的方式: parentNode / parentElement / offsetParent
 *    1. parentNode
 *      1. 获取的是当前元素的直接父元素 。 parentNode 是 w3c 的标准。
 *      2. var p  = document.getElementById("test").parentNode;
 *    2. parentElement
 *      1. parentElement 和 parentNode 一样, 只是 parentElement 是 ie 的标准
 *      2. var p1 = document.getElementById("test").parentElement;
 *    3. offsetParent
 *      1. 一看 offset 我们就知道是偏移量 其实这个是于位置有关的上下级, 直接能够获取到所有父亲节点, 这个对应的值是 body 下的所有节点信息 。
 *      2. var p2 = document.getElementById("test").offsetParent;
 *
 *
 *
 * 4. 获取兄弟节点的方式: previousElementSibling / nextElementSibling
 *    1. 通过获取父亲节点
 *      1. 通过获取父亲节点再获取子节点来获取兄弟节点
 *      2. var brother1 = document.getElementById("test").parentNode.children[1];
 *    2. 获取上一个兄弟节点
 *      1. 在获取前一个兄弟节点的时候可以使用 previousSibling 和 previousElementSibling; 他们的区别是 previousSibling 会匹配字符, 包括换行和空格, 而不是节点。 previousElementSibling 则直接匹配节点 。
 *      2. var brother2 = document.getElementById("test").previousElementSibling;
 *      3. var brother3 = document.getElementById("test").previousSibling
 *    3. 获取下一个兄弟节点
 *      1. 同 previousSibling 和 previousElementSibling, nextSibling 和 nextElementSibling 也是类似的
 *      2. var brother4 = document.getElementById("test").nextElementSibling;
 *      3. var brother5 = document.getElementById("test").nextSibling;
 *
 */
