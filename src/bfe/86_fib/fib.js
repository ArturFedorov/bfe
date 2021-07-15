/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n, cache = new Map()) {
  if(n <= 1) return n;
  if(cache.get(n)) return cache.get(n);

  cache.set(n, fib(n - 1, cache) + fib(n - 2, cache));
  return cache.get(n)
}


console.log(fib(13));
