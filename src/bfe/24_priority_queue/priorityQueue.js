class PriorityQueue {
  // compare is a function defines the priority, which is the order
  // the elements closer to first element is sooner to be removed.
  constructor(compare) {
    this.collection = [];
    this.compare = compare;
  }

  // add a new element to the queue
  // you need to put it in the right order
  add(element) {
    let added = false;

    for(let i = 0; i < this.collection.length; i++) {
      console.log(this.compare(element, this.collection[i]), element, this.collection[i], 'index', i);
      if(this.compare(element, this.collection[i]) < 0) {
        this.collection.splice(i, 0, element);
        added = true;
        break
      }
    }
    if(!added) {
      this.collection.push(element);
    }
  }

  // remove the head element and return
  poll() {
    return this.collection.shift();
  }

  // get the head element
  peek() {
    return this.collection[0];
  }

  // get the amount of items in the queue
  size() {
    return this.collection.length;
  }
}

function hello() {
  let x = 1;
  {
    let x = 0;
    console.log(x);
  }

  console.log(x);
}

const pq = new PriorityQueue((a, b) => a - b)
// (a, b) => a - b means
// smaller numbers are closer to index:0
// which means smaller number are to be removed sooner

// pq.add(5)
// // now 5 is the only element
//
// pq.add(2)
// // 2 added
//
// pq.add(1)
//
// pq.add(3)
//
// pq.add(4)
// 1 added
pq.add(5)
pq.add(3)
pq.add(1)
pq.add(4)
pq.add(2)
// const result = []
// while (pq.size() > 0) {
//   result.push(pq.poll())
// }
console.log(pq);




// // complete the implementation
// class PriorityQueue {
//   /**
//    * @param {(a: any, b: any) => -1 | 0 | 1} compare -
//    * compare function, similar to parameter of Array.prototype.sort
//    */
//   constructor(compare) {
//     this.compare = (a, b) => compare(a, b) > 0;
//     this.heap = [];
//   }
//
//   /**
//    * return {number} amount of items
//    */
//   size() {
//     return this.heap.length;
//   }
//
//   /**
//    * returns the head element
//    */
//   peek() {
//     return this.heap.length > 0 ? this.heap[0] : undefined;
//   }
//
//   /**
//    * @param {any} element - new element to add
//    */
//   add(element) {
//     this.heap.push(element);
//     if(this.heap.length > 1) {
//       this.moveUp(this.heap.length - 1);
//     }
//   }
//
//   /**
//    * remove the head element
//    * @return {any} the head element
//    */
//   poll() {
//     if(this.heap.length <= 1) {
//       return this.heap.pop();
//     }
//
//     this.swap(0, this.heap.length - 1);
//     const removed = this.heap.pop();
//     if(this.heap.length > 1) {
//       this.moveDown(0);
//     }
//
//     return removed;
//   }
//
//   moveDown(index) {
//     if(index >= this.heap.length) return;
//
//     const child = this.getChild(index);
//     if(!child) return;
//
//     if(this.compare(this.heap[index], this.heap[child])) {
//       this.swap(index, child);
//       this.moveDown(child);
//     }
//   }
//
//   getChild(index) {
//     let left = index * 2 + 1;
//     if(left >= this.heap.length) left = null;
//     let right = index * 2 + 2;
//     if(right >= this.heap.length) right = null;
//
//     if(left && right) {
//       return this.compare(this.heap[left], this.heap[right]) ? right : left;
//     }
//
//     if(right) {
//       return right;
//     }
//
//     if(left) {
//       return left;
//     }
//   }
//
//   moveUp(index) {
//     if(index === 0) {
//       return;
//     }
//
//     const parent = Math.floor(index / 2);
//     if(this.compare(this.heap[parent], this.heap[index])) {
//       this.swap(parent, index);
//       this.moveUp(parent);
//     }
//   }
//
//   swap(i, j) {
//     [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//   }
// }
