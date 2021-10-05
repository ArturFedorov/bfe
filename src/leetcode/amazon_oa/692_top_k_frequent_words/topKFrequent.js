/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
let topKFrequent = function(words, k) {
  const countMap = {};


  for(let word of words) {
    if(!countMap[word]) {
      countMap[word] = 1;
    } else {
      countMap[word]++;
    }
  }

  let results = Object.entries(countMap);

  results.sort((a, b) => {
    if(a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }

    return b[1] - a[1];
  })

  return results.slice(0, k).map((item) => item[0]);
};


console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
//["i","love"]

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
// ["the","is","sunny","day"]
