const addPos = require('../62_bigint_add/add');
const subtract = require('../75_bigint_subtract/subtract');

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  let sign1 = num1[0];
  let sign2 = num2[0];
  let operation;
  let sign;

  if (sign1 === '-' && sign2 === '-') {
    sign = '-';
    operation = addPos;
  } else if(sign1 === '-' || sign2 === '-') {
    operation = subtract;
    sign = '-'
  } else {
    operation = addPos;
    sign = '+'
  }

  //console.log(operation);

  const result = operation(num1.slice(1), num2.slice(1));


  return `${sign}${result}`;
}


console.log(add( '1', '-999999999999999999'));
// '-1000000000000000000'

console.log(add('-999999999999999999', '+1'));
