/**
 * @param {any[]} arr
 * @returns {?} - sorry no type hint for this
 */
function wrap(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      if(prop === Symbol.iterator) {
        return target[prop].bind(target);
      }

      let index = parseInt(prop, 10);

      if(index < 0) {
        index += arr.length;
        return  target[index];
      }

      return target[prop];
    },
    set(target, prop, value) {
      let index = parseInt(prop, 10);

      if(index < 0) {
        index += arr.length;
        target[index] = value;

        if(index < 0) {
          throw new Error('out of range');
        }

        return true;
      }

      target[prop] = value;
      return  true;
    }
  });
}
