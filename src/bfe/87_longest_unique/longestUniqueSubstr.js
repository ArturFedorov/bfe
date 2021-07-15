
/**
 * @param {string} str
 * @return {string}
 */
function longestUniqueSubstr(str) {
  if(str === '') return '';
  let cache = new Set();

  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if(!cache.has(char))  {
      cache.add(char);
      result += char
    } else {
      return result;
    }
  }
}


console.log(longestUniqueSubstr('aaaaa'));
console.log(longestUniqueSubstr('abcabc'));
console.log(longestUniqueSubstr('a12#2'));

// function longestUniqueSubstr(str, set = new Set()) {
//   if(set.has(str[0])) {
//     return Array.from(set).join('');
//   } else {
//     set.add(str[0]);
//     return longestUniqueSubstr(str.substring(1), set);
//   }
// }
