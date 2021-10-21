/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let findOrder = function(numCourses, prerequisites) {
  let courseMap = new Map();
  let result = [];

  for(let [course, prereq] of prerequisites) {
    if(!courseMap.has(course)) {
      courseMap.set(course, new Set());
    }

    courseMap.get(course).add(prereq);
  }

  const visited = new Set();

  function topSort(course, visiting = new Set()) {
    if(visiting.has(course)) return false;
    if(visited.has(course)) return true;

    if(courseMap.has(course)) {
      visiting.add(course);
      for(let pre of courseMap.get(course)) {
        if(!topSort(pre, visiting)) return false;
      }

      visiting.delete(course);
    }

    result.push(course);
    visited.add(course);
    return true;
  }

  for(let i = 0; i < numCourses; i++) {
    if(!topSort(i)) return [];
  }

  return result;
};

console.log(findOrder(2, [[1, 0]])); //[0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); //[0,2,1,3]
