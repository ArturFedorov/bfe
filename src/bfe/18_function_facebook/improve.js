let items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
];

const excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'}
];

// function excludeItemsOriginal(items, excludes) {
//   excludes.forEach( pair => {
//     items = items.filter(item => item[pair.k] === item[pair.v])
//   })
//
//   return items
// }



/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  let excludesObject = {};
  excludes.forEach(pair => excludesObject[`${pair.k}_${pair.v}`] = true);

  return items.filter(item => !Object.keys(item).some(key => excludesObject[`${key}_${item[key]}`]))
}

console.log(excludeItems(items, excludes));


/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const excludesMap = new Map();
  for (const {k, v} of excludes) {
    const set = excludesMap.get(k) || new Set();
    set.add(v);
    excludesMap.set(k, set);
  }

  return items.filter((item) => {
    return !Object.keys(item).some((k) => {
      return  excludesMap.has(k) && excludesMap.get(k).has(item[k]);
    });
  });
}
