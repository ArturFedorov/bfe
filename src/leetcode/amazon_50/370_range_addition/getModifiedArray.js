/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
let getModifiedArray = function(length, updates) {
  let arr = new Array(length).fill(0);

  for(let update of updates) {
    let [start, end, increment] = update;

    for(let i = start; i <= end; i++ ) {
      arr[i] += increment;
    }
  }

  return arr;
};

console.log(getModifiedArray(5, [[1, 3, 2], [2, 4, 3], [0, 2, -2]])); // [-2,0,3,5,3]
console.log(getModifiedArray(10, [[2, 4, 6], [5, 6, 8], [1, 9, -4]])); // [0,-4,2,2,2,4,4,-4,-4,-4]
