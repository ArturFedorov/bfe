/**
 * @param {any} input
 * @return {(observable: Observable) => Observable}
 * returns a function which trasnform Observable
 */
function map(transform) {
  return function (...args) {
    return new Observable(sub => {
      return  sub.next(transform.apply(this, args));
    });
  }
}
