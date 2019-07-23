/**
 * 1. 类型转换
 */



/**
 * 5. 类型转换
 *
 * 1. JS 是没有严格的数据类型的
 * 2. 我们在声明变量的时候并不需要指定数据类型
 * 3. 数据类型:
 *    1. 原始类型:
 *       1. Null , Undefined , Number , String , Boolean , Symbol
 *       2. Symbol: ES6 新增加的数据类型
 *    2. 对象类型:
 *       1. Object
 *
 *
 *
 * 4. 显示类型转换:
 *    1. 我们手动进行类型转换
 *    2. 显示类型 转换的方法
 *       1. Number 函数
 *       2. String 函数
 *       3. Boolean 函数
 *    3. 转换的规则
 *       1. 显示类型转换:
 *          1. 原始类型转换
 *             1. Number 函数转换示例
 *                1. 数值: 转换后还是数字
 *                2. 字符串: 如果可以被解析为数值, 则转换为相应的数值; 否则得到 NaN; 空字符串转化为 0
 *                3. 布尔值: true 转化成 1; false 转化为 0 。
 *                4. undefined: 转化成 NaN 。
 *                5. null: 转化成 0 。
 *                6. 代码示例:
 *                  <script>
 *                    // Number 函数: 转换成数值 。
 *                    // 转换后还是原来的值
 *                    console.log(Number('123')) // 123
 *                    // 字符串: 如果可以被解析为数值, 则转换为相应的数值; 否则得到 NaN; 空字符串转化为 0 。
 *                    console.log(Number('123abc'))
 *                    // NaN
 *                    console.log(Number('')) // 0
 *                    // 布尔值: true 转化成 1; false 转化为 0 。
 *                    console.log(Number(false)) // 0
 *                    // undefined: 转化成 NaN 。
 *                    console.log(Number(undefined)) // NaN
 *                    // null: 转化成 0 。
 *                    console.log(Number(null)) // 0
 *                  </script>
 *              2. String 函数转换示例
 *                 1. 数值: 转换为相应的字符串 。
 *                 2. 字符串: 转换后还是原来的值 。
 *                 3. 布尔值: true 转为 "true" , false 转为 "false"
 *                 4. undefined: 转为 "undefined" 。
 *                 5. null: 转为 "null" 。
 *                 6. 代码示例:
 *                    <script>
 *                      // String 函数转换示例; 数值: 转换为相应的字符串 。
 *                      console.log(String(123)) // "123"
 *                      // 字符串: 转换后还是原来的值 。
 *                      console.log(String("123")) // "123"
 *                      // 布尔值: true 转为 "true" , false 转为 "false"
 *                      console.log(String(true)) // "true"
 *                      console.log(String(false)) // "false"
 *                      // undefined ： 转为 "undefined" 。
 *                      console.log(String(undefined)) // "undefined"
 *                      // null: 转为 "null" 。
 *                      console.log(String(null)) // "null"
 *                    </script>
 *              3. Boolean 函数转换示例:
 *                 1. undefined   == false
 *                 2. null        == false
 *                 3. -0 / +0     == false
 *                 4. NaN     == false
 *                 5. '' (空字符串) == false
 *                 6. 这些返回的都是 false; 其余的都为 true
 *          2. 对象类型 转换:
 *             1. Number 函数转换为示例:
 *                1. 先调用对象自身的 valueOf 方法, 如果该方法返回 原始类型 的值(数值/字符串/布尔值), 则直接对该值使用 Number 方法, 不在进行后续步骤 。
 *                2. 如果 valueOf 方法返回 复合类型 的值, 再调用对象自身的 toString 方法, 如果 toString 方法返回 原始类型 的值, 则对该值使用 Number 方法, 不在进行后续步骤 。
 *                3. 如果 toString 方法返回的是复合类型的值, 则报错 。
 *                4. 代码示例:
 *                    <script>
 *                      //对象类型转换
 *                      var a = {a : 1}
 *                      console.log(Number( a )) //  NaN
 *                    </script>
 *             2. String 函数转换示例:
 *                1. 先调用 toString 方法, 如果 toString 方法返回的是原始类型的值, 则对该值使用 String 方法, 不在进行以下步骤 。
 *                2. 如果 toString 方法返回的是复合类型的值, 再调用 valueOf 方法, 如果 valueOf 方法返回的是 原始类型 的值, 则对该值使用 String 方法, 不再进行以下步骤 。
 *                3. 如果 valueOf 方法返回的是复合类型的值, 则报错 。
 *
 *
 * 5. 隐式类型 转换:
 *    1. 程序内部完成
 *    2. 隐式类型转换:
 *      1. 四则运算: 加 、 减 、 乘 、 除
 *      2. 判断语句:
 *         1. if
 *         2. 三目运算符
 *      3. Native 调用:
 *         1. 如调用了 console.log() / alert()   <会自动转换成字符串类型>
 *
 * 6. 常见的题目:
 * 1. 这些题目的考察点都是 类型转换
 *    1. [] + []:   String / ""  (空字符串)
 *    2. [] + {}:   String / "[object Object]"
 *    3. {} + []:   String / 0
 *    4. {} + {}:   String / "[object Object][object Object]" / 火狐浏览器中是 NaN
 *    5. true + true:   Number / 2
 *    6. a+ {a:1}:  String或undefined / "[object Object][object Object]"
 * 8. 代码示例:
 *    console.log('[]+[]',typeof([]+[])) // string
 *    console.log('[]+{}',typeof([]+{})) // string
 *    console.log('{} + []',typeof({}+[])) // string
 *    console.log('{} + {}',typeof({}+{})) // string
 *    console.log('true + true',typeof(true+true)) // number
 *    console.log('a+ {a:1}',typeof(a+{a:1})) // string / undefined
 */