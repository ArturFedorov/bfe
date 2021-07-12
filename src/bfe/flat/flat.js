/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
export function flat(arr, depth = 1) {
  if(!Array.isArray(arr) || depth === 0) {
    return arr;
  }

  return arr.reduce((acc, cur) =>
    Array.isArray(cur) ? acc.concat(flat(cur, depth - 1)) : acc.concat(cur),
    []
  );
}
