
/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
  if(typeof obj !== 'object' || obj === null) return false;

  let prototype = Object.getPrototypeOf(obj);

  while (prototype !== null) {
    if(prototype === target.prototype) {
      return true;
    } else {
      prototype = Object.getPrototypeOf(prototype);
    }
  }

  return false;
}


class A {}
class B extends A {}

const b = new B()
console.log(myInstanceOf(b, B)); // true
console.log(myInstanceOf(b, A)); // true
console.log(myInstanceOf(b, Object)); // true

function C() {}

console.log(myInstanceOf(b, C)); // false
C.prototype = B.prototype
console.log(myInstanceOf(b, C)); // true
C.prototype = {}
console.log(myInstanceOf(b, C)); // false
