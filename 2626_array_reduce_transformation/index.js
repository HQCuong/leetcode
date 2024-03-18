/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  if (nums.length === 0) {
      return init;
  }

  let i = init;

  for (let index = 0; index < nums.length; index++) {
      i = fn(i, nums[index]);
  }
  
  return i;
};

console.log(reduce([1, 2, 3], (acc, val) => acc + val, 0));
