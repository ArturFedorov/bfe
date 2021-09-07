/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if(arr.length <= 1) return 0;

  arr.sort(( a, b) => a - b);
  return Math.abs(arr[arr.length - 1] - arr[0]);
}


console.log(largestDiff([-1, 2, 3, 10, 9]));
// 11,  obviously Math.abs(-1 - 10) is the largest

console.log(largestDiff([]));
// 0

console.log(largestDiff([1]));
function largestDiff(arr) {
  if(arr.length < 2) return 0;
  let min = Infinity;
  let max = -Infinity;

  for(let i= 0 ;i< arr.length;i++) {
    min = Math.min(arr[i], min);
    max = Math.max(arr[i], max);
  }

  return Math.abs(min-max);
}
