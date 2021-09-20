/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let currentNumberOfOnes = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) {
      currentNumberOfOnes += 1;
      max = Math.max(max, currentNumberOfOnes);
    } else {
      currentNumberOfOnes = 0;
    }
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
