// define(function() {
//   var util = {
//     getFormatDate: function(date, type) {
//       if (type === 1) {
//         return '2017-06-07'
//       }
//       if (type === 2) {
//         return '2017年6月7日'
//       }
//     }
//   } 
//   return util
// });

define(function () {
    return {
        getFormatDate: function (date, type) {
            if (type === 1) {
                return '2017-06-15'
            }
            if (type === 2) {
                return '2017年6月15日'
            }
        }
    }
})