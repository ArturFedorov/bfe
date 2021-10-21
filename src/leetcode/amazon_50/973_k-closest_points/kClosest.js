class Node {
  constructor(val, key) {
    this.val = val;
    this.key = key;
  }
}

class MinHeap {
  constructor() {
    this.array = [null];
  }

  getParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChildIdx(idx) {
    return idx * 2;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 1;
  }

  insert(node) {
    this.array.push(node);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if(idx === 1) return;
    let parentIndex = this.getParentIdx(idx);
    let parentNode = this.array[parentIndex];
    let node = this.array[idx];

    if(!parentNode || ! node) return;

    if(parentNode.val > node.val) {
      [this.array[idx], this.array[parentIndex]] = [this.array[parentIndex], this.array[idx]];
      this.siftUp(parentIndex);
    }
  }

  poll() {
    if(this.array.length <= 1) return null;
    if(this.array.length === 2) return  this.array.pop();
    let min = this.array[1];

    this.array[1] = this.array.pop();
    this.siftDown(1);
    return min;
  }

  siftDown(idx) {
    if(this.array.length <= 2) return;
    let node = this.array[idx];
    if(!node) return;

    let leftIndex = this.getLeftChildIdx(idx);
    let rightIndex = this.getRightChildIdx(idx);

    let leftNodeValue = this.array[leftIndex] ? this.array[leftIndex].val : Infinity;
    let rightNodeValue = this.array[rightIndex] ? this.array[rightIndex].val : Infinity;

    if(node.val < leftNodeValue && node.val < rightNodeValue) return;

    let swapIdx = leftNodeValue < rightNodeValue ? leftIndex : rightIndex;

    [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]];
    this.siftDown(swapIdx);
  }

  isEmpty() {
    return this.array.length <= 1;
  }

  peek() {
    return this.array[1];
  }
}

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
let kClosest = function(points, k) {
  let [pq, result] = [new MinHeap(), []];

  points.forEach(pt => {
    let dist = Math.pow(pt[0] - 0, 2) + Math.pow(pt[1] - 0, 2);
    pq.insert(new Node(dist, pt));
  });

  while (k > 0) {
    k--;
    let node = pq.poll();
    result.push(node.key);
  }

  return result;
};

console.log(kClosest([[1, 3], [-2, 2]], 1)); //[[-2,2]]
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2)); // [[3,3],[-2,4]]
