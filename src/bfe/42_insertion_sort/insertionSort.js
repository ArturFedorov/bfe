
/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  let n = arr.length;

  for(let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    while((j > -1) && (current < arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j+1] = current;
  }

  return arr;
}


console.log(insertionSort([4,2,100,99,10000,-1, 99, 2]  ));
// 2 current
// 0 j
// 2 4
// 2

// 2 i
// 100 current
// 1 j
// 100 4
//

// 3 i
// 99 current
// 
