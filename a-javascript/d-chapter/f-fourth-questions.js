/**
 * 1. 第四章 - 日期 和 math随机数 : 面试题目解答
 */

/**
 * 1. 获取 当前 格式的日期 。
 */
function formaDate(dt) {
  if (!dt) {
    dt = new Date();
  }
  var year = dt.getFullYear();
  // 月份是 0 ~ 11 所以这里需要 + 1 。
  var month = dt.getMonth() + 1;
  var data = dt.getDate();
  if (month < 10) {
    // 强制类型转换
    month = '0' + month
  }
  if (data < 10) {
    // 强制类型转换
    data = '0' + data
  }
  // 强制类型转换
  return year + '-' + month + '-' + data
}
var dt = new Date(); // 获取当前日期对象
var restD = formaDate(dt);
console.log(restD);
console.log(year)


/**
 * 2. 获取随机数, 要求是长度一致的字符串格式 。
 */
var radom = Math.random();
var radom = radom + '0000000000'; // 保证这个数不少于 10 位。
var radom = radom.slice(0, 10); // 注意: 如果位数不够所截取的数目, 会报错。
console.log(radom);



/**
 * 3. 写一个能遍历 对象和数组 的通用 forEach 函数。
 */
function forEach(obj, fn) {
  var key
  // instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象的原型链中的任何位置
  // 语法: object instanceof constructor
  // object 要检测的对象.
  // constructor 某个构造函数

  // 准确判断 obj 是否是真的数组 。
  if (obj instanceof Array) {
    obj.forEach(function(item, index) {
      fn(index, item)
    })
  } else {
    // 不是数组就是对象
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] instanceof Array) {
          obj[key].forEach(function(item, index) {
            fn(index, item)
          })
        } else {
          fn(key, obj[key]);
        }
      }
    }
  }
}

var arr = ['a', 'b', 'c'];
// 注意这里的参数顺序换了, 为了和对象的遍历格式一样 。
forEach(arr, function(index, item) {
  console.log('数组: ', index, item);
});

var obj = {
  x: 100,
  y: 200,
  z: ['对象中的数组 1', '对象中的数组 2', '对象中的数组 3'],
  j: 300
}
// var obj = 3
forEach(obj, function(key, value) {
  console.log('对象: ', key, value);
})