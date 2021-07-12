/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((acc, fn) => {
      console.log(arg, 'as', acc,  fn.call(this, acc));
      return  fn.call(this, acc)
    }, arg);
  }
}

const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

// pipe([])(1)
//
//pipe([times(2)])(1)
//
//pipe([times(2),times(3)])(2)
//
pipe([times(2), times(3), plus(4)])(2)

// pipe([times(2), subtract(3), divide(4)])(3)
