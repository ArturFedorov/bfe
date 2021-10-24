/**
 * @param {number[]} time
 * @return {number}
 */
let numPairsDivisibleBy60 = function(time) {
  let store = {};
  let mod = 0;
  let pairsCount = 0;

  time.forEach((duration) => {
    mod = duration % 60;
    if(mod === 0) mod = 60;
    if(store[60 - mod]) pairsCount += store[60 - mod];

    mod = duration % 60;

    if(!store[mod]) {
      store[mod] = 1;
    } else {
      store[mod]++;
    }
  });

  return pairsCount;
};


console.log(numPairsDivisibleBy60([30, 20, 150, 100, 40])); // 3
console.log(numPairsDivisibleBy60([60, 60, 60])); // 3
