class JSXOpeningElement {
  tag
}

class JSXClosingElement {
  tag
}

class JSXChildren {
  tags
}

class JSXElement {
  openingElement;
  children;
  closingElement;
}


/**
 * @param {code} string
 * @returns {any} AST
 */
function parse(code) {
  let currentIndex = 0;

  const goToNext = () => {
    currentIndex += 1;
  }

  const goUntil = (reg) => {
    const start = currentIndex;

    while(currentIndex < code.length && !reg.test(code[currentIndex])) {
      currentIndex += 1;
    }

    return code.slice(start, currentIndex);
  }

  const goUntilNonWhitespace = () => goUntil(/\S/);

  const expect = (char) => {
    if(code[currentIndex] !== char) {
      throw new Error('unexpected token:' + code[currentIndex]);
    }
  }

  const parseOpeningElement = () => {
    goUntilNonWhitespace();
    expect('<');
    goToNext();
    goUntilNonWhitespace();
    const tag = goUntil(/<|>|\s/);

    const element = {
      tag
    };
    goUntilNonWhitespace();
    expect('>');
    goToNext();
    return element;
  }

  const parseChildren = () => {
    const text = goUntil(/<|>/);
    return [text];
  }

  const parseClosingElement = () => {
    expect('<');
    goToNext();
    goUntilNonWhitespace();
    expect('/');
    goToNext();
    if(code[currentIndex] === '/') {
      throw new Error('unexpected token');
    }
    goUntilNonWhitespace();
    const tag = goUntil(/<|>|\s/);
    const element = {
      tag
    };
    goUntilNonWhitespace();
    expect('>');
    goToNext();

    goUntilNonWhitespace();
    return element;
  }

  const openingElement = parseOpeningElement();
  const children = parseChildren();
  const closingElement = parseClosingElement();

  if(openingElement.tag !== closingElement.tag) {
    throw new Error('not matched');
  }

  if(currentIndex !== code.length) {
    throw new Error('unexpected token');
  }

  return {
    openingElement,
    children,
    closingElement
  };
}

/**
 * @param {any} your AST
 * @returns {string}
 */
function generate(ast) {
  const {openingElement, children} = ast
  if (children[0]) {
    return `h("${openingElement.tag}", null, "${children[0]}")`
  } else {
    return `h("${openingElement.tag}", null)`
  }
}
