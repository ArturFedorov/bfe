function add(num1, num2) {
  let result = '';
  let carriyng = false;

  while(num1.length || num2.length) {
    let num = parseInt(num1.substring(num1.length - 1) || 0) +
              parseInt(num2.substring(num2.length - 1) || 0) +
              (+carriyng);

    carriyng = num >= 10;
    result = `${num.toString().split('')[1] || num}${result}`;

    num1 = num1.slice(0, -1);
    num2 = num2.slice(0, -1);
  }

  return carriyng ? `1${result}` : result;
}


module.exports = add;
