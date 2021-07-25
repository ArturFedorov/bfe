class Queue {
  enqueue(element) {
    // add new element to the queue
  }
  peek() {
    // return the head element
  }
  dequeue() {
    // remove head element from the queue
  }
  size() {
    // return the queue size
  }
}



// you need to complete the following Stack, using only Queue
class Stack {
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }

  push(element) {
    while (this.queue1.size()) {
      this.queue2.enqueue(this.queue1.dequeue());
    }

    this.queue1.enqueue(element);

    while (this.queue2.size()) {
      this.queue1.enqueue(this.queue2.dequeue());
    }
  }
  peek() {
    return this.queue1.peek();
  }
  pop() {
    return this.queue1.dequeue();
  }
  size() {
    return this.queue1.size();
  }
}
