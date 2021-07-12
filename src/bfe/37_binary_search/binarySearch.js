/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target){
  // your code here
  let left = 0;
  let right = arr.length-1;

  while (left <= right) {
    let middle = Math.floor((left + right)/2);
    if(arr[middle] < target) {
      left = middle + 1;
      console.log(arr[middle], target, '<', middle)
    } else if (arr[middle] > target) {
      console.log(arr[middle], target, '>')
      right = middle -1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4, 100, 1000, 10000, 100000, 200000] , 1000))
