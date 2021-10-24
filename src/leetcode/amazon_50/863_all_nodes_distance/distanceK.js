/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
let distanceK = function(root, target, k) {
  traverse(root, null);

  return findNodes(target, target, k)
};

let findNodes = function (node, caller, distance) {
  if(distance === 0) {
    return [node.val];
  } else {
    let leftVal = [];
    let rightVal = [];
    let rootVal = [];

    if(node.left && node.left !== caller) leftVal = findNodes(node.left, node, distance - 1);
    if(node.right && node.right !== caller) rightVal = findNodes(node.right, node, distance - 1);
    if(node.root && node.root !== caller) rootVal = findNodes(node.root, node, distance - 1);

    return [...leftVal, ...rightVal, ...rootVal];
  }
}

function traverse(node, root) {
  node.root = root;
  if(node.left) traverse(node.left, node);
  if(node.right) traverse(node.right, node);
}

console.log(distanceK([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 2)); // [7,4,1]
console.log(distanceK([1], 1, 3)); // []
