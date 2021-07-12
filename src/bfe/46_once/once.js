/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
  let isCalled = false;
  let result;

  return function (...args) {
    if(!isCalled) {
      result = func.call(this, ...args);
      isCalled = true;
      return result;
    } else {
      return result;
    }
  }
}

function func(num) {
  return num
}

const onced = once(func)

console.log(onced(1));
// 1, func called with 1

console.log(onced(2));
// 1, even 2 is passed, previous result is returned
