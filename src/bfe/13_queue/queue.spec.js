class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(element) {
    while(this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(element);
    while(this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
  }
  peek() {
    // get the head element
    return this.stack1.peek();
  }
  size() {
    return this.stack1.size();
    // return count of element
  }
  dequeue() {
    return this.stack1.pop();
    // remove the head element
  }
}
