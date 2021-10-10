/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  const map = {};

  for(let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let rest = target - num;

    if(map[rest] !== undefined) return [map[rest], i];
    map[num] = i;
  }

  return null;
};
