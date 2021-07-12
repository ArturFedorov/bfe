/**
 * @param {Function} constructor
 * @param {any[]} args - argument passed to the constructor
 * `myNew(constructor, ...args)` should return the same as `new constructor(...args)`
 */
const myNew = (constructor, ...args) => {
  let obj = {};
  obj.prototype = constructor.prototype;
  return constructor.apply(obj, args) || obj;
}
