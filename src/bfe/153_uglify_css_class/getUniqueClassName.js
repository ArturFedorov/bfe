let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let id = 0;

/**
 * @returns {string}
 */
function getUniqueClassName() {
  let className = '';
  let num = id++;

  while (num >= 0) {
    className = chars[num % chars.length] + className;
    num = Math.floor(num / chars.length) - 1;
  }

  return className;
}

getUniqueClassName.reset = function() {
  id = 0;
}

console.log(getUniqueClassName());
// 'a'

console.log(getUniqueClassName());
// 'b'

console.log(getUniqueClassName());
// 'c'

// skip cases till 'Y'

console.log(getUniqueClassName());
// 'Z'

console.log(getUniqueClassName());
// 'aa'

console.log(getUniqueClassName());
// 'ab'

console.log(getUniqueClassName());
// 'ac'

// skip more cases

console.log(getUniqueClassName());
// 'ZZ'

console.log(getUniqueClassName());
// 'aaa'

console.log(getUniqueClassName());
// 'aab'

console.log(getUniqueClassName());
// 'aac'

getUniqueClassName.reset()

console.log(getUniqueClassName());
// 'a'
