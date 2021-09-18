/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
export function memo(func, resolver) {
  const cache = {};
  return function(...args) {
    const key = resolver ? resolver(...args) : args.join('_');
    if(!cache[key]) {
      cache[key] = func.call(this, ...args);
    }
    return cache[key];
  }
}

