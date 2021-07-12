function cloneDeep(data, cache = new Map()) {
  if(!data || typeof data !== 'object') {
    return data;
  }

  if(cache.has(data)) {
    return cache.get(data);
  }

  const response = Array.isArray(data) ? [] : {};
  cache.set(data, response);
  const keys = Reflect.ownKeys(data);
  console.log(cache, 'CACHE');

  for (let key of keys) {
    response[key] = cloneDeep(data[key], cache);
  }

  return response;

}

const d = {
  a: 12,
  bar: { value: 2 },
  b: { a: { b: 323}, c: "323"},
  c: [{ a:1 }, { a:1 }]
}

const d2 = cloneDeep(d);
console.log(d.b.a === d2.b.a)
// console.log(Object.assign({}, 1))
// console.log(Object.getOwnPropertyDescriptors(d));
