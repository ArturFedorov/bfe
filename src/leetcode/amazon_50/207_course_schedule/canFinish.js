/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let canFinish = function(numCourses, prerequisites) {
  let directMap = new Map();

  for(let [src, target] of prerequisites) {
    if(!directMap.has(src)) {
      directMap.set(src, new Set());
    }
    directMap.get(src).add(target);
  }

  let set = new Set();
  let map = new Map();
  let res = false;

  let dfs = (node) => {
    if(!directMap.has(node)) return;
    if(map.has(node)) return map.get(node);
    if(set.has(node)) return true;
    set.add(node);
    for(let val of directMap.get(node)) {
      if(!res) {
        res = dfs(val);
      } else {
        return true;
      }
    }
    set.delete(node);
    map.set(node, res);
    return res;
  }

  for(let key of directMap.keys()) {
    if(dfs(key)) return false;
  }

  return  true;
};

console.log(canFinish(2, [[1, 0]]));// true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
