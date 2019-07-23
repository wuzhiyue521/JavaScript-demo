/**
 * 1. 第四章 - 日期 和 math 随机数
 *
 * 1. 日期
 * 2. math
 * 3. 数组 API
 * 4. 对象 API
 */

/**
 * 1. 面试题目:
 *
 * 1. 获取 2017-06-07 格式的日期。
 * 2. 获取随机数, 要求是长度一致的字符串格式。
 * 3. 写一个能遍历对象和数组的通用 forEach 函数。
 */

/**
 * 2. 知识点:
 *
 * 1. 日期
 * 2. math
 * 3. 数组 API
 * 4. 对象 API
 */

/**
 * 1. 日期
 */
Date.now(); // 获取当前时间毫秒数 (从 1970 年开始 毫秒时间是多少)
var t = new Date(); // new 一个 当前日期的对象 (体现出它是一个构造函数, 返回的是一个对象)。
t.getTime(); // 获取毫秒数
t.getFullYear(); // 年
t.getMonth(); // 月 (0 - 11)
t.getDate(); // 日 (0 - 31)
t.getHours(); // 小时 (0 - 23)
t.getMinutes(); // 分钟 (0 - 59)
t.getSeconds(); // 秒 (0 - 59)

t.getDay(); // 返回值是 0（周日） 到 6（周六） 之间的一个整数


console.log('获取当前时间毫秒数: ', Date.now());
console.log('当前日期的对象: ', t);
console.log('获取毫秒数: ', t.getTime());
console.log('年: ', t.getFullYear());
console.log('月: ', t.getMonth());
console.log('日: ', t.getDate());
console.log('小时: ', t.getHours());
console.log('分: ', t.getMinutes());
console.log('秒: ', t.getSeconds());


/**
 * 2. math
 *
 * 1. 获取随机数: Math.random()
 *    1. 返回的是 大于 0 小于 1 的一个小数 。
 *    2. 注意: 小数点的位数不固定。
 *    3. 主要用来清除缓存使用的 。
 *    4. 例如我们很频繁去访问一个链接, 如果这个链接服务端有缓存的话, 这个链接不变的话它会一直有缓存, 我们访问不到一个真实的效果, 如果我们在链接的后面加一个 random 的话, 他每次访问的 random 都会改变, 每次链接都不一样, 就会把缓存清除 。
 *       1. $.ajax({ // 清除缓存
 *            url:'test.php?'+parseInt(Math.random()*100000)
 *          })
 */
console.log('获取随机数: ', Math.random());
console.log('获取随机数: ', (Math.random()).toFixed(6)); // 截取小数点后六位 (处理结果会四舍五入)。
console.log('获取随机数: ', Math.round(0.50)); // 打印结果: 1 round() 方法, 可把一个数字舍入为最接近的整数 。
console.log('获取随机数: ', Math.floor(0.6)); // 打印结果: 0 floor() 方法, 可对一个数进行 下舍入 。


/**
 * 3. 数组 API
 *
 * 1. forEach 遍历所有元素 。
 * 2. every 判断所有元素是否都符合条件 。
 * 3. some 判断是否有至少一个元素符合条件 。
 * 4. sort 排序 (对数组的数字从小到大排序) 。
 * 5. map 对元素进行组装, 生成新数组 (例如有一个数字的数组, 然后我们想生成另外的一个数组, 对这个数组前后都加一个 <> 尖括号, 对元素进行重新组装, 生成一个新的数组)。
 * 6. filter 过滤符合条件的元素 (例如一个数组中全是数字, 大于 100 的过滤出来, 小于 100 的去除)。
 */

/**
 * 1. forEach 遍历所有元素。
 */
var arr = [1, 2, 3];
arr.forEach(function(item, index) { // 注意顺序: 规定先 item, 后 index 。
  // 遍历数组的所有元素
  console.log('数组: ', item, index); // 数组:  1 0  / 数组:  2 1  数组:  3 2
});


/**
 * 2. every
 */
var arr1 = [1, 2, 3];
var res = arr1.every(function(item, index) {
  // 用来判断所有的数组元素, 都满足一个条件。
  if (item < 4) {
    return true
  }
});
console.log('every1: ', res); // 打印结果: true

var arr2 = [1, 2, 3, 5];
var res = arr2.every(function(item, index) {
  // 用来判断所有的数组元素, 都满足一个条件 。
  if (item < 4) {
    return true
  }
});
console.log('every2: ', res); // 打印结果: false


/**
 * 3. some
 *    1. 相对 every 来说就比较友善一些 。
 */
var arr3 = [1, 2, 3];
var rest = arr3.some(function(item, index) {
  // 用来判断所有的数组元素, 只有一个满足条件即可 。
  if (item < 2) {
    return true
  }
});
console.log('some: ', rest); // 打印结果: true


/**
 * 4. sort
 */
var arr4 = [1, 4, 2, 5, 3];
var arrR = arr4.sort(function(a, b) {
  // 从小到大排序
  return a - b
  // 从大到小排序
  // return b - a
});
console.log('sort: ', arrR); // 打印结果: [1, 2, 3, 4, 5]

/**
 * 5. map
 */
var arr5 = [1, 2, 3, 4];
var arrN = arr5.map(function(item, index) {
  // 将元素重新组装并返回
  return '<b>' + item + '</b>'
});
console.log('map: ', arrN); // 打印结果: ["<b>1</b>", "<b>2</b>", "<b>3</b>", "<b>4</b>"]


/**
 * 6. filter
 */
var arr6 = [1, 2, 3];
var arrF = arr6.filter(function(item, index) {
  // 通过某一个条件过滤数组
  if (item >= 2) {
    return true
  }
});
console.log('filter: ', arrF); // 打印结果: [2, 3]




/**
 * 4. 对象 API
 */
var obj = {
  x: 100,
  y: 200,
  z: 300
}
var key
for (key in obj) {
  // 注意这里的 hasOwnProperty.
  // obj.hasOwnProperty(key) 我们要证明 x , y z 属性的名字, 是 obj 原声的名字, 而不是从原型中拿过来的属性, 所以这里做了一个判断 。
  if (obj.hasOwnProperty(key)) {
    // hasOwnProperty():  x 100  /  hasOwnProperty():  y 200   /   hasOwnProperty():  z 300
    console.log('hasOwnProperty(): ', key, obj[key]);
  }
}