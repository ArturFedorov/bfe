// type Interval = [number, number]

/**
 * @param {Interval[][]} schedules
 * @return {Interval[]}
 */
function findMeetingSlots(schedules) {
  if(schedules.length === 0) return [[0, 24]];

  schedules = schedules.flat().sort((x,y) => x[0]-y[0]);
  let mergedIntervals = [];
  let latestEnd = 0;

  console.log(schedules)
  schedules.forEach(i => {
    let [start, end] = i;
    console.log('start', start, end, 'latestEnd', latestEnd);
    if(start > latestEnd) {
      mergedIntervals.push([latestEnd, start]);
    }
    latestEnd = Math.max(latestEnd, end);
    console.log('latestEnd', latestEnd, 'end', end);
  });

  if(latestEnd !== 24) mergedIntervals.push([latestEnd, 24]);
  return mergedIntervals;
}

console.log(findMeetingSlots([
  [[13, 15], [11, 12], [10, 13]], //schedule for member 1
  [[8, 9]], // schedule for member 2
  [[13, 18]] // schedule for member 3
]));

// [[0,8],[9,10],[18,24]]
