/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
let merge = function(intervals) {
  if(intervals.length === 0) return [];

  intervals.sort((x, y) => x[0] - y[0]);

  let mergedIntervals = [];
  let last = [null, -1];

  for(let [start, end] of intervals) {
    if(start > last[1]) {
      last = [start, end];
      mergedIntervals.push(last);
    } else {
      last[1] = Math.max(last[1], end);
    }
  }

  return mergedIntervals;
};
