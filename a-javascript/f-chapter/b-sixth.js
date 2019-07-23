/**
 * 1. JS-Web-API: 事件绑定
 *
 * 1. 通用事件绑定
 * 2. 简单的通用事件绑定封装
 * 3. 阻止默认行为
 * 4. 关于 IE 低版本的兼容性
 * 5. 事件冒泡
 * 6. 阻止冒泡
 * 7. 事件捕获
 * 8. 事件触发的顺序
 * 9. 代理
 *    1. 代理的好处
 * 10. 搜索自动提示功能 JS 优化
 */

/**
 * 1. 通用事件绑定:
 *
 * 1. 阻止默认行为:
 *    1. preventDefault(): 阻止默认行为 (比如防止点击 a 标签的时候页面跳转)
 */
// 普通函数的使用
var btn = document.getElementById('btn1');
btn.addEventListener('click', function(event) {
  console.log('普通的事件绑定 -- 按钮 : ');
});
// 简单的通用事件绑定封装
function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn);
}
// 通用事件绑定的使用
var btnP = document.getElementById('btn2');
bindEvent(btnP, 'click', function(e) {
  e.preventDefault(); // 阻止默认行为 (比如防止点击 a 标签的时候页面跳转)
  alert('通用事件绑定 -- 的使用');
});



/**
 * 2. 关于 IE 低版本的兼容性
 *
 * 1. IE 低版本使用 attachEvent 绑定事件， 和 W3C 的标准不一样 。
 * 2. IE 低版本使用量已经非常少了， 很多网站都早已经不支持 (edge 新浏览器 -- 微软) 。
 * 3. IE 低版本了解即可, 无需深究 。
 * 4. 如遇到对 IE 低版本 要求苛刻的面试, 果断放弃 。
 */


/**
 * 3. 事件(https://www.cnblogs.com/guangshan/p/4529384.html):
 *  1. 事件传递: 有两种方式 -> 冒泡 / 捕获
 *     window.addEventListener('click', function(){
 *       console.log('1   windown captrue')
 *       // 设置为 true, 表明它是在 捕获 阶段触发; 设置为 false 表明它是在 冒泡 阶段触发 。
 *     }, true);
 *  2. 事件冒泡 的概念:
 *     1. 事件从 dom 树的底层, 层层往上传递, 直至传递到 dom 的根节点
 *     2. 所有现代浏览器都支持事件冒泡, 但在具体实现在还是有一些差别 。 IE9、Firefox、Chrome、Safari 将事件一直冒泡到 window 对象 。
 *  3. 事件冒泡的流程:
 *     1. DOM 树形结构
 *     2. 冒泡
 *     3. 阻止冒泡
 *     4. 冒泡的应用
 *  4. 事件捕获 的概念:
 *     1. 事件捕获的思想是: window 对象应该更早接收到事件, 而最具体的节点应该最后接收到事件 。 事件捕获的用意在于在事件到达预定目标之前就捕获它 。
 *     2. addEventListener() 方法中的第三个参数是指在冒泡阶段还是捕获阶段处理事件处理程序, 设置为 true 时, 即为捕获阶段; 默认为 false 冒泡阶段 。
 *  5. 事件触发的顺序:
 *     1. 在 冒泡 中, 内部元素的事件会先被触发, 然后再触发外部元素 。
 *     2. 在 捕获 中, 外部元素的事件会先被触发, 然后才会触发内部元素的事件 。
 *
 *
 * 1. 事件是从子节点向父节点一层一层向外触发的 (点击子节点的时候, 先执行子节点的事件, 然后再执行父节点上的事件(如果没有就没有了, 也就是没有事件执行) 。
 *
 * 2. 阻止冒泡:
 *    1. stopPropagation 阻止冒泡, 我们不让它向上执行其它元素上的事件 。
 */
window.addEventListener('click', function(){
    console.log('1   windown captrue')
// 设置为 true, 表明它是在 捕获 阶段触发; 设置为 false 表明它是在 冒泡 阶段触发 。
}, true);

var p1 = document.getElementById('p1');
var body = document.getElementById('div1');
bindEvent(p1, 'click', function(e) {
  e.stopPropagation(); // 阻止冒泡, 我们不让它向上执行其它元素上的事件 。
  alert('激活');
});
bindEvent(body, 'click', function(e) {
  alert('取消');
});

/**
 * 4. 代理:
 *
 * 1. 代理的好处:
 *    1. 代码简洁 。
 *    2. 减少浏览器内存占用 。
 *
 * 2. 事件触发点:
 *    1. target: 虽然我们的事件监听是在父元素 div 上, 但是 target 能够告诉我们点击是从哪里触发的 。
 */
