/**
 * @param {string} instructions
 * @return {boolean}
 */
let isRobotBounded = function(instructions) {
  let directions = [
    [0 ,1], // north
    [1, 0], // east
    [0, -1], // south
    [-1, 0] // west
  ];

  let x = 0;
  let y = 0;
  let chars = [...instructions];

  let idx = 0;

  for(let char of chars) {
    if(char === 'L') {
      idx = (idx + 3) % 4;
    } else if(char === 'R') {
      idx = (idx + 1) % 4;
    } else {
      x += directions[idx][0];
      y += directions[idx][1];
    }
  }

  return (x === 0 && y === 0) || (idx !== 0);
};


console.log(isRobotBounded('GGLLGG')); // true
console.log(isRobotBounded('GG')); // false
console.log(isRobotBounded('GL')); // true
console.log(isRobotBounded("GLRLLGLL"))
