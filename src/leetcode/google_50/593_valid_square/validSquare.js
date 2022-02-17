/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
let validSquare = function(p1, p2, p3, p4) {
  let points = [p1, p2, p3, p4];
  points.sort((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);

  [p1, p2, p3, p4] = [...points];

  const distance = (point1, point2) => {
    return Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2);
  };

  return (distance(p1, p2) !== 0) && (distance(p1, p2) === distance(p1, p3) && distance(p3, p4) === distance(p4, p2)) && (distance(p1, p4) === distance(p2, p3));
};


console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1])); // true
console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 12])); // false
