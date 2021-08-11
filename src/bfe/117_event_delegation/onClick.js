/**
 * @param {HTMLElement} root
 * @param {(el: HTMLElement) => boolean} predicate
 * @param {(e: Event) => void} handler
 */
function onClick(root, predicate, handler) {
  let matchingTags = [];
  let stack = [root];

  while(stack.length > 0) {
    let curr = stack.pop();

    if(predicate(curr)) {
      matchingTags.push(curr);
    }

    stack.push(...curr.children);
  }

  for(let passedNodes of matchingTags) {
    passedNodes.addEventListener('click', handler, false);
  }
}
