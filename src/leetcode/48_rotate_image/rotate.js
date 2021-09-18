/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
  for(let row = 0; row < matrix.length; row++) {
    for(let col = row; col < matrix[0].length; col++) {
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }
};

console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

