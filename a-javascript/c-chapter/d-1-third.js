/**
 * 1. 函数
 *
 * 1. https://www.cnblogs.com/sunmyboke/p/10364507.html
 */



/**
 * 1. 函数 声明:
 *    1. function fnName () {…}
 *    2. 使用 function 关键字声明一个函数, 再指定一个函数名, 叫函数声明 。
 *
 * 2. 函数 表达式:
 *    1. var fnName = function () {…};
 *    2. 使用 function 关键字声明一个函数, 但未给函数命名;
 *    3. 最后将 匿名函数 赋予一个变量, 叫函数表达式, 这是最常见的函数表达式语法形式 。
 */


/**
 * 3. 匿名 函数:
 *
 * 1. 匿名函数 的基本形式为 ( function() {...} )() ;
 *    1. function () {};
 *    2. 前面的括号包含函数体, 后面的括号就是给匿名函数传递参数并立即执行之
 *    3. 匿名函数 的作用是避免 全局变量的污染 以及 函数名的冲突
 *    4. 匿名函数 属于 函数表达式, 匿名函数有很多作用, 赋予一个变量则创建函数; 赋予一个事件则成为 事件处理程序 或 创建闭包 等等 。
 *
 * 2. 匿名函数是一种在 运行时 动态声明的函数 。 它们之所以被称为匿名函数是因为不同于普通函数, 它们并没有函数名
 *
 * 3. 使用 function 关键字声明一个函数, 但未给函数命名, 所以叫匿名函数;
 *
 * 4. 具体的代码流程解析:
 *    1. 首先我们声明一个普通函数:
 *       1. 声明一个普通函数, 函数的名字叫 fn:
 *       2. function fn() {console.log("张培跃");}
 *    2. 然后将函数的名字去掉即是匿名函数:
 *       1. 匿名函数运行时, 你会发现报错啦！
 *       2. function() {console.log("张培跃");}
 *    3. 到此, 你会发现单独运行一个匿名函数, 由于不符合语法要求, 报错啦！
 *       1. 解决方法只需要给匿名函数包裹一个括号即可:
 *       2. 匿名函数在其它应用场景括号可以省略
 *       3. (function() {
 *            // 由于没有执行该匿名函数, 所以不会执行匿名函数体内的语句 。
 *            console.log("张培跃");
 *            }
 *          )
 *    4. 如果需要执行匿名函数, 在匿名函数后面加上一个括号即可立即执行！
 *       1. (function (){
 *            //此时会输出张培跃
 *            console.log("张培跃");
 *            }
 *          )()
 *    5. 倘若需要传值, 直接将参数写到括号内即可:
 *       1. (function (str){
 *            //此时会输出张培跃好帅！
 *            console.log("张培跃"+str);
 *            }
 *          )("好帅！")
 *
 * 5. 匿名函数 的应用场景:
 *    1. 事件:
 *        <input type="button" value="点我啊！" id="sub">
 *        <script>
 *          //获得按钮元素
 *          var sub=document.querySelector("#sub");
 *          //给按钮增加点击事件。
 *          sub.onclick = function() {
 *            alert("当点击按钮时会执行到我哦！");
 *          }
 *        </script>
 *    2. 对象:
 *        var obj={
 *          name:"张培跃",
 *          age:18,
 *          fn: function(){
 *            return "我叫"+this.name+"今年"+this.age+"岁了！";
 *          }
 *        };
 *        console.log(obj.fn()); // 我叫张培跃今年18岁了！
 *    3. 函数表达式:
 *        // 将匿名函数赋值给变量 fn 。
 *        var fn = function() {
 *          return "我是一只小小小小留下，怎么飞也飞不高！"
 *        }
 *        //调用方式与调用普通函数一样
 *        console.log(fn()); // 我是一只小小小小留下，怎么飞也飞不高！
 *    4. 回调函数:
 *        setInterval(function() {
 *          console.log("我其实是一个回调函数，每次1秒钟会被执行一次");
 *        }, 1000);
 *    5. 返回值:
 *        // 将匿名函数作为 返回值
 *        function fn(){
 *          //返回匿名函数
 *          return function(){
 *            return "张培跃";
 *          }
 *        }
 *        //调用匿名函数
 *        console.log(fn()()); // 张培跃
 *        //或 var box=fn(); console.log(box());//张培跃
 *
 * 6. 模仿块级作用域:
 *    1. 块级作用域, 有的地方称为私有作用域 。 JavaScript 中是没有块级作用域的 。
 *      1. 代码示例:
 *          if(1==1){
 *            //条件成立, 执行 if代 码块语句 。
 *            var a=12; // a为全局变量
 *          }
 *          console.log(a); // 12
 *          for(var i=0; i<3; i++) {
 *            console.log(i);
 *          }
 *          console.log(i); // 4
 *      2. if(){} / for(){} 等没有自己的作用域 。 如果有, 出了自己的作用域, 声明的变量就会立即被销毁了 。
 *    2. 可以通过匿名函数来模拟块级作用域:
 *      1. 代码示例:
 *        (function() {
 *          //这里是我们的块级作用域 (私有作用域)
 *        })();
 *    3. 尝试块级作用域:
 *        function fn(){
 *          (function(){
 *            var la="啦啦啦！";
 *          })();
 *          //报错---la is not defined
 *          console.log(la);
 *        }
 *        fn();
 *
 * 6. 匿名函数的作用:
 *    1. 通过匿名函数可以实现闭包 。 闭包是可以访问在函数作用域内定义的变量的函数 。 若要创建一个闭包, 往往都需要用到匿名函数 。
 *    2. 模拟块级作用域, 减少全局变量 。 执行完匿名函数, 存储在内存中相对应的变量会被销毁, 从而节省内存 。
 *    3. 在大型多人开发的项目中, 使用块级作用域, 会大大降低命名冲突的问题, 从而避免产生灾难性的后果 。
 *
 */