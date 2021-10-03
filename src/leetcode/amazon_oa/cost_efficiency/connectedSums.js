/**
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number} sum
 */
function connectedSum(n, edges){
  let sets = [];

  for(let i = 1; i <= n; i++) {
    let set = new Set();
    set.add(i);
    sets.push(set);
  }

  for (let i = 0; i < edges.length; i++) {
    let memberSet = null;
    let [edge1, edge2] = edges[i];
    console.log(edge1, edge2, 'edges');

    for(let j = 0; j < sets.length; j++) {
      let set = sets[j];

      if(set.has(edge1)) {
        if(memberSet == null) {
          memberSet = set;
        } else {
          set.forEach(i => memberSet.add(i));
          sets.splice(j ,1);
          break;
        }
      }

      if(set.has(edge2)) {
        if(memberSet == null) {
          memberSet = set;
        } else {
          set.forEach(i => memberSet.add(i));
          sets.splice(j ,1);
          break;
        }
      }
    }
  }

  console.log(sets, 'after');
  return computeEfficiency(sets);
}

function computeEfficiency(sets) {
  return sets.reduce((acc, set) => {
    acc += Math.ceil(Math.sqrt(set.size));
    return acc;
  }, 0);
}

let input = [
  [6, 11],
  [9, 5],
  [11, 9],
  [15, 9],
  [13, 15],
  [12, 14],
  [15, 16],
  [1, 16]
]

console.log(connectedSum(16, input), 'result');
