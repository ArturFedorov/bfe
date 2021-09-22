function getMedianNumberAndLength(arr, start, end) {
  const count = end - start + 1;

  if(count % 2 === 1) {
    return [
      arr[(start + end) / 2],
      (count - 1) / 2
    ];
  } else {
    const leftIndex = Math.floor((start + end) / 2);
    return [
      (arr[leftIndex] + arr[leftIndex + 1]) / 2,
      count /2 -1
    ];
  }
}

/**
 * @param {number[]} arr1 - sorted integer array
 * @param {number[]} arr2 - sorted integer array
 * @returns {number}
 */
function median(arr1, arr2) {
  let start1 = 0;
  let end1 = arr1.length - 1;

  let start2 = 0;
  let end2 = arr2.length - 1;

  while (end1 - start1 >= 2 && end2 - start2 >=2) {
    const [median1, length1] = getMedianNumberAndLength(arr1, start1, end1);
    const [median2, length2] = getMedianNumberAndLength(arr2, start2, end2);

    if(median1 === median2) return median1;

    const numberToCut = Math.min(length1, length2);

    if(median1 < median2) {
      start1 += numberToCut;
      end2 -= numberToCut;
    } else {
      end1 -= numberToCut;
      start2 += numberToCut;
    }
  }

  const countRest = end1 - start1 + 1 + end2 - start2 + 1;
  const target1Index = countRest % 2 == 1 ? (countRest - 1) / 2 : countRest / 2 - 1
  const target2Index = countRest % 2 === 1 ? (countRest - 1) / 2 : countRest / 2;

  let target1;
  let target2;
  let count = 0;

  while(start1 <= end1 || start2 <= end2) {
    let target;
    if(start1 <= end1 && start2 <= end2) {
      if(arr1[start1] <= arr2[start2]) {
        target = arr1[start1];
        start1 += 1;
      } else {
        target = arr2[start2];
        start2 += 1;
      }
    } else if (start1 <= end1) {
      target = arr1[start1];
      start1 += 1;
    } else {
      target = arr2[start2];
      start2 += 1;
    }

    if(count === target1Index) {
      target1 = target;
    }

    if(count === target2Index) {
      target2 = target;
      break;
    }
    count += 1;
  }

  return (target1 + target2) /2;
}