var div3 = document.getElementById('div3');
div3.addEventListener('click', function(e) {
  var target = e.target; // 虽然我们的事件监听是在父元素 div 上, target 能够告诉我们点击是从哪里触发的 。
  console.log('target.nodeName :::', target.nodeName);

  if (target.nodeName === 'A') {
  // if (target.nodeName.toLowerCase === 'a') { // 使用 toLowerCase 转化成小写之后， 里面的内容不执行了 。
    console.log('target :  ', target)
    alert(target.innerHTML);
  }
});


// 完善我们通用绑定事件的函数
function bindEventOk(elem, type, selector, fn) { // selector 选择器
  if (fn == null) { // 兼容没有代理的情况 (如果我们不使用代理, selector 这个参数就没有用了, 没有用也不能空着)
    fn = selector // selector 可以变成 fn 传入; fn 与 selector 的位置坐了一下调换 。
    selector = null
  }
  elem.addEventListener(type, function(e) {
    var target
    if (selector) { // selector 有值, 说明它是有代理的 。
      target = e.target
      if (target.matches(selector)) { // matches 是否符合我们传入的代理的这个目标的元素; selector: css 选择器
        // 代理
        fn.call(target, e);
      }
    } else {
        // 不是代理
        fn(e);
      }
  });
}
// 使用代理
var div4 = document.getElementById('div4');
bindEventOk(div4, 'click', 'a', function(e) {
  e.preventDefault();
  // 这里为什么使用 this : 我们虽然使用的是 div 做的事件绑定, 通过代理事件触发的源头是 a 标签, 如果不使用 this 我们无法拿到 a 标签;
  // fn.call(target, e): 这一句的 call 的第一个参数在这里就可以当做 this 来使用, target 就是事件触发的目标 。
  // console.log(this.innerHTML);
  // alert(this.innerHTML)
});

// 不使用代理
var noDai = document.getElementById('noDai');
bindEventOk(noDai, 'click', function(e) {
  console.log(noDai.innerHTML);
});


/**
 * 1.
 *
 * 1. ajax 调用做下延迟执行
 * 2. ajax 请求到的内容作缓存
 */
$.ajax({
  type: "get",
  url: 'http://xxx.com/xxx/xxx?',
  dataType: "jsonp",
  data:"Keyword=" + encodeURIComponent(inputvalue),
  jsonp: "Jsoncallback",
  jsonpCallback:"askTag",//任意值, 即 jsoncallback 后的值
  success: function (data) {
    // 显示自动提示框, 给框里填关联词条的内容
  },
  error: function () {
    // alert('返回失败!');
  }
});


// ajax调用做下延迟执行
var timeout = 0;
$('input').keyup(function(){
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    $.ajax({
      // ...
    });
  },200);
});


// ajax 请求到的内容作缓存
var timeout = 0;
var ajaxCache = {}; // 定义缓存对象
$('input').keyup(function(){
  var inputValue = $(this).val();
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    if(!!ajaxCache[inputValue]){
      // 显示自动提示框, 给框里填关联词条的内容
    }else{
      $.ajax({
        success:function(data){
          //显示自动提示框, 给框里填关联词条的内容
          ajaxCache[inputValue]=[];
          ajaxCache[inputValue]=data; // 给缓存对象赋值
        }
      });
    }
  },200);
});


/**
 * 1. 常用的 JS 事件:
 *
 * 1. onchange 当对象或选中区的内容改变时触发 。
 * 2. onclick 在用户用鼠标左键单击对象时触发 。
 * 3. ondblclick 当用户双击对象时触发 。
 * 4. ondrag 当进行拖曳操作时在源对象上持续触发 。
 * 5. onfocus 当对象获得焦点时触发 。
 * 6. onload 在浏览器完成对象的装载后立即触发 。
 * 7. onresize 当对象的大小将要改变时触发 。
 * 8. onscroll 当用户滚动对象的滚动条时触发 。
 * 9. onstop 当用户单击停止按钮或离开 Web 页面时触发 。
 * 10. onsubmit 当表单将要被提交时触发 。
 */


