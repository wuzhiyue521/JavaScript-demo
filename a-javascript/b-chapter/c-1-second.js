/**
 * 1. 深拷贝 与 浅拷贝
 *    1. https://www.cnblogs.com/echolun/p/7889848.html
 *    2. https://www.jianshu.com/p/cf1e9d7e94fb
 *
 */

/**
 * 1. 简单点来说, 就是假设B复制了A, 当修改A时, 看B是否会发生变化, 如果B也跟着变了, 说明这是浅拷贝;
 * 2. 如果B没变, 那就是深拷贝
 *
 * 1. 引入 基本数据类型 与 引用数据类型 的概念了
 *
 * 1. 基本数据类型有哪些:
 *    1. number / string / boolean / null / undefined / symbol 以及未来 ES10 新增的 BigInt (任意精度整数)七类
 *
 * 2. 引用数据类型(Object类):
 *    1. 有常规名值对的无序对象{a:1}, 数组[1,2,3], 以及函数等 。
 *    2. Object(Array, Date, RegExp, Function)
 *
 * 3. 两类数据存储:
 *       1. 基本类型--名值存储在 栈内存中
 *          1. 当你 b=a 复制时, 栈内存会 新开辟一个内存
 *          2. 所以当你此时修改 a=2, 对 b 并不会造成影响, 因为此时的 b 已自食其力, 翅膀硬了, 不受a的影响了; 当然, let a=1,b=a; 虽然b不受 a 影响, 但这也算不上深拷贝, 因为深拷贝本身只针对较为复杂的 object 类型数据。
 *       2. 引用数据类型--名 存在 栈内存中, 值 存在于 堆内存中
 *          1. 但是 栈内存 会提供一个 引用的地址 指向 堆内存中 的值
 *          2. 当 b=a 进行拷贝时, 其实复制的是 a 的引用地址, 而并非 堆 里面的值 。
 *          3. 当我们 a[0]=1 时进行数组修改时, 由于 a 与 b 指向的是同一个地址, 所以自然 b 也受了影响, 这就是所谓的 浅拷贝 。
 *
 * 4. 要是在 堆内存中 也开辟一个新的内存专门为 b 存放值, 就像基本类型那样, 岂不就达到深拷贝的效果了 。
 *
 * 5. 了解深拷贝也不仅仅是为了了解, 在实际开发中也是非常有用的 。
 *    1. 例如后台返回了一堆数据, 你需要对这堆数据做操作, 但多人开发情况下, 你是没办法明确这堆数据是否有其它功能也需要使用, 直接修改可能会造成隐性问题, 深拷贝能帮你更安全安心的去操作数据, 根据实际情况来使用深拷贝, 大概就是这个意思 。
 */


/**
 * 1. 基本数据类型 和 引用数据类型 的区别
 *    1. 保存位置不同: 基本数据类型 保存在 栈内存中; 引用数据类型保存在堆内存中, 然后在 栈内存中 保存了一个对堆内存中实际对象的引用, 即数据在 堆内存中 的地址, JS对 引用数据类型 的操作都是操作对象的引用而不是实际的对象, 如果obj1拷贝了obj2, 那么这两个引用数据类型就指向了同一个堆内存对象, 具体操作是obj1将栈内存的引用地址复制了一份给obj2, 因而它们共同指向了一个堆内存对象;
 *       1. 为什么基本数据类型保存在栈中, 而引用数据类型保存在堆中
 *          1. 堆 比 栈 大, 栈 比 堆 速度快；
 *          2. 基本数据类型比较稳定, 而且相对来说占用的内存小;
 *          3. 引用数据类型大小是动态的, 而且是无限的, 引用值的大小会改变, 不能把它放在栈中, 否则会降低变量查找的速度; 因此放在变量栈空间的值是该对象存储在堆中的地址, 地址的大小是固定的, 所以把它存储在 栈 中对变量性能无任何负面影响；
 *          4. 堆内存 是无序存储, 可以根据引用直接获取;
 *    2. 基本数据类型使用 typeof 可以返回其基本数据类型, 但是 NULL 类型会返回 object, 因此 null 值表示一个空对象指针; 引用数据类型使用 typeof 会返回 object, 此时需要使用 instanceof 来检测引用数据类型;
 *    3. 定义 引用数据类型 需要使用 new 操作符, 后面再跟一个构造函数来创建;
 *       1. 使用 new 操作符创建对象
 *          var obj1 = new Object();
 *          obj1.a = 1;
 *       2. 使用对象字面量表示法创建对象
 *          var obj1 = {
 *            a: 1,
 *            b: 2
 *          }
 *       3. 可以通过点表示法访问对象的属性，也可以使用方括号表示法来访问对象的属性
 */


