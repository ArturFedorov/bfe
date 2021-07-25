
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  const set = new Set();
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if(num === 0) {
      results.push([i, i]);
      set.add(0);
    }

    if(!set.has(num)) {
      let opposite = num * -1;
      const oppositeIndex =  arr.indexOf(opposite);

      if(oppositeIndex > -1) {
        results.push([i, oppositeIndex]);
        set.add(num);
        set.add(opposite);
      }
    }
  }

  return results.length === 0 ? null : results;
}

function findTwo2(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i], opposite = num * -1;

    console.log(map[opposite], num, opposite, 'opposite');
    if(map[opposite] !== undefined) return [map[opposite], i];
    map[num] = i;
  }

  return null;
}


console.log(findTwo2([1, 2, 3, -1]));
// [0,3]

console.log(findTwo2([1, 2, 3, -1, -2, 0]));
// [0,3] or [1,4] or [5, 5]

console.log(findTwo2([1, 2, 3, 4]));
// null

console.log(findTwo2([1,2,3,-1]))
