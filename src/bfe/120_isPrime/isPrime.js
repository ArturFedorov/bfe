/**
 * @param {number} num - positive integer
 */
function isPrime(num) {
  if(num < 2) return false;
  if(num === 2) return true;

  let i = 2;

  while (Math.ceil(num/i) >= i) {
    if(num % i === 0) {
      return false
    }

    i++;
  }

  return true;
}
