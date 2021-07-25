/**
 * @param {string} str
 * @return {string | null}
 */
function firstDuplicate(str) {
  const set = new Set();
  const middle = Math.floor(str.length / 2);

  const firstHalf = str.slice(0 , middle);
  const secondHalf = str.slice(middle + 1);

  for (let i = 0; i < firstHalf.length; i++) {
    const firstChar = firstHalf[i];
    const secondChar = secondHalf[i];

    if(!set.has(firstChar)) {
      set.add(firstChar);
    } else {
      return firstChar;
    }

    if(!set.has(secondChar)) {
      set.add(secondChar);
    } else {
      return secondChar;
    }
  }

  return null;
}


console.log(firstDuplicate('abca'));
// 'a'

console.log(firstDuplicate('abcdefe'));
// 'e'

console.log(firstDuplicate('abcdef'));
// null
