// This is the class for the node
// you can use this directly as it is bundled with your code

class Node {
  value;
  left;
  right;
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

/**
 * @param {Node} root
 * @return {string}
 */
function serialize(root) {
  function helper(node, arr) {
    if(!node) {
      arr.push('null');
      return;
    }

    arr.push(node.value);
    helper(node.left, arr);
    helper(node.right, arr);
  }

  const arr = [];
  helper(root, arr);

  return arr.toString();
}

/**
 * @param {string} str
 * @return {Node}
 */
function deserialize(str) {
  function helper(arr) {
    if(arr.length === 0) {
      return null;
    }

    const value = arr.shift();

    if(value === 'null') {
      return null;
    }

    const node = new Node(value);
    node.left = helper(arr);
    node.right = helper(arr);

    return node;
  }

  const arr = str.split(',');
  return helper(arr);
}
