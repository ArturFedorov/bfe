
/**
 * @param {Function} func
 * @param {any[]} args
 * @returns {Function}
 */
function partial(func, ...args) {
  return function (...newArgs) {
    const finalArgs = [];

    const argsCopy = args.slice(0);

    while (argsCopy.length > 0) {
      const head = argsCopy.shift();

      if(head === partial.placeholder) {
        finalArgs.push(newArgs.shift());
      } else {
        finalArgs.push(head);
      }
    }

    finalArgs.push(...newArgs);

    return func.apply(this, finalArgs);
  }
}


const func = (...args) => args

const func123 = partial(func, 1,2,3)

console.log(func123(4));


const _ = partial.placeholder
const func1_3 = partial(func, 1, _, 3)

console.log(func1_3(2, 4));
// [1,2,3,4]
