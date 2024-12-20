/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  fn(...args);

  const interVal = setInterval(() => {
    fn(...args);
  }, t);

  const clear = () => {
    clearInterval(interVal);
  };

  return clear();
};
