/*
 type TypIsBad = (version: number) => boolean
 */

/**
 * @param {TypIsBad} isBad
 */
function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    let left = 0;
    let right = version;

    while(left <= right) {
      const middle = Math.floor((left + right) /2);
      console.log(middle, 'middle');
      if(isBad(middle)) {
        right = middle - 1;
        console.log(right, 'right');
      } else {
        left = middle + 1;
        console.log(left, 'left')
      }
    }

    return isBad(left) ? left : -1;
  }
}


//firstBadVersion((i) => i >= 4)(100);
console.log(firstBadVersion((i) => i >= 4)(3), 'result');
