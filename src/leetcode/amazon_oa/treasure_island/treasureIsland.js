class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function treasureIsland(matrix) {
  if(!matrix || matrix.length === 0) return 0;

  let number = 0;

  let queue = [new Node(0, 0)];
  let hasVisited = Array(4).fill().map(() => Array(4).fill(false));
  hasVisited[0][0] = true;
  let directions = [ [0, 1], [0, -1], [1, 0], [-1, 0]];

  while (queue.length > 0) {
    let { length } = queue;
    for(let i = 0; i < length; i++) {
      let current = queue.shift();

      if(matrix[current.x][current.y] === 'X') {
        return number;
      }

      for(const [xDir, yDir] of directions) {
        let x = current.x + xDir;
        let y = current.y + yDir;

        if(x >= 0 && x < matrix.length && y >=0 && y < matrix[0].length) {
          if(matrix[x][y] !== 'D' && !hasVisited[x][y]) {
            queue.push(new Node(x, y));
            hasVisited[x][y] = true;
          }
        }
      }
    }

    number++;
  }
}


let arr = [
  ['O', 'O', 'O', 'O'],
  ['D', 'O', 'D', 'O'],
  ['O', 'O', 'O', 'O'],
  ['X', 'D', 'D', 'O']
];

console.log(treasureIsland(arr));
