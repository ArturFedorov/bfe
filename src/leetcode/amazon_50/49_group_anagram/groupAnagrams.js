/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
  let strMap = new Map();

  for(let str of strs) {
    const key = str.split('').sort().join('');

    if(!strMap.has(key)) {
      strMap.set(key, [str]);
    } else {
      strMap.get(key).push(str);
    }
  }

  return [...strMap.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]];
console.log(groupAnagrams(['a'])); // [["a"]]
