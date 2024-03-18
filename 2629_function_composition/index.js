/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
      let result = x;

      for (let i = 1; i <= functions.length; i++) {
          const index = functions.length - i;
          
          if (functions[index]) {
              result = functions[index](result);
          }
      }

      return result;
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/
