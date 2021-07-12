
/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */
function merge(arrList) {
  // your code here
  let flat = (arr) => {
    return arr.reduce((acc, next) => {
      return acc.concat(next);
    }, []);
  }

  return flat(arrList).sort((a, b) => a-b);
}


console.log(merge(
  [
    [1, 1, 1, 100, 1000, 10000],
    [1, 2, 2, 2, 200, 200, 1000],
    [1000000, 10000001],
    [2, 3, 3]
  ]
));
