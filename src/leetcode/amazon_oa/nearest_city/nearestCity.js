function nearestCity(points, xCoordinates, yCoordinates, queries, numOfQueriedPoints) {
  let xToPoint = new Map();
  let yToPoint = new Map();
  let pointToIdx = new Map();

  //init maps
  for(let i = 0; i < numOfQueriedPoints; i++) {
    if(!xToPoint.has(xCoordinates[i])) xToPoint.set(xCoordinates[i], []);
    xToPoint.get(xCoordinates[i]).push(points[i]);

    if(!yToPoint.has(yCoordinates[i])) yToPoint.set(yCoordinates[i], []);
    yToPoint.get(yCoordinates[i]).push(points[i]);

    pointToIdx.set(points[i], i);
  }

  let result = new Array(queries.length);
  for(let i = 0; i < result.length; i++) {
    let q = queries[i];
    let qIdx = pointToIdx.get(q);

    let xNbors = xToPoint.get(xCoordinates[qIdx]);
    let yNbors = yToPoint.get(yCoordinates[qIdx]);

    if(xNbors.length === 1 && yNbors === 1) continue;

    let minDist = Infinity;
    let min = '';

    for(let str of xNbors) {
      if(str === q) continue;
      let dist = distance(q, str, pointToIdx, xCoordinates, yCoordinates);
      if(dist < minDist) {
        minDist = dist;
        min = str;
      }
    }

    for(let str of yNbors) {
      if(str === q) continue;
      let dist = distance(q, str, pointToIdx, xCoordinates, yCoordinates);
      if(dist < minDist) {
        minDist = dist;
        min = str;
      }
    }

    result[i] = min;
  }

  return result;
}

/**
 *
 * @param {string} query
 * @param {string} str
 * @param {Map} pointToIdx
 * @param {number[]} xCoo
 * @param {number[]} yCoo
 */
function distance(query, str, pointToIdx, xCoo, yCoo) {
  let qIdx = pointToIdx.get(query);
  let stIdx = pointToIdx.get(str);

  return Math.abs(xCoo[qIdx] - xCoo[stIdx]) + Math.abs(yCoo[qIdx] - yCoo[stIdx]);
}

console.log(nearestCity(
  ["p1", "p2", "p3"],
  [30, 20, 10],
  [30, 20, 30],
  ["p3", "p2", "p1"],
  3
));
// ["p1", NONE, "p3"]


console.log(nearestCity(
  ["p1", "p2","p3", "p4", "p5"],
  [10, 20, 30, 40, 50],
  [10, 20, 30, 40, 50],
  ["p1", "p2", "p3", "p4", "p5"],
  5
));
// NONE, NONE, NONE, NONE, NONE]
