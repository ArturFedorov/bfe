/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
let suggestedProducts = function(products, searchWord) {
  products.sort();
  let res = new Array(searchWord.length);

  for(let i = 0; i< searchWord.length; i++) {
    res[i] = (products = products.filter((word) => word[i] === searchWord[i])).slice(0, 3);
  }

  return res;
};
