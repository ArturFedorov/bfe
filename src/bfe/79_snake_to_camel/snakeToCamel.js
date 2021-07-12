/**
 * @param {string} str
 * @return {string}
 */
function snakeToCamel(str) {
  const chars = str.split('');

  const dash = '_';
  const results = [];

  for(let i = 0; i< chars.length; i++) {
    if(
      chars[i] === dash &&
      chars[i-1] &&
      chars[i-1] !== dash &&
      chars[i+1] &&
      chars[i+1] !== dash
    ) {
      i++;
      results.push(chars[i].toUpperCase());
    } else {
      results.push(chars[i]);
    }
  }

  return  results.join('');
}


const x = [
  snakeToCamel('snake_case'),
// 'snakeCase'
  snakeToCamel('is_flag_on'),
// 'isFlagOn'
  snakeToCamel('is_IOS_or_Android'),
// 'isIOSOrAndroid'
  snakeToCamel('_first_underscore'),
// '_firstUnderscore'
  snakeToCamel('last_underscore_'),
// 'lastUnderscore_'
  snakeToCamel('_double__underscore_'),
]

x.forEach(i => console.log(i));
