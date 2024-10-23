/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  const exec = setTimeout(() => fn(...args), t)

  function cancelFn() {
    clearTimeout(exec)
  }

  return cancelFn
};
