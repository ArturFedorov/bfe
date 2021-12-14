/**
 *
 * @param {function} fn
 */
function curry(fn) {
  const length = fn.length;
  return function curried(...args) {
    if(args.length >= length) {
      return fn.call(this, ...args);
    } else {
      return curried.bind(this, ...args);
    }
  }
}
