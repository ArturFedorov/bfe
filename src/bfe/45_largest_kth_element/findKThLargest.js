/**
 * @param {number[]} arr
 * @param {number} k
 */
function findKThLargest(arr, k) {
  function largest(l, r) {
    let piv = partition(arr, l, r);
    if(piv + 1 === k) {
      return arr[piv];
    }
    if(piv < k) {
      return  largest(piv + 1, r);
    } else {
      return largest(l, piv - 1);
    }
  }

  return largest(0, arr.length - 1);
}

function partition(arr, l, r) {
  const pivot = arr[r];
  let start = l;

  for(let i = l; i < r; i++) {
    if(arr[i] >= pivot) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      start++;
    }
  }
  [arr[r], arr[start]] = [arr[start], arr[r]];
  return start;
}
