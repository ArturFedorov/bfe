class Node {
  val;
  next;
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

const node2 = new Node(2)
const node1 = new Node(1, node2) // connect 1 -> 2

/**
 * @param {Node} head
 * @return {boolean}
 */
function hasCircle(head) {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && slowPointer) {
    fastPointer = fastPointer.next?.next;
    slowPointer = slowPointer.next;

    if(fastPointer === slowPointer) {
      return true;
    }
  }

  return false;
}
