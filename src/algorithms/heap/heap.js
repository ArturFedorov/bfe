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

  swap(index1, index2) {
    const temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }
}

module.exports = Heap;
