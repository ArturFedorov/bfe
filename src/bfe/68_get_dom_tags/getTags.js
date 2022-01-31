
/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
  const set = new Set();
  const stack = [tree];

  while (stack.length > 0) {
    const top = stack.pop();
    set.add(top.tagName.toLowerCase());
    stack.push(...top.children);
  }

  return Array.from(set);
}


function getTags(tree) {
  const result = {};
  const dfs = (node, result) => {
    if(!node) {
      return;
    }
    result[node.tagName.toLowerCase()] = 1;
    for (const child of node.children) {
      dfs(child, result);
    }
  }
  dfs(tree, result);
  return Object.keys(result);
}