/**
 *
onabort 当用户中断下载图像时触发 。
onactivate 当对象设置为活动元素时触发 。
onafterprint 对象所关联的文档打印或打印预览后立即在对象上触发 。
onafterupdate 当成功更新数据源对象中的关联对象后在数据绑定对象上触发 。
onbeforeactivate new 对象要被设置为当前元素前立即触发 。
onbeforecopy 当选中区复制到系统剪贴板之前在源对象触发 。
onbeforecut 当选中区从文档中删除之前在源对象触发 。
onbeforedeactivate 在 activeElement 从当前对象变为父文档其它对象之前立即触发 。
onbeforeeditfocus 在包含于可编辑元素内的对象进入用户界面激活状态前或可编辑容器变成控件选中区前触发 。
onbeforepaste 在选中区从系统剪贴板粘贴到文档前在目标对象上触发 。
onbeforeprint 对象的关联文档打印或打印预览前在对象上触发 。
onbeforeunload 在页面将要被卸载前触发 。
onbeforeupdate 当成功更新数据源对象中的关联对象前在数据绑定对象上触发 。
onblur 在对象失去输入焦点时触发 。
onbounce 当 marquee 对象的 behavior 属性设置为“alternate”且字幕的内容到达窗口一边时触发 。
oncellchange 在数据供应者中的数据变更时触发 。
// onchange 当对象或选中区的内容改变时触发 。
// onclick 在用户用鼠标左键单击对象时触发 。
oncontextmenu 在用户使用鼠标右键单击客户区打开上下文菜单时触发 。
oncontrolselect 当用户将要对该对象制作一个控件选中区时触发 。
oncopy 当用户复制对象或选中区，将其添加到系统剪贴板上时在源元素上触发 。
oncut 当对象或选中区从文档中删除并添加到系统剪贴板上时在源元素上触发 。
ondataavailable 每当异步传输数据的数据源对象的数据到达时触发 。
ondatasetchanged 当数据源对象对应的数据集发生变更时触发 。
ondatasetcomplete 触发就表明数据源对象所有数据都可用 。
// ondblclick 当用户双击对象时触发 。
ondeactivate 当 activeElement 从当前对象变为父文档其它对象时触发 。
// ondrag 当进行拖曳操作时在源对象上持续触发 。
ondragend 当用户在拖曳操作结束后释放鼠标时在源对象上触发 。
ondragenter 当用户拖曳对象到一个合法拖曳目标时在目标元素上触发 。
ondragleave 当用户在拖曳操作过程中将鼠标移出合法拖曳目标时在目标对象上触发 。
ondragover 当用户拖曳对象划过合法拖曳目标时持续在目标元素上触发 。
ondragstart 当用户开始拖曳文本选中区或选中对象时在源对象上触发 。
ondrop 当鼠标按钮在拖曳操作过程中释放时在目标对象上触发 。
onerror 当对象装载过程中发生错误时触发 。
onerrorupdate 更新数据源对象中的关联数据出错时在数据绑定对象上触发 。
onfilterchange 当可视滤镜更改状态或完成转换时触发 。
onfinish 当字幕循环完成后触发 。
// onfocus 当对象获得焦点时触发 。
onfocusin new 当元素将要被设置为焦点之前触发 。
onfocusout new 在移动焦点到其它元素之后立即触发于当前拥有焦点的元素上触发 。
onhelp 当用户在浏览器为当前窗口时按 F1 键时触发 。
onkeydown 当用户按下键盘按键时触发 。
onkeypress 当用户按下字面键时触发 。
onkeyup 当用户释放键盘按键时触发 。
onlayoutcomplete 当打印或打印预览版面处理完成用来自于源文档的内容填充当前 LayoutRect 对象时触发 。
// onload 在浏览器完成对象的装载后立即触发 。
onlosecapture 当对象失去鼠标捕捉时触发 。
onmousedown 当用户用任何鼠标按钮单击对象时触发 。
onmouseenter 当用户将鼠标指针移动到对象内时触发 。
onmouseleave 当用户将鼠标指针移出对象边界时触发 。
onmousemove 当用户将鼠标划过对象时触发 。
onmouseout 当用户将鼠标指针移出对象边界时触发 。
onmouseover 当用户将鼠标指针移动到对象内时触发 。
onmouseup 当用户在鼠标位于对象之上时释放鼠标按钮时触发 。
onmousewheel new 当鼠标滚轮按钮旋转时触发 。
onmove 当对象移动时触发 。
onmoveend 当对象停止移动时触发 。
onmovestart 当对象开始移动时触发 。
onpaste 当用户粘贴数据以便从系统剪贴板向文档传送数据时在目标对象上触发 。
onpropertychange 当在对象上发生对象上发生属性更改时触发 。
onreadystatechange 当对象状态变更时触发 。
onreset 当用户重置表单时触发 。
// onresize 当对象的大小将要改变时触发 。
onresizeend 当用户更改完控件选中区中对象的尺寸时触发 。
onresizestart 当用户开始更改控件选中区中对象的尺寸时触发。
onrowenter 触发就表明当前行已经在数据源中更改，对象上有可用的新数据值。
onrowexit 当数据源控件更改对象当前行前触发。
onrowsdelete 当行将要从记录集中被删除时触发。
onrowsinserted 当在当前记录集中插入新行后触发。
// onscroll 当用户滚动对象的滚动条时触发。
onselect 当当前选中区改变时触发。
onselectionchange 当文档的选中状态改变时触发。
onselectstart 对象将要被选中时触发。
onstart 在 marquee 对象的每次循环开始时触发。
onstop 当用户单击停止按钮或离开 Web 页面时触发。
onsubmit 当表单将要被提交时触发。
 */
