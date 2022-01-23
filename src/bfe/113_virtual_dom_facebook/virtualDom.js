/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */
function virtualize(element) {
  const result = {
    type: element.tagName.toLowerCase(),
    props: {}
  }

  for(let attr of element.attributes) {
    const name = attr.name === 'class' ? 'className' : attr.name;
    result.props[name] = attr.value;
  }

  const children = [];
  for(let node of element.childNodes) {
    if(node.nodeType === 3) { // text node
      children.push(node.textContent);
    } else {
      children.push(virtualize(node));
    }
  }

  result.props.children = children.length === 1 ? children[0] : children;

  return result;
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(json) {
  if(typeof json === 'string') {
    return document.createTextNode(json);
  }

  const { type, props: { children, ...attrs }} = json;
  const element = document.createElement(type);

  for(let [attr, value] of Object.entries(attrs)) {
    element[attr] = value;
  }

  const childrenArr = Array.isArray(children) ? children : [children];

  for(let child of childrenArr) {
    element.append(render(child));
  }

  return element
}
