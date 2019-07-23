/**
 * 1. 运行环境: 安全性
 */


/**
 * 1. 关于安全性的概述:
 *
 * 1. 安全性一般是后端来做, 如果是由前端来做安全性的问题, 那就是比较高级的东西 。
 * 2. 后端做安全: 防注入、 防攻击 的操作, 比如-> 数据库层面, 数据服务这个层面 。
 */


/**
 * 2. 前端安全性的常见方式:
 *
 * 1. XSS 跨站请求攻击 。
 * 2. XSRF 跨站请求伪造 。
 *
 * 1. 上面这两种常见的攻击方式, 由前端来预防算是比较鸡肋的方法, 还是有后端来防范、 前端来做一些接口方面的配合工作 。
 */


/**
 * 1. XSS 跨站请求攻击:
 *
 * 1. 举例说明:
 *    1. 在新浪博客写一篇文章, 同事偷偷插入一段 <script></script> 脚本。
 *    2. 在 <script> 攻击代码中, 获取 cookie, 发送到自己的服务器 。
 *    3. 发布博客, 有人查看博客内容 (在被浏览的时候, <script></script> 代码执行)。
 *    4. 会把查看者的 cookie 发送到攻击者的服务器 (获取 cookie (账号, 可能会有密码, 可能会有自己的敏感信息如手机号))。
 *
 * 2. 基本原理:
 *    1. 向这个网站输入东西的时候, 我们可以输入脚本, 脚本中有攻击代码, 就可以获取到一些用户信息, 发送到自己的服务器上 。
 *
 * 3. 预防方法:
 *    1. 前端替换关键字, 例如: < 替换为 &lt; > 替换为 &gt;
 *    2. 这里的替换工作前后端都可以替换, 但是前端替换并不是很好, 因为他会影响性能
 */
var data = "123123,213,<,12312,>,312,3,cat,dsfsdfs,";
alert(func(data));
function func(str) {
  var reg = /<|>/g;
  str = str.replace(reg,function($1){
    if($1=='<'){
      return '&lt;';
    }else{
      return '&gt;';
    }
  });
  return str;
}


/**
 * 2. XSRF 跨站请求伪造:
 *
 * 1. 举例说明:
 *    1. 你已经登陆一个购物网站, 正在浏览商品
 *    2. 该网站的付费接口是 xxx.com/apy?id=100 (id=100商品的 id号), 但是没有任何验证 。
 *    3. 然后你收到一封邮件, 隐藏着 <img src="xxx.com/pay?id=100" />
 *    4. 你查看邮件的时候, 就已经悄悄地付账购买了 。
 *
 * 2. 预防方法:
 *    1. 增加验证流程, 比如: 输入指纹 / 密码 / 短信验证 。
 *    2. 这些验证流程一般是后端来做, 前端来配合 。
 */

