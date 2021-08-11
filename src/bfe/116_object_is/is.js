
/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  if(Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  if((1 / a === Infinity && 1/b === -Infinity) || ( 1 / a === -Infinity && 1/b === Infinity)) {
    return false;
  }

  if((a === Infinity && b === -Infinity) || ( a === -Infinity && b === Infinity)) {
    return false;
  }

  return a === b;
}
