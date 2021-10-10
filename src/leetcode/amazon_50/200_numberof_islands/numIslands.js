/**
 * @param {string[][]} grid
 * @return {number}
 */
let numIslands = function(grid) {
  if(!grid || grid.length === 0) {
    return 0;
  }

  let gridHeight = grid.length;
  let gridLength = grid[0].length;
  let numOfIslands = 0;

  for(let row = 0; row < gridHeight; ++row) {
    for(let col = 0; col < gridLength; ++col) {
      if(grid[row][col] === '1') {
        ++numOfIslands;
        dfs(grid, row, col);
      }
    }
  }

  return numOfIslands;
};

/**
 *
 * @param {string[][]} grid
 * @param {number} row
 * @param {number} col
 */
function dfs(grid, row, col) {
  let gridHeight = grid.length;
  let gridLength = grid[0].length;

  if(row < 0 || row >= gridHeight || col < 0 || col >= gridLength || grid[row][col] === '0') {
    return 0;
  }

  grid[row][col] = '0';
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col - 1);
  dfs(grid, row, col + 1);
}


console.log(numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
])); // 1


console.log(numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
])); // 3
