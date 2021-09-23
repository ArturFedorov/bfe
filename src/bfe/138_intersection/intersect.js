/**
 * @param {number[]} arr1 - integers
 * @param {number[]} arr2 - integers
 * @returns {number[]}
 */
function intersect(arr1, arr2) {
  arr1.reverse();
  arr2.reverse();

  const result = [];

  while (arr1.length > 0 && arr2.length > 0) {
    const top1 = arr1[arr1.length - 1];
    const top2 = arr2[arr2.length - 1];

    if(top1 === top2) {
      result.push(top1);
      arr1.pop();
      arr2.pop();
    } else if (top1 < top2) {
      arr1.pop();
    } else {
      arr2.pop();
    }
  }

  return result;
}


console.log(intersect(
  [1, 2, 2, 3, 4, 4],
  [2, 2, 4, 5, 5, 6, 2000]
));
// [2,2,4]
