/**
 * 1. 事件 - ajax: 存储:
 */

/**
 * 1. 面试题目:
 *
 * 1. 描述 cookie , sessionStorage , localStorage 的区别 ？
 *
 * 1. cookie 是在 html5 之前经常使用的本地存储的方法; cookie 用于客户端和服务端  '通信', 它是 http 协议的一部分; cookie 不是 html 标准的内容, cookie 是 http 标准的一个内容; cookie 是有本地存储功能, 但是实际上属于被借用的状态; cookie 使用 document.cookie = ... 获取和修改 。
 * 2. cookie 用于存储的缺点:
 *    1. 存储量太小, 只有 4kb (为什么 cookie 只有 4kb, 因为每次请求都会把 cookie 带上去, 当 cookie 过大的时候, 会导致这个请求的体积变得很大, 请求的体积变得很大的时候, 可能就会导致请求会很慢)。
 *    2. 所有 http 请求都会带着 cookie, 会影响获取资源的效率 。
 *    3. API 过于简单, 需要封装才能使用 document.cookie = ...
 *
 *
 * 3. sessionStorage, localStorage 是在 html5 出来之后的一个标准。
 * 4. sessionStorage, localStorage 是 HTML5 专门为存储而设计的, 最大容量 5M (sessionStorage, localStorage 每次请求的时候不会跟随 http 发送过去, 没有请求的拖累, 所以它的容量才会达到 5M) 。
 * 5. sessionStorage, localStorage API 简单易用:
 *    1. localStorage.setItem(key, value)  存入
 *    2. localStorage.getItem(key)  获取
 * 6. sessionStorage, localStorage 值得注意的知识点:
 *    1. iOS, safari 在 隐藏模式 / 隐私模式 / 无痕模式 下, 通过 loaclStorage.getItem(key)  获取会报错.
 *    2. 隐藏模式 / 隐私模式 / 无痕模式 浏览器不允许存储用户的信息
 *    3. 建议使用, try-catch 去封装。
 *
 * 7. 解答方向:
 *    1. 容量。
 *    2. 是否会携带到 ajax 中。
 *    3. API 的易用性。
 *    4. localStorage 浏览器不会主动清除, sessionStorage 会随着每次会话的结束去清除 (在没有特殊要求如: 用户信息 / 登录状态 的话, 我们都会把它们存储在 localStorage 中)。
 */
