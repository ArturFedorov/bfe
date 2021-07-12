/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
export function memo(func, resolver) {
  const cache = {};
  return function(...args) {
    const key = resolver ? resolver(...args) : args.join('_');
    if(!cache[key]) {
      console.log('from casce');
      cache[key] = func.call(this, ...args);
    }
    console.log('from bofy');
    return cache[key];
  }
}
