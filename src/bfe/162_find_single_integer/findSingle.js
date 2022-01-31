

/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  return arr.reduce((prev, curr) => prev ^ curr, 0);
}

