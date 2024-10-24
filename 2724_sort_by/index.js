// const sortFn = (rawArr, sortVal) => {
//   const result = rawArr;
//   let temp = null;

//   for (let i = 0; i < result.length - 1; i++) {
//     for (let y = 0; y < result.length - 1; y++) {
//       if (sortVal(result[y]) > sortVal(result[y + 1])) {
//         temp = result[y];

//         result[y] = result[y + 1];
//         result[y + 1] = temp;
//       }
//     }
//   }

//   return result;
// }

/**
* @param {Array} arr
* @param {Function} fn
* @return {Array}
*/
var sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b)); 
};
