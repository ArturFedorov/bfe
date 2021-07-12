
/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]}
 */
// function merge(arrList) {
//   // your code here
//   let flat = (arr) => {
//     return arr.reduce((acc, next) => {
//       return acc.concat(next);
//     }, []);
//   }
//
//   return flat(arrList).sort((a, b) => a-b);
// }

function merge2(left, right) {
  const res = [];
  while (left.length > 0 && right.length > 0) {
    res.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  return res.concat(left).concat(right);
}

function merge(arrList) {
  let count = arrList.length;
  if(count == 0) return [];
  if(count == 1) return arrList[0];
  if(count == 2) return merge2(arrList[0], arrList[1]);

  let mid = Math.floor(count / 2);
  let left = merge(arrList.slice(0, mid));
  let right = merge(arrList.slice(mid));

  return merge2(left, right);
}




console.log(merge(
  [
    [1, 1, 1, 100, 1000, 10000],
    [1, 2, 2, 2, 200, 200, 1000],
    [1000000, 10000001],
    [2, 3, 3]
  ]
));
