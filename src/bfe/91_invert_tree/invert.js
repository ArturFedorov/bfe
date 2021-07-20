// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }

class Node {
  value = 0;
  left = new Node();
  right = new Node();
}

/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  if(!node) return null;
  [node.left, node.right] = [invert(node.right), invert(node.left)];

  return node;
}


function invert(node) {
  //base case
  if (!node) {
    return null;
  }

  if (node.left) {
    invert(node.left);
  }
  if (node.right) {
    invert(node.right);
  }

  const temp = node.left;
  node.left = node.right
  node.right = temp;

  return node;
}
