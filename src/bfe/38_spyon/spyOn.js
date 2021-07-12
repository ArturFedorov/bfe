
/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
  const method = obj[methodName];
  if(!method || typeof method !== 'function') {
    throw new Error('no method');
  }

  const calls = [];

  obj[methodName] = function (...args) {
    calls.push(args);
    method.apply(this, args);
  }

  return { calls };
}


const obj = {
  data: 1,
  increment(num) {
    this.data += num
  }
}

const spy = spyOn(obj, 'increment')

obj.increment(1)

console.log(obj.data) // 2

obj.increment(2)

console.log(obj.data) // 4

console.log(spy.calls)
