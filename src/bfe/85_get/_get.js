/**
 * @param {object} source
 * @param {string | string[]} path
 * @param {any} [defaultValue]
 * @return {any}
 */
function get(source, path, defaultValue = undefined) {
  if(!path.length) return defaultValue || undefined;

  let props = Array.isArray(path) ? path : path.split(/\.|\[|\]/g);

  props = !props[props.length - 1] ? props.slice(0, -1) : props;

  console.log(props);
  return props.reduce((result, cur, i) => {
    return result[cur] || defaultValue;
  }, source);
}


const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  }
}

console.log(get(obj, 'a.b.c')); // [1,2,3]
console.log(get(obj, 'a.b.c.0')); // 1
console.log(get(obj, 'a.b.c[1]')); // 2
console.log(get(obj, ['a', 'b', 'c', '2'])); // 3
console.log(get(obj, 'a.b.c[3]')); // undefined
console.log(get(obj, 'a.c', 'bfe')); // 'bfe'

