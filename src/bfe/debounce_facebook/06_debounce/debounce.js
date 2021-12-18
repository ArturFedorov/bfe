/**
 * @param {Function} func
 * @param {number} wait
 */
export function debounce(func, wait) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, ...args);
    }, wait);
  }
}
