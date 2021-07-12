
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
