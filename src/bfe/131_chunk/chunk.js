
/**
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
function chunk(items, size, results = []) {
  if(!items || items.length < 1 || size < 1) return results;

  if(items.length <= size) {
    results.push(items);
    return results;
  }

  results.push(items.slice(0, size));
  const restOfArray = items.slice(size);
  return chunk(restOfArray, size, results);
}

console.log(chunk([1, 2, 3, 4, 5], 3));
console.log(chunk([1, 2, 3, 4, 5], 2));
