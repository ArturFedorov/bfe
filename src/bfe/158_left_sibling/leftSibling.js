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
