/**
 * @param {string} str
 * @return {boolean}
 */
function validate(str) {
  const parenthesis = new Map([
    [']', '['],
    ['}', '{'],
    [')', '(']
  ]);

  const stack = [];
  const openSet = new Set(['(', '[', '{']);

  for( let i = 0; i < str.length; i += 1) {
    if(openSet.has(str[i])) {
      stack.push(str[i]);
    } else {
      if(stack.pop() !== parenthesis.get(str[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


console.log(validate('{}[]()'));
// true

console.log(validate('{[()]}'));
// true

console.log(validate('{[}]'));
// false, they are not in the right order

console.log(validate('{}}'));
