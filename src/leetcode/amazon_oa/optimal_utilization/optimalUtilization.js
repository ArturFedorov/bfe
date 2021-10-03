/**
 *
 * @param {number[][]} aSequence
 * @param {number[][]} bSequence
 * @param {number} target
 */
function optimalUtilization(aSequence, bSequence, target) {
  let i = 0;
  let j = bSequence.length - 1;
  let results = [];

  aSequence.sort((a, b) => a[1]-b[1]);
  bSequence.sort((a, b) => a[1] - b[1]);

  let nearestTarget = 0;

  while(i < aSequence.length && j >= 0) {
    if(aSequence[i][1] + bSequence[j][1] <= target) {
      let sum = aSequence[i][1] + bSequence[j][1];
      nearestTarget = Math.max(sum, nearestTarget);
      i++;
    } else {
      j--;
    }
  }

  // reset
  i = 0;
  j = bSequence.length - 1;

  while(i < aSequence.length && j >= 0) {
    if(aSequence[i][1] + bSequence[j][1] === nearestTarget) {
      results.push([aSequence[i][0], bSequence[j][0]]);
      i++;
      j--;
    } else if(aSequence[i][1] + bSequence[j][1] < nearestTarget) {
      i++;
    } else {
      j--;
    }
  }

  return results;
}


console.log(optimalUtilization(
  [[1, 8], [2, 15], [3, 9]],
  [[1, 8], [2, 11], [3, 12]],
  20)
);

console.log(optimalUtilization(
  [[1, 3], [2, 5], [3, 7], [4, 10]],
  [[1, 2], [2, 3], [3, 4], [4, 5]],
  10)
);

// a = [[1, 3], [2, 5], [3, 7], [4, 10]]
// b = [[1, 2], [2, 3], [3, 4], [4, 5]]
