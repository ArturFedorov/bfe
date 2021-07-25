
/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  const results = [];
  if(!root) return results;

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    results.push(node);

    for (const child of node.children) {
      queue.push(child);
    }
  }

  return results;
}
