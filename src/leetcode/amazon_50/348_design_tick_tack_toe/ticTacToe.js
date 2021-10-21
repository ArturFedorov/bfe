/**
 * @param {number} n
 */
let TicTacToe = function(n) {
  this.len = n;

  this.rows = new Array(n).fill(0);
  this.cols = new Array(n).fill(0);
  this.diagonal = 0;
  this.antiDiagonal = 0;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  const i = player === 1 ? 1 : -1;
  this.rows[row] += i;
  this.cols[col] += i;

  if(row === col) this.diagonal += i;
  if(col === this.len - row - 1) this.antiDiagonal += i;

  if(
    Math.abs(this.rows[row]) === this.len ||
    Math.abs(this.cols[col]) === this.len ||
    Math.abs(this.diagonal) === this.len ||
    Math.abs(this.antiDiagonal) === this.len
  ) {
    return player;
  }

  return 0;
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
