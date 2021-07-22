/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
function countOne(num) {
  let count = 0;

  while(num >= 1) {
    count += num % 2;
    num = Math.floor(num / 2);
  }

  return count;
}


console.log(countOne(1));
console.log(countOne(257799));

