/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return {
      toBe: (tVal) => {
          if (val === tVal) {
              return true;
          }

          throw new Error('Not Equal');
      },

      notToBe: (bVal) => {
          if (val !== bVal) {
              return true;
          }

          throw new Error('Equal');
      },
  }
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/
