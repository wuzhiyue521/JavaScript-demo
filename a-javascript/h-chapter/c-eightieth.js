/**
 * 1. 运行环境: 性能优化
 */


/**
 * 1. 性能优化是一个综合性的问题, 没有标准答案 。
 *
 * 2. 性能优化的原则:
 *    1. 多使用内存 、 缓存或者其他方法 。
 *    2. 减少 CPU 计算, 减少网络 。
 */


/**
 * 1. 性能优化, 从哪里入手？
 *    1. 加载页面和静态资源 (怎么把资源、 把代码更快的拿下来)。
 *    2. 页面渲染 (页面的一些操作响应更快)。
 */

/**
 * 1. 加载资源的优化:
 *    1. 静态资源的压缩合并 。
 *    2. 静态资源的缓存 。
 *    3. 使用 CDN 让资源加载更快 。
 *    4. 使用 SRR 后端渲染, 数据直接输出到 HTML 中 。
 *
 *
 * 1. 静态资源的合并压缩 。
 *    1. 把多个文件合并成为一个文件, 然后再进行压缩 (例如: 3 个 JS 文件, 每个文件都请求一次, 需要花费 3 次请求, 每一次请求都是需要花费时间的, 如果将这 3 个 JS 文件合并成为一个话, 只需要花费一次请求, 那就节省了很多时间)。
 *
 * 2. 静态资源缓存 。
 *    1. 例如: 我们一直使用 JQ 文件, 我们就没有必要每次都去服务器去请求, 我们可以使用本地缓存, 这个是浏览器的策略; 但是我们修改了 JQ 的名字如版本, 这个时候本地缓存中是没有这个文件的, 那就需要再次去服务器请求文件资源 。
 *    2. 缓存的方法:
 *        1. 通过连接名称缓存: <script src="abc_1.js"></script> , 只有内容改变的时候, 连接名称才会改变, <script src="abc_2.js"></script>
 *
 * 3. 使用 CDN , 让资源加载更快 。
 *    1. CDN 是不同区域的网络优化, 比如我们在北京访问一个地址, CDN 会转到离北京较近的地方去下载请求资源; 如果没有 CDN , 并且我们的服务器还是在杭州, 没有其它地方的服务器, 距离比较远, 经过的路由器就比较多, 响应速度就会比较慢 。
 *    2. 使用 CDN 示例:
 *        1. <link href="https://cdn.bootcss/bootstrap/4.0.0-alpha.6/css/bootstrap.css"></link>
 *        2. <script src="https://cdn.bootcss/bootstrap/zepto/1.0rc1/zepto.main.js"></script>
 *    3. CDN 使用的得当的话, 会比我们去服务器上请求资源要快的多 。
 *
 * 4. 使用 SRR 后端渲染, 数据直接输出到 HTML 中 。
 *    1. SSR:  这个概念是在 react / vue 出来之后才提出来的这个概念, 其实在很早之前也就是有网页的时候就有这个 SSR 的功能, SSR 的意思就是服务端渲染, 最早是用 JSP / PHP / ASP 写页面的时候, 他就是一个后端渲染 。
 *    2. 现在 react / vue 提出的 SSR 概念 。
 *    3. 其实最早的 JSP / PHP / ASP 都属于后端渲染 。
 *    4. SSR 可以把数据直接渲染到 HTML 中, 浏览器直接拿到直接渲染, 没有必要 ajax 再去把数据请求一遍 。
 */


/**
 * 2. 页面渲染优化:
 *    1. CSS 放前, JS 放后 。
 *    2. 懒加载 (图片懒加载 / 下拉加载更多) 。
 *    3. 减少 DOM 查询, 对 DOM 查询做缓存 。
 *    4. 减少 DOM 操作, 多个操作尽量合并在一起 。
 *    5. 事件节流 。
 *    6. 尽早执行操作 。
 *
 *
 * 2. 懒加载 (图片懒加载 、 下拉加载更多) 。
 *    1. 懒加载示例:
 *        1. <img id="img1" src="prview.png" data-realsrc="abc.png" />
 *            1. src="prview.png" 默认情况下显示的图片, 非常的小 。
 *            2. data-realsrc="abc.png" 这里才是我们真正要显示的图片 。
 *        2. <script>
 *              var img1 = document.getElementById('img1')
 *              img1.src = img1.getAttribute('data-realsrc') // 将图片的 src 赋值为 data-realsrc
 *           </script>
 *
 * 3. 减少 DOM 查询, 对 DOM 查询做缓存 。
 *    1. 未缓存 DOM 查询:
 *          1. 这里的每一次循环, 都要做一次节点的查询 。
 *        var i
 *        for(var i = 0, i < document.getElementByTagName('p'), i++) {
 *          // todo
 *        }
 *    2. 缓存了 DOM 查询:
 *          1. pList 这里做的操作, 就是将我们查询到的节点做了缓存; 当我们下面 for 循环查询的时候, 只需要在 缓存的pList 中取就可以了 。
 *        var pList = document.getElementByTagName('p')
 *        var i
 *        for(var i = 0, i < pList.length, i++) {
 *          // todo
 *        }
 *
 * 4. 减少 DOM 操作, 多个操作尽量合并在一起 。
 *    1. 合并 DOM 插入:
 *        var listNode = document.getElementById('list')
 *        // 要插入 10 个 li 标签 。
 *        var frag = document.createDocumentFragment() // createDocumentFragment 创建一个新的空白的文档片段; frag 是一个指向空 DocumentFragment 对象的引用 ( 调用多次 document.body.append(),每次都要刷新页面一次。 )。
 *        var x, li
 *        for(x = 0; x < 10; x++) {
 *          li = document.creatElement('li')
 *          li.innerHTML = "list item" + x
 *          frag.appendChild(li)
 *        }
 *        listNode.appendChild(frag)
 *    2. createDocumentFragment 只触发一次就可以了 。
 *
 * 5. 事件节流 。
 *    1. 事件节流示例:
 *        var textarea = document.getElementById('text')
 *        var timeoutId
 *        textarea.addEventListener('keyup', function() {
 *          if(timeoutId) { // 如果 input 输入框有内容, 就清空 。
 *            clearTimeout(timeoutId)
 *          }
 *          timeoutId = setTimeout(function() { // 这里对 timeoutId 进行重新赋值 。
 *            // 触发 change 事件 。
 *          }, 1000)
 *        })
 *    2. input 输入框, 使用 keyup 键盘点击抬起的时候, 如果我们只监听 keyup 事件, 那么我们每次点击都会触发, 会造成不必要的事件执行浪费,
 *
 * 6. 尽早执行操作(如: DOMContentLoaded)
 */