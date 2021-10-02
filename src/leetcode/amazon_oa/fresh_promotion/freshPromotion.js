function freshPromotion(codeList, shoppingCart) {
  const list = flat(codeList);
  const cart = [];

  let cartLength = shoppingCart.length;
  let listLength = list.length;

  if(cartLength < listLength || cartLength === 0 || cartLength === null) return 0;
  if(listLength === 0 || listLength === null) return 1;

  if(cartLength >= listLength) {
    for(let j = 0; j < codeList.length; j++) {
      for(let i = 0; i < codeList[j].length; i++) {
        let match = shoppingCart.findIndex(x => x === codeList[j][0]);
        let index = match + i;

        if(shoppingCart[index] === codeList[j][i]) {
          cart.push([shoppingCart[index], index])
        } else if(codeList[j][i] === 'anything') {
          cart.push([shoppingCart[Math.floor(Math.random() * cartLength)], index])
        }
      }
    }
  }

  cart.sort((a, b) => a[1] - b[1]);
  let sum = 0;
  let any = 0;

  cart.forEach((item, index) => {
    if(item[0]===list[index]) {
      sum += 1;
    } else if(list[index] === 'anything') {
      any += 1;
    }
  });

  let count = sum + any;
  return count === listLength ? 1 : 0;
}

/**
 *
 * @param {string[]} listOfArrays
 * @return {[]}
 */
function flat(listOfArrays) {
  if(!Array.isArray(listOfArrays)) {
    return listOfArrays;
  }

  return listOfArrays.reduce((acc, current) => {
    return Array.isArray(current) ? acc.concat(flat(current)) : acc.concat(current);
  }, []);
}

console.log(freshPromotion(
  [['apple', 'apple'], ['banana', 'anything', 'banana']],
  ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']
)); // 1

console.log(freshPromotion(
  [['apple', 'apple'], ['banana', 'anything', 'banana']],
  ['banana', 'orange', 'banana', 'apple', 'apple']
)); // 0

console.log(freshPromotion(
  [['apple', 'apple'], ['banana', 'anything', 'banana']],
  ['apple', 'banana', 'apple', 'banana', 'orange', 'banana']
)); // 0

console.log(freshPromotion(
  [['apple', 'apple'], ['apple', 'apple', 'banana']],
  ['apple', 'apple', 'apple', 'banana']
)); // 0
