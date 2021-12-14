const items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'gray', type: 'shit', age: 20},
];

const excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
];

function excludeItems(items, excludes) {
  excludes = excludes.reduce((acc, { k, v}) => {
    acc[k] = v;
    return acc;
  }, {});

  return items.filter((item) => {
    return Object.keys(excludes).every(k => item[k] !== excludes[k]);
  })
}

console.log(excludeItems(items, excludes));
