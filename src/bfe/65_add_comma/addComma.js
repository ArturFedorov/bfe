/**
 * @param {number} num
 * @return {string}
 */
function addComma(num) {
  const str = num.toString();
  let [integer, fraction] = str.split('.');

  integer = integer.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  if(fraction === undefined) return integer;

  return `${integer}.${fraction}`;
}

console.log(addComma(-0)); // '1'
console.log(addComma(1)); // '1'
console.log(addComma(1000)); // '1,000'
console.log(addComma(-12345678)); // '-12,345,678'
console.log(addComma(12345678.12345)); // '12,345,678.12345'
console.log(addComma(1230.2323));
console.log(addComma(-0.1234));


function addComma2(num) {
  const str = String(num);
  const splited = str.split('.');

  const lastFraction = splited.length > 1 ? `.${splited[1]}` : '';

  return Number(splited[0]).toLocaleString() + lastFraction;
}

function addComma(num) {
  const sign = num < 0 ? -1 : 1
  if (sign < 0) {
    num *= -1
  }

  const str = num.toString()
  const [integer, fraction] = str.split('.')

  const arr = []

  const digits = [...integer]
  for (let i = 0; i < digits.length; i++) {
    arr.push(digits[i])
    // add extra commas
    // care for the 0
    const countOfRest = digits.length - (i + 1)
    if (countOfRest % 3 === 0 && countOfRest !== 0) {
      arr.push(',')
    }
  }

   const newInteger = (sign < 0 ? '-' : '') + arr.join('')

   if (fraction === undefined) return newInteger
   return newInteger + '.' + fraction
}
