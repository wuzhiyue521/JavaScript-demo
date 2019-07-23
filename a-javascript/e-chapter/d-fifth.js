/**
 * 1. 第五章 - JS-Web-API: DOM 结构操作
 *
 * 1. 新增节点 (新增一个子节点)。
 * 2. 获取父元素(父节点)。
 * 3. 获取子元素(子节点)。
 * 4. 删除节点
 * 5. 补充: 递归 。
 */

/**
 * 1. DOM 结构: 一般简称为 DOM 树 。
 */

/**
 * 2. DOM 结构操作:
 *
 * 1. 新增节点 (新增一个子节点)。
 * 2. 获取父元素(父节点)。
 * 3. 获取子元素(子节点)。
 * 4. 删除节点
 */


/**
 * 1. 新增节点
 *
 * 1. 创建之后新增一个子节点 。
 * 2. 移动已有的节点 。
 */
var divShell = document.getElementById('shell');
// 新加节点:
var pCont = document.createElement('p');
pCont.innerHTML = 'createElement 新增节点';
divShell.appendChild(pCont); // 添加新创建的元素
// 移动已有的节点:
var pMove = document.getElementById('mov');
divShell.appendChild(pMove);



/**
 * 2. 获取父元素(父节点)
 */
// 获取父元素。
// var parentDom = divShell.parentElement; // 获取父元素。
var parentDom = divShell.parentNode; // 获取父元素 (parentNode 是 W3C 标准, 推荐使用这个)。
// var parentDom = divShell.parentElement.nodeName.toLowerCase(); // nodeName 元素的名字; toLowerCase() 转换为小写; toUpperCase() 转换为大写 。
console.log('获取父元素   :::', parentDom);



// 获取子元素
// 会把<div>   <p>两个标签之间的空白节点也解析出来 (将其当作空白文本)。 这里我们可以使用 nodeType (3 ， 1) / nodeName (#test ， '元素表签名')来规避这个现象
var childDom = divShell.childNodes;  // 获取子元素
childDom.forEach(function(item, index) {
  if (item.nodeName === 'P') {
    console.log('获取 全部 子元素   :::', item);
  }
})




// 获取第一个子元素
console.log('获取第一个子元素 方法一:  ', divShell.firstChild);
console.log('获取第一个子元素 方法二:  ', document.getElementById('contFir').firstElementChild);
console.log('获取第一个子元素 方法三:  ', document.getElementsByClassName('contF')[0].children[0]);



// 删除元素
divShell.removeChild(childDom[1]);
