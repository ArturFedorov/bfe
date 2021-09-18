/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
  let nums = [];

  if(!matrix || matrix.length === 0) {
    return  nums;
  }

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let size = matrix.length * matrix[0].length;

  while(nums.length < size) {
    for(let i = left; i <= right && nums.length < size; i++) {
      nums.push(matrix[top][i]);
    }
    top++;

    for(let i = top; i <= bottom && nums.length < size; i++) {
      nums.push(matrix[i][right]);
    }
    right--;

    for(let i = right; i >= left && nums.length < size; i--) {
      nums.push(matrix[bottom][i]);
    }
    bottom--;

    for(let i = bottom; i >= top && nums.length < size; i--) {
      nums.push(matrix[i][left]);
    }
    left++;
  }

  return nums;
};


console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

// [1,2,3,6,9,8,7,4,5]

// console.log(spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ]));

// [1,2,3,4,8,12,11,10,9,5,6,7]
