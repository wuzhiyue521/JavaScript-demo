// define(['./util.js'], function(util) {
//   var aUtil = {
//     aGetFormatDate: function(date) {
//       return util.getFormatDate(date, 2);
//     }
//   }
//   return aUtil
// })

define(['./util.js'], function (util) {
    return {
        aGetFormatDate: function (date) {
            return util.getFormatDate(date, 2)
        }
    }
}) 