/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
  let index = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
};


moveZeroes([0,1,0,3,12]);
moveZeroes([0]);
