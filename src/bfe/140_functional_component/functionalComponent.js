/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 * type FunctionComponent = (props: object) => MyElement
 */

/**
 * @param { string | FunctionComponent } type - valid HTML tag name or Function Component
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
function render(myElement) {
  if(typeof myElement === 'string') {
    return document.createTextNode(myElement);
  }

  const { type, props } = myElement;
  const { children, ...attrs } = props;

  if(typeof type === 'function') {
    return render(myElement.type(props));
  }

  const element = document.createElement(type);

  for(let [attr, value] of Object.entries(attrs)) {
    element[attr] = value;
  }

  const childArr = Array.isArray(children) ? children : [children];

  for(let node of childArr) {
    element.append(render(node));
  }

  return element;
}


const h = createElement
const Title = ({children, ...res}) => h('h1', res, ...children);

console.log(Title);
