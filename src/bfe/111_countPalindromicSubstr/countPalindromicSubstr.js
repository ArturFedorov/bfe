
/**
 * @param {string} str
 * @return {number}
 */
function countPalindromicSubstr(str) {
  let count = 0;
  for(let center = 0; center < str.length; center = center + 0.5) {
    let low = Math.floor(center);
    let high = Math.ceil(center);

    while(low >= 0 && high <= str.length) {
      if(str.charAt(low) === str.charAt(high)) {
        count++;
        low--;
        high++;
      } else {
        break;
      }
    }
  }

  return count;
}


console.log(countPalindromicSubstr('madam'));
