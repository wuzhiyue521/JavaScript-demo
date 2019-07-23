define(['./a-util.js'], function(aUtil) {
  var a = {
    printDate: function(date) {
      console.log(aUtil.aGetFormatDate(date));
    }
  }
  return a;
});

// define(['./a-util.js'], function (aUtil) {
//     return {
//         printDate: function (date) {
//             console.log(aUtil.aGetFormatDate(date))
//         }
//     }
// })
