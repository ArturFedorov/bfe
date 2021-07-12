/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  let maxHeight = 0;

  if(!tree) {
    return maxHeight;
  }

  for (let child of tree.children) {
    maxHeight = Math.max(maxHeight, getHeight(child))
  }

  return maxHeight + 1;
}


// BFS
function getHeight(tree) {
  if (!tree) {
    return 0
  }

  let depth = 0
  const queue = [tree, null]
  while (queue.length) {
    const node = queue.shift()
    if (node) {
      queue.push(...node.children)
    } else if (queue.length) {
      queue.push(null)
      depth++
    }
  }

  return depth + 1
}
