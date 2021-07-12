
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementAfter(arr, target){
  let start = 0;
  let end = arr.length - 1;
  let index = -1;

  while (start <= end) {
    const mid = Math.floor((start + end)/2);

    if(arr[mid] < target) {
      start = mid + 1;
    } else if(arr[mid] > target) {
      end = mid - 1;
    } else {
      index = mid;
      start = mid + 1;
    }
  }

  return index === -1 ? undefined : arr[index + 1];
}

console.log(elementAfter([1,2,2,3,4,5,6,6,7,8], 2));
