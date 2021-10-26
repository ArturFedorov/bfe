class Heap {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    this.siftUp(this.items.length - 1);
  }

  pop() {
    this.swap(0, this.items.length - 1);
    const value = this.items.pop();
    this.siftDown(0);

    return value;
  }

  peek() {
    return this.items[0];
  }

  length() {
    return this.items.length;
  }

  siftUp(index) {
    if(index === 0) {
      return;
    }

    const parentIndex = Math.floor((index - 1) / 2);
    if(this.items[parentIndex] <= this.items[index]) {
      return;
    }

    this.swap(parentIndex, index);
    this.siftUp(parentIndex);
  }

  siftDown(index) {
    const leftIndex = (index * 2) + 1;
    const rightIndex = (index * 2) + 2;

    if(leftIndex >= this.items.length && rightIndex >= this.items.length) {
      return;
    }

    const leftValue = (leftIndex < this.items.length) ? this.items[leftIndex] : Infinity;
    const rightValue = (rightIndex < this.items.length) ? this.items[rightIndex] : Infinity;

    const minIndex = (leftValue < rightValue) ? leftIndex : rightIndex;

    if(this.items[index] < this.items[minIndex]) return;
    this.swap(index, minIndex);
    this.siftDown(minIndex);
  }

  toArray() {
    return this.items.sort((a, b) => b - a);
  }

  swap(index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
}


/*
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
function topK(arr, k) {
  const minHeap = new Heap();

  arr.forEach(num => {
    minHeap.push(num);
    console.log(minHeap)

    if(minHeap.length() > k) {
      minHeap.pop();
    }
  });

  console.log(minHeap, 'minHeap');
  return minHeap.toArray();
}

console.log(topK([1, 10, 8, 9, 10, 2, 3, 4, 8, 8, 6], 4)); // [10, 10, 9, 8]
