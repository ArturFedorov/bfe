
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function subtract(num1, num2) {
  if(!num1 || !num2) return num1 || num2;

  let i = num1.length - 1;
  let j = num2.length - 1;

  let carry = 0;
  let result = [];

  while (i >= 0 || j >=0 || carry) {
    let sub = (+num1[i--] || 0) - (+num2[j--] || 0) + carry + 10;
    carry = Math.floor(sub / 10) > 0 ? 0 : -1;

    result.unshift(sub % 10);
  }

  while (result.length > 1 && +result[0] === 0) {
    result.shift();
  }

  return result.join('');
}

module.exports = subtract;
