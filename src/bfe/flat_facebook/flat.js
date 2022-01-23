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



function flat(arr, depth = 1) {
  const result = []
  const stack = [...arr.map(item => ([item, depth]))]

  while (stack.length > 0) {
    const [top, depth] = stack.pop()
    if (Array.isArray(top) && depth > 0) {
      stack.push(...top.map(item => ([item, depth - 1])))
    } else {
      result.push(top)
    }
  }

  return result.reverse()
}
