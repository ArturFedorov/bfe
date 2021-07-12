/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  let sorting = true;
  let end = arr.length - 1;

  while (sorting) {
    sorting = false;
    for(let j = 0; j<end; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j + 1], arr[j]];
        sorting = true;
      }
    }

    end--;
  }
}


const a = [0];
a[3] = 3;
for (let item of a) {
  console.log(item)
}
// a.map(item => {console.log(item)})

delete a[3]
console.log(a, a.length)
a[2] = 2
a.length = 1
console.log(a[0],a[1],a[2])
