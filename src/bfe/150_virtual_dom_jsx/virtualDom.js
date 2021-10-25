
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

    while (currentIndex < code.length && !reg.test(code[currentIndex])) {
      currentIndex += 1;
    }

    return code.slice(start, currentIndex);
  }

  const goUntilWhiteSpace = () => goUntil(/\S/);

  const expect = (char) => {
    if(code[currentIndex] !== char) {
      throw new Error('unexpected token:' + code[currentIndex]);
    }
  }

  const disabledCharactersInTagName = /<|>|\s|\//

  const parseOpeningElement = () => {
    goUntilWhiteSpace();
    expect('<');
    goToNext();
    goUntilWhiteSpace();

    const tag = goUntil(disabledCharactersInTagName);

    const element = {
      tag
    };

    goUntilWhiteSpace();
    expect('>');
    goToNext();
    return element;
  }

  const parseChildren = () => {
    const children = [];
    const text = goUntil(/<|>/);

    if(text.length > 0) children.push(text);

    const index = currentIndex;

    try {
      const element = parseElement();
      children.push(element);

      children.push(...parseChildren());
    } catch (e) {
      currentIndex = index;
    }

    return children;
  }

  const parseClosingElement = () => {
    expect('<');
    goToNext();
    goUntilWhiteSpace();
    expect('/');
    goToNext();
    goUntilWhiteSpace();
    const tag = goUntil(disabledCharactersInTagName);

    const element = {
      tag
    };
    goUntilWhiteSpace();
    expect('>');
    goToNext();

    return element;
  }

  const parseElement = () => {
    const openingElement = parseOpeningElement();
    const children = parseChildren();
    const closingElement = parseClosingElement();

    if(openingElement.tag !== closingElement.tag) {
      throw new Error('not matched');
    }

    return {
      openingElement,
      children,
      closingElement
    }
  }

  const element = parseElement();

  goUntilWhiteSpace();

  if(currentIndex !== code.length) {
    throw new Error('unexpected token');
  }

  return element;
}

/**
 * @param {any} your AST
 * @returns {string}
 */
function generate(ast) {
  const { openingElement, children } = ast;
  const finalTag = /[A-Z]/.test(openingElement.tag[0]) ? openingElement.tag : `"${openingElement.tag}"`;

  if(children[0]) {
    return `h(${finalTag}, null, ${
      children.map(child => {
        if(typeof child === 'string') {
          return `"${child}"`;
        }

        return generate(child);
      }).join(',')
    })`
  } else {
    return `h(${finalTag}, null)`
  }
}
