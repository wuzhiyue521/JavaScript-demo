/**
 * 1. 事件 - ajax: 跨域
 *
 * 1. 什么是跨域
 * 2. 同域的概念
 * 3. 同源策略
 * 4. 跨域的条件
 * 5. 可以跨域的 3 个标签
 * 6. 跨域的注意事项
 * 7. JSONP
 * 8. JSONP 的实现原理
 */

/**
 * 1. 什么是跨域？
 *
 * 1. 同域的概念: 简单的解释就是: 域名/端口/协议 相同 。
 * 2. 同源策略: 请求的url地址, 必须与浏览器上的 url 地址处于同域上; 也就是 域名, 端口, 协议 相同。
 *
 * 3. 浏览器对于 javascript 的同源策略的限制, 例如 a.cn 下面的js不能调用 b.cn 中的js, 对象或数据 (因为a.cn 和 b.cn是不同域); 所以跨域就出现了 。
 * 4. 浏览器有 同源策略, 不允许 ajax 访问其它域的接口 。
 * 5. 跨域的条件: 协议/域名/端口 有一个不同就算跨域 。
 *    1. 示例:
 *        http://www.yourname.com/page.html // 端口没有写的话, 默认就是 -- http: 协议默认是 80; https 协议 默认是 443
 *        http://m.imooc.com/course/ajaxcourserecom?cid=459
 *        *******************************************************
 *        http://www.yourname.com:80/page.html
 *        https://m.imooc.com:80/course/ajaxcourserecom?cid=459
 *    1. 协议: http / https
 *    2. 域名: www.yourname.com / m.imooc.com
 *    3. 端口: :80, 80 就是我们的端口
 *
 * 5. 如果浏览器对 javascript 没有同源策略的保护, 那么一些重要的机密网站将会很危险 。
 */

/**
 * 2. 可以跨域的 3 个标签: <link> / <img> / <script>
 *
 * 1. link: <link href="">
 *    1. 我们的网站完全可以加载其它域下面的 css 文件 。
 *    2. 使用场景: 可以使用 CDN, CND 也是其它域 。
 *
 * 2. img: <img src="xxx">
 *    1. 这里涉及到一个问题, 防盗链的问题 (图片的提供方做的防盗链的处理, 浏览器是没有这方面的限制的)。
 *    2. 防盗链原理: http 标准协议中有专门的字段记录 referer
 *      1. 他可以追溯到请求时从哪个网站链接过来的
 *      2. 来对于资源文件, 可以跟踪到包含显示他的网页地址是什么
 *      3. 因此所有防盗链方法都是基于这个 Referer 字段
 *    3. 实现防盗链的方法 (https://blog.csdn.net/likaibk/article/details/52879514):
 *      1. 一种是使用 apache 文件 FileMatch 限制, 在 httpd.conf 中增加 ( 其实也可以将把下面的语句存成一个 .htaccess文件), 并放到你的网站的根目录 (就是 www/html目录), 这样子别人就没有办法盗连你的东东了.
 *        SetEnvIfNoCase Referer "^http://yahoo.com/" local_ref=1
 *        Order Allow,Deny
 *         Allow from env=local_ref
 *        Allow from 127.0.0.1
 *        这种很方便禁止非允许访问 URL 引用各种资源文件
 *    2. 第二种是使用 rewrite, 需要增加 apache 的 mode_rewrite, 支持 .htaccess 文件目录权限限制; 在虚拟主机根目录增加 .htaccess 文件, 描述从定向, 把非本地地址 refer 的图片文件都从定向到警告图片或者警告网页上
 *      首先要确认你的服务器或空间的服务器解译引擎为 Apache2, 还有支持 .htaccess 客户设置文件
 *      如果你有自己的服务器就请先对 ./conf/httpd.conf 文件做以下修改
 *      找到：#LoadModule rewrite_module modules/mod_rewrite.so
 *      把前面的 # 给去丢
 *      找到等一个 AllowOverride None 改为 AllowOverride All
 *      重启 Apache2 服务器
 *  4. 使用场景: 用于打点统计, 统计网站可能是其它域 (img 没有兼容性问题)。
 *
 * 3. script: <script></script>
 *    1. 将其赋值成为一个其它域, 或者不同源的一个地址也是可以的 。
 *    2. 使用场景: 可以用于 JSONP(也就是跨域的数据请求)
 */


/**
 * 3. 跨域的注意事项:
 *
 * 1. 所有的跨域请求都必须经过信息提供方的允许 。
 * 2. 如果未经允许即可获取, 那是浏览器同源策略出现漏洞 。
 */


/**
 * 2. JSONP(对于前端开发者来说, 解决跨域的方法就是使用 JSONP)
 *
 * 1. JSONP 的实现原理 1:
 *    1. 加载: http://coding.m.imooc.com/classindex.html
 *    2. 不一定服务器端真有一个 classindex.html 文件。
 *    3. 服务器可以根据请求, 动态生成一个文件, 返回。
 *    4. 同理于 <script src="http://coding.m.omooc.com/api.js"></script> 在慕课网的服务器上也不一定真的存在 api.js 这个文件。
 *
 * 2. JSONP 的实现原理 2:
 *    1. 例如我们的网站要跨域访问慕课网的一个接口。
 *    2. 慕课给我们一个接口: http://coding.m.omooc.com/api.js
 *    3. 返回的内容格式如: callback({x: 100, y: 200}) (可动态生成)。
 *
 * 3. JSONP 的实现原理:
 *    1. ajax请求受同源策略影响, 不允许进行跨域请求, 而script标签src属性中的链接却可以访问跨域的js脚本, 利用这个特性, 服务端不再返回JSON格式的数据, 而是返回一段调用某个函数的js代码, 在src中进行了调用, 这样实现了跨域 。
 *    2. JSON返回的是一串数据, JSONP返回的是脚本代码(包含一个函数调用)。
 *    3. JSONP 只支持get请求, 不支持post请求 (类似往页面添加一个script标签, 通过src属性去触发对指定地址的请求, 故只能是Get请求)。
 */

// 我们这个地方已经定义了一个函数, <script src="http://coding.m.omooc.com/api.js"></script> 返回一个 js , 它又执行 callback({x: 100, y: 200}) 这个函数, 我们从对应的函数中就拿到了这个数据了; 所以说慕课网 http://coding.m.omooc.com/api.js 这个接口, 返回的什么数据, 我们从这个 callback 中就拿到什么数据。
// 重点是 <script> 可以绕过跨域的限制, 我们的网站虽说不是慕课网的地址, 但是我们可以请求慕课网的一个 js 文件,
window.callback = function(data) {
  // 这个是我们跨域得到的信息
  console.log(data);
}
/** <script src="http://coding.m.omooc.com/api.js"></script> */
// 以上返回 callback({x: 100, y: 200})

/**
 * 3. 服务器端设置 http header:
 *
 * 1. 另外一个解决跨域的简洁方法, 需要服务端来做。
 * 2. 但是作为交互方, 我们必须知道这个方法 。
 * 3. 是将来解决跨域问题的一个趋势 。
 */
// 不同后端语言的写法可能不一样
// 第二个参数填写允许跨域的域名称, 不建议直接写 *
response.setHeader("Access-Control-Allow-Origin", "http://a.com, http://b.com");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
// 接受跨域的 cookie
response.setHeader("Access-Control-Allow-Credentials", "true");