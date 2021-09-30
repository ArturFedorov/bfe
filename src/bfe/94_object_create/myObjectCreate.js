/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if(typeof proto !== 'object' || proto === null) {
    throw new Error('Not an object or null');
  }

  let obj = {};
  obj.__proto__ = proto;

  return obj;
}
