
/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  // your code here
  const ver1 = +v1.split('.').reduce((acc, next) => {
    return acc + next
  } , '')

  const ver2 = +v2.split('.').reduce((acc, next) => {
    return acc + next
  } , '')

  if(ver1 > ver2) {
    return 1
  } else if(ver1 < ver2) {
    return -1;
  } else {
    return 0;
  };
}

// console.log(compare('12.1.0', '12.0.9'));
//
// console.log(compare('12.1.0', '12.1.2'));
// // -1, meaning latter one is greater
//
// console.log(compare('5.0.1', '5.0.1'));
// 0, meaning they are equal.

console.log( {} +  + [] + {}  + [])


const getVersion = (str) => str.split('.').map(Number);

function compare(v1, v2) {
  const version1 = getVersion(v1);
  const version2 = getVersion(v2);
  for (let i = 0; i < 3; i++) {
    if (version1[i]> version2[i]) return 1;
    if (version1[i] < version2[i]) return -1;
  }
  return 0;
}
