
console.log(10000);

/**
 * 1. jq 的使用方式:
 */
var $ = require('jquery');
var aUtil = require('./a-util.js');

console.log('查看是否拿到 jq:  ', $);

/**
 * jq 的使用:
 */
var root = $('#root')
root.html('<p>这里是 jq 插入的 p 标签的内容</p>');

aUtil.print();