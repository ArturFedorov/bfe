
/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
  const memo = new Set();

  for(let i = 0; i < arr.length; i++) {
    if(memo.has(arr[i])) {
      arr.splice(i, 1);
      i--;
    } else {
      memo.add(arr[i]);
    }
  }

}

console.log(deduplicate([1, 5, 'b', 5, 1, undefined, 'a', 'a', 'a', 'b', true, 'true', false, {}, {}]));;


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
