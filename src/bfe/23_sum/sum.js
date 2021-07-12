/**
 * @param {number} num
 */
function sum(num) {
  const func = function(num2) { // #4
    return num2 ? sum(num+num2) : num; // #3
  }

  func.valueOf = () => num; // #2
  return func; // #1
}

const sum1 = sum(1)
console.log(sum1(2)==3); // == 3 // true
console.log(sum1(3)==4); //== 4 // true
console.log(sum(1)(2)(3)); //== 6 // true
console.log(sum(5)(-1)(2)); //== 6 // true
