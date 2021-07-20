/**
 * @param {string} str
 * @return {string}
 */

function trim(str) {
  if(typeof str !== 'string') return str;
  const regex = /\s/;

  let start = 0;
  let end = str.length - 1;

  while (regex.test(str[start])) {
    start++;
  }
  while (regex.test(str[end])) {
    end--;
  }

  return str.slice(start, end + 1);
}


const greeting = '    Hello world!   ';

console.log(trim(greeting));