/**
 * 1. 浅拷贝例子:
 */
let a=[0,1,2,3,4], b=a;
console.log(a===b); // true
a[0]=1;
console.log(a, b); //  [1, 1, 2, 3, 4];    [1, 1, 2, 3, 4]




/**
 * 1. 深拷贝的例子 -- 1:
 *
 * 1. 可以使用递归, 递归去复制所有层级属性 。
 *    1. 封装一个深拷贝的函数
 */
function deepClone(obj){
  let objClone = Array.isArray(obj) ? [] : {};
  if(obj && typeof obj==="object"){
    for(key in obj){
      var prop = obj1[i]; // 避免相互引用造成死循环，如obj1.a=obj
      if(obj.hasOwnProperty(key)){
        //判断ojb子元素是否为对象，如果是，递归复制
        if(obj[key]&&typeof obj[key] ==="object"){
          objClone[key] = deepClone(obj[key]);
        }else{
          //如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b); // [2, 2, 3, 4]     [1, 2, 3, 4]

// 最优方法
function deepCopy(obj1) {
  var obj2 = Array.isArray(obj1) ? [] : {};
  if (obj1 && typeof obj1 === "object") {
    for (var i in obj1) {
      var prop = obj1[i]; // 避免相互引用造成死循环，如obj1.a=obj
      if (prop == obj1) {
        continue;
      }
      if (obj1.hasOwnProperty(i)) {
        // 如果子属性为引用数据类型，递归复制
        if (prop && typeof prop === "object") {
          obj2[i] = (prop.constructor === Array) ? [] : {};
          arguments.callee(prop, obj2[i]); // 递归调用
        } else {
          // 如果是基本数据类型，只是简单的复制
          obj2[i] = prop;
        }
      }
    }
  }
  return obj2;
}
var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
var obj2 = deepCopy(obj1);
obj2.a = 3;
obj2.c.d = 4;
alert(obj1.a); // 1
alert(obj2.a); // 3
alert(obj1.c.d); // 3
alert(obj2.c.d); // 4

/**
 * 2. 深拷贝的例子 -- 2:
 *
 * 1. 可以借用 JSON 对象的 parse 和 stringify
 *    1. JSON.stringify与JSON.parse除了实现深拷贝，还能结合localStorage实现对象数组存储。
 */
function deepClone(obj){
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
}
let a=[0,1,[2,3],4],
    b=deepClone(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);

/**
 * 3. 深拷贝的例子 -- 3:
 *
 * 1. 可以借用JQ的extend方法
 *    1. $.extend( [deep ], target, object1 [, objectN ] )
 *    2. deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝
 *    3. target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
 *    4. object1  objectN可选。 Object类型 第一个以及第N个被合并的对象。
 */
let a=[0,1,[2,3],4], b=$.extend(true,[],a);
a[0]=1;
a[2][0]=1;
console.log(a,b);



/**
 * 4. 深拷贝的例子 -- 4:
 *
 * 1. concat方法与slice方法, 不能实现真正的深拷贝:
 */
let a=[1,2,3,4], b=a.slice();
a[0]=2;
console.log(a,b); //  [2, 2, 3, 4]     [1, 2, 3, 4]
/**
 * 1. 那是不是说slice方法也是深拷贝了, 毕竟b也没受a的影响;
 * 2. 上面说了, 深拷贝是会拷贝所有层级的属性, 还是这个例子, 我们把a改改
 * 3. 拷贝的不彻底, b对象的一级属性确实不受影响了, 但是二级属性还是没能拷贝成功仍, 然脱离不了a的控制, 说明 slice 根本不是真正的深拷贝 。
 * 4. 第一层的属性确实深拷贝, 拥有了独立的内存, 但更深的属性却仍然公用了地址, 所以才会造成上面的问题 。
 * 5. 同理, concat 方法与 slice 也存在这样的情况, 他们都不是真正的深拷贝, 这里需要注意 。
 */
let a=[0,1,[2,3],4], b=a.slice();
a[0]=1;
a[2][0]=1;
console.log(a,b); // [1, 1, [1, 3], 4]      [0, 1, [1, 3], 4]


/**
 * 5. 深拷贝的例子 -- 5:
 *
 * 1. 手动实现深拷贝
 */
let obj1 = {
   a: 1,
   b: 2
}
let obj2 = {
   a: obj1.a,
   b: obj1.b
}
obj2.a = 3;
alert(obj1.a); // 1
alert(obj2.a); // 3


let obj1 = {
  a: {
    b: 2
  }
}
let obj2 = {
  a: obj1.a
}
obj2.a.b = 3;
console.log(obj1.a.b); // 3
console.log(obj2.a.b); // 3