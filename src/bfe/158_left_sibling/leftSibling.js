/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
function previousLeftSibling(root, target) {
  if(target.previousElementSibling) {
    return target.previousElementSibling;
  }

  let parentElement = target.parentElement;

  while (parentElement) {
    parentElement = previousLeftSibling(root, parentElement);

    if(parentElement && parentElement.lastElementChild) {
      return parentElement.lastElementChild;
    }
  }

  return null;
}


/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */
function previousLeftSibling(root, target) {
  let currLevel = [root];
  while (currLevel.length) {
    const nextLevel = [];
    for (let i = 0; i < currLevel.length; i++) {
      const currNode = currLevel[i];
      if (currNode === target) {
        return currLevel[i - 1] || null;
      }
      nextLevel.push(...currNode.children);
    }
    currLevel = nextLevel;
  }
  return null;
}
