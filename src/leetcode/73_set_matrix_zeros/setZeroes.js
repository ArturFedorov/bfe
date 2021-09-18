const setZeros = (row, column, matrix) => {
  for(let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }

  for(let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let setZeroes = function(matrix) {
  const zerosAddress = [];

  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === 0) {
        zerosAddress.push([row, col]);
      }
    }
  }

  for(let address of zerosAddress) {
    let row = address[0];
    let col = address[1];
    setZeros(row, col, matrix);
  }
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]]);

// [[1,0,1],[0,0,0],[1,0,1]]
