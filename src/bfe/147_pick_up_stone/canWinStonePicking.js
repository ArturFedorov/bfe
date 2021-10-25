
/**
 * @param {number} n
 * @return {'A' | 'B' | null}
 */
function canWinStonePicking(n) {
  if(n === 0) {
    return null;
  }

  return n % 3 === 1 ? 'B' : 'A';
}


console.log(canWinStonePicking(1));
// 'B'

console.log(canWinStonePicking(2));
// 'A'

console.log(canWinStonePicking(3));
// 'A'

console.log(canWinStonePicking(4));
// 'B'
