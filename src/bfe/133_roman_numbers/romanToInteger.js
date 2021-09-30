/**
 * @param {string} str - roman numeral string
 * @returns {number} integer
 */
function romanToInteger(str) {
  const numerals = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  let backwards = str.split('').reverse();

  let prev = 0;
  return backwards.reduce((sum , char) => {
    const value = numerals.get(char);
    sum = sum + (value >= prev ? value : -value);
    console.log(prev, value,' vale');
    prev = value;

    return sum;
  }, 0);
}


console.log(romanToInteger('CXXIII'));
console.log(romanToInteger('MCMXCIX'));
console.log(romanToInteger('MMMCDXX'));
