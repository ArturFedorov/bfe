/**
 *
 * @param {number[]} prices
 */
function shopkeeperSale(prices) {
  let total = 0;
  let stack = [];
  for(let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      total += prices[stack.pop()] - prices[i];
    }

    stack.push(i);
  }

  let result = [];
  while (stack.length > 0) {
    let idx = stack.pop();
    total += prices[idx];
    result.unshift(idx);
  }

  console.log(result);
  return total;
}

console.log(shopkeeperSale([2, 3, 1, 2, 4, 2]));
// 8
// 2 5

console.log(shopkeeperSale([5, 1, 3, 4, 6, 2]));
// 14
// 1 5

console.log(shopkeeperSale([1, 3, 3, 2, 5]));
// 9
// 0 3 4


console.log(shopkeeperSale([2,4,3,2,4,6]));
// 14
// [3, 4, 5]
