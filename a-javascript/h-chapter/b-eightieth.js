/**
 * 1. 运行环境: 页面加载
 *
 * 1. 加载资源的形式 。
 * 2. 加载资源的过程是什么 ？
 * 3. 浏览器渲染页面的过程是什么 ？
 * 4. DOM Tree 与 RenderTree 的区别是
 */

/**
 * 1. 面试题目:
 *
 * 1. 从输入 url 到得到 html 页面的详细过程 。
 * 2. window.onload 和 DOMContentLoaded 的区别 。
 */

/**
 * 1. 面试题目: 从输入 url 到得到 html 页面的详细过程
 *
 * 1. 浏览器根据 DNS 服务器得到域名的 IP 地址 。
 * 2. 向这个 IP 地址发送 http 请求 。
 * 3. 服务器收到, 处理并返回 http 请求 。
 * 4. 浏览器得到返回的内容 。
 */

/**
 * 1. 知识点:
 *
 * 1. 加载资源的形式 。
 * 2. 加载资源的过程是什么 ？
 * 3. 浏览器渲染页面的过程是什么 ？
 *
 */

/**
 * 1. 加载资源的形式: 两种形式
 *
 * 1. 输入 url (或者跳转页面) 加载 html 。
 *    1. http://conding.mimooc.com
 * 2. 加载 html 中的静态资源 。
 *    1. <script src="/static/js/jquery.js"></script>
 *    2. css 文件 、 图片 、 视频 、 字体文件 等。
 */


/**
 * 2. 加载资源的过程是什么 (从输入 url 到得到 html 页面的详细过程):
 *
 * 1. 浏览器根据 DNS 服务器得到域名 (域名: baidu.com)的 IP 地址 。
 *    1. 计算机是不认识这个域名的, 但是他可以通过 DNS 服务器来解析出 baidu.com 要对应的 IP 地址是什么 。
 *    2. IP 地址 计算机是能够识别的, 因为一台电脑 (服务器) 只有一个 IP 地址 。
 *
 * 2. 向这个 IP 的机器发送 http 请求 。
 *
 * 3. 服务器收到、 处理并返回 http 请求 (返回的可能是一个图片, 也可能是 html 的代码)。
 *
 * 4. 浏览器得到返回内容 (这是一个闭环, 浏览器发出, 浏览器接受内容)。
 */


/**
 * 3. 浏览器渲染页面的过程是什么 (从输入 url 到得到 html 页面的详细过程):
 *
 * 1. 根据 HTML (字符串) 结构, 生成 DOM Tree 。
 *
 * 2. 根据 CSS 生成 CSSOM (将 css 静态的代码, 进行了一个结构化出的处理)。
 *    1. 当我们的 css 解析完成之后, 浏览器已经知道各个标签的样式, 再对 HTML 进行渲染的时候, 在已知样式的情况下会一次性渲染出来 。
 *    2. 我们一般都是将 CSS 放在 head 中, 这样加载完 CSS 之后, 浏览器直接指导规则, 再渲染 body 中的 Dom 节点的时候, 就会把 CSS 规则考虑进去, 直接进行渲染 。
 *    3. 如果我们将 CSS 放在 body 后面, 那么在渲染 body 中的 Dom 节点的时候, 就会按照默认样式来渲染; 然后渲染到我们的 CSS 的时候, 发现 Dom 节点有样式设置, 就会对 body 中的 Dom 节点再进行重新渲染; 这样会造成跳动, 闪动, 卡屏等现象, 用户体验极差; 这样性能下降(一次渲染就能解决的事情, 渲染了两次) 。
 *
 * 3. 将 DOM 与 CSSOM 整合为 RenderTree (渲染树) 。
 *    1. DOM Tree 与 RenderTree 的区别是:
 *      1. DOM Tree 只是一个树形结构, 没有规定 DOM 每个节点的样式是什么。
 *      2. RenderTree 与 DOM Tree 在结构上是一样的, 但是 RenderTree 每个节点上的样式 如: 长 、 宽 等 。
 *
 * 4. 浏览器根据 RenderTree 开始渲染和展示 。
 *
 * 5. 遇到 <script> 时, 会执行并阻塞渲染 。
 *    1. 为什么 <script></script> 会阻塞渲染, 因为 <script> 能够改变 DOM 结构 。
 *    2. <script> 改变 DOM 结构的优先级比 CSS 的优先级高 (也就是比 RenderTree 高)。
 *    3. 渲染是一个数据的流程; JS 是单线程的; 有可能拿不到标签元素 。
 */



/**
 * 1. window.onload 和 DOMContentLoaded 的区别 。
 *
 * 1. window.onload: 页面的全部资源加载完才会执行, 包括图片、 视频等 。
 * 2. DOMContentLoaded: DOM 渲染完即可, 此时图片、 视频可能还没有加载完 。
 */
/**
 * 1. window.onload 和 DOMContentLoaded 的区别
 */
// window.onload (不推荐使用)
window.addEventListener('load', function() {
  // 页面的全部资源加载完才会执行, 包括图片、 视频等 。
  // 图片、 视频 属于异步加载 。
});

// DOMContentLoaded (推荐使用)
document.addEventListener('DOMContentLoaded', function() {
  // DOM 渲染完即可, 此时图片、 视频可能还没有加载完 。
});
