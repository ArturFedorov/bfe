/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  const path = [];
  let node = target;
  while(node !== rootA) {
    const parent = node.parentElement;
    const index = Array.prototype.indexOf .call(parent.children, node);
    path.push(index);
    node = parent;
  }

  return path.reduceRight((node, pathItem) => {
    return node.children[pathItem]
  }, rootB)
}


/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  if(rootA === target) {
    return rootB;
  }
  for (let i = 0; i < rootA.children.length; i++) {
    const foundNode = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
    if(foundNode) return foundNode;
  }
}
