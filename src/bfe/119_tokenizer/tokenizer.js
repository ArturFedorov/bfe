/**
 * @param {string} str
 * @return {Generator}
 */
function* tokenize(str) {
  let buffer = '';

  for(let i = 0; i < str.length; i++) {
    let char = str[i];

    switch (char) {
      case ' ':
        continue;
      case '+':
      case '-':
      case '*':
      case '/':
      case '(':
      case ')':
        if(buffer != '') {
          yield buffer;
          buffer = '';
        }
        yield char;
        continue
      default:
        buffer += char;
    }
  }

  if(buffer != '') {
    yield buffer;
  }
}


const tokens = tokenize(' 1 * (20 -   300      ) ')


while (true) {
  let token = tokens.next()
  if (token.done) {
    break
  }
  console.log(token.value)
}
