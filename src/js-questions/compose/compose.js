function compose(...fns) {
  return function (args) {
    return fns.reduceRight((arg, fn) => {
      return  fn.call(this, arg);
    }, args);
  }
}

const plus = (a) => (b) => b + a
const minus = (a) => (b) => b - a;
const multiply = (a) => (b) => b * a;

const result = compose(plus(5), minus(10), multiply(2))

// 10 * 2 - 10 + 5 = 15
console.log(result(10)) // 15
