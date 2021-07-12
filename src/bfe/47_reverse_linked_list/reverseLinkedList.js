class NodeItem {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {NodeItem} list
 * @return {NodeItem}
 */
const reverseLinkedList = (list) => {
  let nextNode = null;
  let prevNode = null;

  while(list) {
    nextNode = list.next;
    console.log(nextNode, 'nextNode');
    list.next = prevNode;
    console.log(list.next, 'list.next');
    prevNode = list;
    console.log(prevNode, 'prevNode');
    list = nextNode;
    console.log(list, 'list');
  }

  return prevNode;
}


const Three = new NodeItem(3, null)
const Two = new NodeItem(2, Three)
const One = new NodeItem(1, Two)

reverseLinkedList(Three)


const reverseLinkedList = (list, next) => {
  if (!list) return;
  const currentNext = list.next;
  list.next = next;
  if (currentNext) {
    return reverseLinkedList(currentNext, list);
  }
  return list;
}
