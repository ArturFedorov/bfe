/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 */
export function debounce(func, wait, option = {leading: false, trailing: true}) {
  let timer = null;

  return function(...args) {
    let isInvoked = false;

    if(timer === null && option.leading) {
      func.call(this, ...args);
      isInvoked = true;
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      if(option.trailing && !isInvoked) {
        func.call(this, ...args);
      }

      timer = null;
    }, wait);
  }
}
