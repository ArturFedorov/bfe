/**
 * @param {string} s
 * @return {number[]}
 */
let partitionLabels = function(s) {
  let result = [];
  let start = 0;
  let end = 0;

  while (end < s.length) {
    for(let i = 0; i < end + 1; i++) {
      end = Math.max(end, s.lastIndexOf(s[i]))
    }

    result.push(end - start + 1);
    start = end + 1;
    end = start;
  }

  return result;
};


console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9,7,8]
console.log(partitionLabels('eccbbbbdec')); // [10]
