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
