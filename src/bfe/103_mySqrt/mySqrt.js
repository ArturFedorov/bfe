
/**
 * @param {any} x
 * @return {number}
 */
function mySqrt(x) {
  if(x === 0 || x == Infinity) return x;
  if(typeof x != 'number' || x == -Infinity || x < 0 || Number.isNaN(x)) return NaN;

  const precision = 0.00001;
  let guess = x / 2;

  let lastGuess = x / 2;

  while (true) {
    guess = (guess + x / guess) / 2;
    if(lastGuess - guess <= precision) return Math.trunc(guess);
    lastGuess = guess;
  }
}
