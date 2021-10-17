const Heap = require('../../../algorithms/heap/heap');

/**
 * @param {number[][]} intervals
 * @return {number}
 */
let minMeetingRooms = function(intervals) {
  intervals = intervals.sort((a, b) => {
    if(a[0] !== b[0]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  const heap = new Heap();
  heap.push(intervals[0][1]);
  let numberOfConferences = 1;

  for(let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];

    if(heap.peek() > currentInterval[0]) {
      heap.push(currentInterval[1]);
      numberOfConferences++;
    } else {
      heap.pop();
      heap.push(currentInterval[1]);
    }
  }

  return numberOfConferences;
};



console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]])); // 2
console.log(minMeetingRooms(intervals = [[7, 10], [2, 4]])); // 1
