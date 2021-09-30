/**
 * @param {string[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
  if(board == null || word == null || board.length === 0) {
    return false;
  }

  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board[0].length; col++) {
      if(backTrack(board, word, row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};

function backTrack(board, word, row, col, wordIndex) {
  if(wordIndex === word.length) {
    return true;
  }

  if(row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
    return false;
  }

  if(board[row][col] !== word[wordIndex]) {
    return  false;
  }

  let temp = board[row][col];
  board[row][col] = '*';

  let bool = backTrack(board, word, row - 1, col, wordIndex + 1) ||
             backTrack(board, word, row + 1, col, wordIndex + 1) ||
             backTrack(board, word, row, col - 1, wordIndex + 1) ||
             backTrack(board, word, row, col + 1, wordIndex + 1);

  board[row][col] = temp;

  return bool;
}

console.log(exist([
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
],
  'ABCCED'));
