function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

function intersection2(arr1, arr2) {
  const count  = new Set();
  const results = [];
  const joined = [...arr1, ...arr2];

  for(let i = 0; i < joined.length; i++) {
    if(!count.has(joined[i])) {
      count.add(joined[i]);
    } else {
      if(!results.includes(joined[i])) {
        results.push(joined[i]);
      }
    }

  }

  return results;
}

function intersection3(arr1, arr2) {
  const collection  = new Set();
  const joined = [...arr1, ...arr2];

  for(let i = 0; i < joined.length; i++) {
    if(!collection.has(joined[i])) {
      collection.add(joined[i]);
    } else {
      continue;
    }
  }

  return Array.from(collection);
}


console.log(intersection([1, 434, 434, 2, 3, 4], [34, 434, 4, 5, 1]));
console.log(intersection2([1, 434, 434, 2, 3, 4], [34, 434, 4, 5, 1]));
console.log(intersection3([1, 434, 434, 2, 3, 4], [34, 434, 4, 5, 1]));
