/**
 * @param {Function} func
 * @param {number} wait
 */
export function throttle(func, wait) {
  let timer = null;
  let stashed = null;

  const startThrottle = () => {
    timer = setTimeout(check, wait);
  }

  const check = () => {
    timer = null;
    if(stashed) {
      func.call(stashed[0], stashed[1]);
      stashed = null;
      startThrottle();
    }
  }

  return function(...args) {
    if(timer !== null) {
      stashed = [this, args];
    } else {
      func.apply(this, args);
      startThrottle();
    }
  }
}
