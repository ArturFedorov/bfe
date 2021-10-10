// Optimizing Box Weights:
//
//   An Amazon Fulfillment Associate has a set of items that need to be packed into two boxes.
//   Given an integer array of the item weights (arr) to be packed, divide the item weights into two subsets,
//   A and B, for packing into the associated boxes, while respecting the following conditions:
//
//   The intersection of A and B is null.
//   The union A and B is equal to the original array. The number of elements in subset A is minimal.
//   The sum of A's weights is greater than the sum of B's weights.
//
//   Return the subset A in increasing order where the sum of A's weights is greater than the sum of B's weights.
//   If more than one subset A exists, return the one with the maximal total weight.

function findSet(n, arr) {
  let cumulativeSumFromLeft = [];
  cumulativeSumFromLeft[0] = arr[0];

  for(let  i = 1; i < n; i++) {
    cumulativeSumFromLeft[i] = arr[i] + cumulativeSumFromLeft[i - 1];
  }

  console.log(cumulativeSumFromLeft);
  let rightSum = 0;
  for(let i = n - 1; i>= 0; i--) {
    if(cumulativeSumFromLeft[i] < rightSum) {
      return arr.slice(i + 1, n);
    }
    console.log(rightSum, 'rightSum');
    rightSum += arr[i];
  }

  return arr.slice(0, n);
}

function findSet2(arr) {
  let aSetSum = 0;
  let bSetSum = 0;

  for(let a of arr) {
    bSetSum+=a;
  }
  let lastElement = Infinity;

  arr.sort((a, b) => b- a);
  let minimalHeaviestSetA = [];

  for(let a of arr) {
    if(aSetSum > bSetSum) {
      break;
    }

    lastElement = a;
    minimalHeaviestSetA.push(lastElement);
    aSetSum += lastElement;
    bSetSum += lastElement;
  }

  minimalHeaviestSetA.reverse();

  return minimalHeaviestSetA;
}


console.log(findSet(5, [3, 7, 5, 6, 2]));
console.log(findSet(6, [1, 2, 2, 3, 4, 5]));

console.log(findSet2( [3, 7, 5, 6, 2]), 'second');

// The 2 subsets in arr that satisfy the conditions for A are [5, 7] and [6, 7]:
// • A is minimal (size 2)
// • Sum(A) = (5 + 7) = 12 > Sum(B) = (2 + 3 + 6) = 11
// • Sum(A) = (6 + 7) = 13 > Sum() = (2 + 3 + 5) = 10
// • The intersection of A and B is null and their union is equal to arr.
//   The subset A where the sum of its weight is maximal is [6, 7].
