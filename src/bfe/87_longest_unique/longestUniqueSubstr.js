
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
    } else {
      const a = [...cache].join('');

      result = a.length > result.length ? a : result;
      cache.clear();
    }
  }

  return result;
}



function longestUniqueSubstr(str, set = new Set()) {
  if(set.has(str[0])) {
    return Array.from(set).join('');
  } else {
    set.add(str[0]);
    return longestUniqueSubstr(str.substring(1), set);
  }
}


console.log(longestUniqueSubstr('aaaaa'));
console.log(longestUniqueSubstr('abcabc'));
console.log(longestUniqueSubstr('abcabcdefg'));
