/**
 * @param {string} str
 * @return {string}
 */
function smallestUniqueSubstr(str) {
  const chars = [...str];
  const used = {};

  const results = [];

  function storeCharsFrequency(acc, char) {
    if(!acc[char]) {
      acc[char] = 1;
    } else {
      acc[char]++;
    }

    return acc;
  }

  const hashMap = chars.reduce(storeCharsFrequency, {});

  for(let i = 0; i < chars.length; i++) {
    const char = chars[i];
    hashMap[char]--;

    if(used[char]) continue;

    while(char < results[results.length - 1] && hashMap[results[results.length - 1]] > 0) {
      used[results[results.length - 1]] = false;
      results.pop();
    }

    results.push(char);
    used[char] = true;
  }

  return results.join('');
}

console.log(smallestUniqueSubstr('xyzabcxyzabc'));
