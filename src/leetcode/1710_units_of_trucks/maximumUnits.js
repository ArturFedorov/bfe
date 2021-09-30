/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
let maximumUnits = function(boxTypes, truckSize) {
  let unitCount = 0;
  let remainingTruckSize = truckSize;

  while (remainingTruckSize > 0) {
    let maxUnitBoxIndex = findMaxUnitBox(boxTypes);

    if(maxUnitBoxIndex === -1) break;

    let boxCount = Math.min(remainingTruckSize, boxTypes[maxUnitBoxIndex][0]);
    unitCount += boxCount * boxTypes[maxUnitBoxIndex][1];
    remainingTruckSize -= boxCount;

    boxTypes[maxUnitBoxIndex][1] = -1;
  }

  return unitCount;
};

/**
 *
 * @param {number[][]} boxTypes
 */
function findMaxUnitBox(boxTypes) {
  let maxUnitBoxIndex = -1;
  let maxUnits = 0;

  for(let i = 0; i< boxTypes.length; i++) {
    if(boxTypes[i][1] > maxUnits) {
      maxUnits = boxTypes[i][1];
      maxUnitBoxIndex = i;
    }
  }

  return maxUnitBoxIndex;
}
