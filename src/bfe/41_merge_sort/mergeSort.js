function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if(left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}


function mergeSort(arr) {
  const half = Math.floor(arr.length / 2);

  if(arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, half);
  console.log(arr, 'ass');
  return merge(mergeSort(left), mergeSort(arr));
}


console.log(mergeSort([4,2,100,99,10000,-1, 99, 2]))

/**
 * @param {number[]} arr
 */
function mergeSort(arr) {
  if(arr.length == 0) return [];
  if(arr.length == 1) return [arr[0]];

  // divide
  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // conquer(merge)
  arr.splice(0);
  let i = 0;
  while(i < left.length){
    if(left[i] > right[0]){
      left.splice(i,0,right.shift());
    }else{
      i++;
    }
  }
  arr.push(...left, ...right);
  return arr;
}
