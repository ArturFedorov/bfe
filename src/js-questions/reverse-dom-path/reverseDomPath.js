function reverseDomPath(element, root) {
  function path(node, acc = []) {
    if(!node) return acc;
    else {
      const index = Array.from(node.parent.children).indexOf(node);
      acc.push(index);
      return path(node.parent, acc);
    }
  }

  const result = path(element);

  let elem = root;
  while (result.length > 0) {
    elem = elem.children[result.pop()];
  }

  return elem;
}
