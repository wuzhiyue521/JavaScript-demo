/**
 * 1. 第三章 - 作用域和闭包: 面试题解答
 */

/**
 * 1. 面试题目:
 *
 * 1. 说一下对变量提升的理解 。
 * 2. 说明 this 不同的使用场景。
 * 3. 创建 10 个 a 标签， 点击的时候弹出对应的序号。
 * 4. 如何理解作用域 。
 * 5. 实际开发中闭包的应用。
 *    1. 闭包是作用域的一个具体的体现。
 */

/**
 * 1. 说一下对变量提升的理解 。
 *    1. 变量定义
 *    2. 函数声明 (注意和 函数表达式 的区别)
 *    3. 其实就是执行上下文的概念
 */


/**
 * 2. 说明 this 不同的使用场景。
 *    1. 作为 构造函数 执行
 *    2. 作为 对象属性 执行
 *    3. 作为 普通函数 执行
 *    3. call / apply / bind
 */


/**
 * 3. 创建 10 个 a 标签， 点击的时候弹出对应的序号 。
 *
 * 1. 执行过程:
 *    1. 从 i = 0 ... 很快就执行完了, 很快就将 10 条 a 标签插入 body 中 。
 *    2. 它什么时候进行 click？ 我们是不知道的, 当我们点击的时候肯定时都执行完了之后, 当我们点击的时候弹出的 i 是一个自由变量,  自由变量我们需要去父作用域中去找, 这个时候的 i 是 10， 他虽然有 10 个标签创建, 但是每次点击弹出的 i 的值都是 10 。
 */

// 错误的写法:
var i, a
for (var i = 0; i < 10; i++) {
  a = document.createElement('a');
  a.innerHTML = i + '创建 10 个 a 标签 -- 这里考察的主要知识点就是作用域' + '<br>'
  a.addEventListener('click', function(e) {
    e.preventDefault(); // 阻止默认事件
    alert(i); // 在这里使用 alert 每次弹出的内容都为 10 。
  });
  document.body.appendChild(a);
}
//正确的写法:
/**
 * 1. 我们在这个 for 循环里面包了一层, 将这个 j 传入进去, 作为函数作用域的一个变量 。
 * 2. 比如 j = 0 的时候, 我们进行了一个执行, 在函数里面存了一个 j 为 0 ...
 * 3. 这里 for 循环执行了 10 次, 相当于声明了 10 函数 。
 */
var j
for (var j = 0; j < 10; j++) {
  (
    function(j) {
      var a = document.createElement('a');
      a.innerHTML = j + '创建 10 个 a 标签的点击事件' + '<br>'
      a.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认事件
        alert(j);
      });
      document.body.appendChild(a);
    })(j)
}


/**
 * 4. 如何理解 作用域。
 *    1. 自由变量
 *    2. 作用域链, 即 自由变量 的查找 。
 *    3. 闭包的两个场景
 */


/**
 * 5. 实际开发中闭包的应用。
 *    1. 闭包实际应用中主要用于 封装变量 / 收俭权限
 *
 * 1. 将存储 10 / 20 的这些数据源给封装起来, 除了这个函数内部, 其它地方时拿不到 _list 的, 我们不可能通过他去修改 。
 */

// 这个函数判断是否是第一次加载 (检查是否已经存在过了) 。
function isFirstLoad() {
  var _list = []; // 变量命名的时候, 如果前面带有 _, 表示这个变量时私有的; 即其它人不能使用, 只能在当前函数中使用 。
  return function (id) {
    console.log('_list.indexOf(id):  ', _list.indexOf)
    if (_list.indexOf(id) >= 0) { // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置 。
      return false // 在大多数情况下, 为事件处理函数返回 false, 可以防止默认的事件行为 。 例如: 默认情况下点击一个<a>元素, 页面会跳转到该元素 href 属性指定的页 。 js 中 return false 作用一般是用来 取消默认动作 / 阻止提交表单 / 阻止继续执行下面的代码 。
    } else {
      _list.push(id);
      console.log('_list     -- else: ', _list)
      return true // return true  返回正确的处理结果, 就相当于执行符 。
    }
  }
}
//使用
var firstLoad = isFirstLoad();
firstLoad(10); // true
firstLoad(10); // false
firstLoad(20); // true
firstLoad(20); // false
firstLoad(30); // true
firstLoad(30); // false

