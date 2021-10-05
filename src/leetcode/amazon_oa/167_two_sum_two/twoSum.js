/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    let sum = numbers[low] + numbers[high];

    if(sum === target) {
      return [low + 1, high + 1];
    } else if(sum < target) {
        low++;
      } else {
        high--;
    }
  }

  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9)); //[1,2]
console.log(twoSum([2,3,4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1,2]
