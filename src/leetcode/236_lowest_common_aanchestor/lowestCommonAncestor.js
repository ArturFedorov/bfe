/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function(root, p, q) {
  let result = null;

  const dfs = (node) => {
    if(node === null) return false;

    let left = dfs(node.left);
    let right = dfs(node.right);

    let current = node === p || node === q;

    if(left + right + current >= 2) {
      result = node;
    }

    return left || right || current;
  }

  dfs(root);

  return  result;
};


// lowestCommonAncestor([3,5,1,6,2,0,8,null,null,7,4], 5, 1);
