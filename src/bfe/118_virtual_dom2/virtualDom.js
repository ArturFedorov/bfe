/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}


/**
 * @param { MyElement }
 * @returns { HTMLElement }
 */
function render(json) {
  if(typeof json === 'string') {
    return document.createTextNode(json);
  }

  const { type, props: { children, ...attrs}} = json;
  let element = document.createElement(type);

  for(let [attr, value] of Object.entries(attrs)) {
    element[attr] = value;
  }

  const childArr = Array.isArray(children) ? children : [children];

  for(let node of childArr) {
    element.append(render(node));
  }

  return element;
}
