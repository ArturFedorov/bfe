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




console.log(pq);
