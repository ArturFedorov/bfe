
/**
 * @param {string} str
 * @return {string}
 */
// function compress(str) {
//   if(!str || str.length === 0) return str;
//   let counter = {};
//
//   for(let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if(char in counter) {
//       counter[char]++;
//     } else {
//       counter[char] = 1;
//     }
//   }
//
//   return Object.entries(counter).reduce((acc, [index, val]) => {
//     val = val === 1 ? '' : val;
//
//     return acc+index+val;
//   }, '');
// }

function compress(str) {
  if(!str || str.length === 0) return str;
  let currentChar = '';
  let counter = 0;
  let result = '';
  for(let i = 0; i < str.length + 1; i++) {
    const char = str[i];

    if(char === currentChar) {
      counter+=1;
    } else {
      result +=
        counter === 0 ? '' :
        counter === 1 ? currentChar : currentChar + counter;

      currentChar = char;
      counter = 1;
    }
  }

  return result;
}


console.log(compress('a')); // 'a'
console.log(compress('aa')); // 'a2'
console.log(compress('aaa')); // 'a3'
console.log(compress('aaab')); // 'a3b'
console.log(compress('aaabb')); // 'a3b2'
console.log(compress('aaabba'));
