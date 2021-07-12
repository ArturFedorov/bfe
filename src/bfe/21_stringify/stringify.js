
/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if(typeof data ==='bigint') {
    throw new Error('doesn\'t serialize');
  }

  if(typeof data === 'string') {
    return `"${data}"`;
  }

  if(typeof data === 'function') {
    return undefined;
  }

  if(data === Infinity || data === -Infinity) {
    return 'null';
  }

  //NaN case
  if(data !== data) {
    return 'null';
  }

  if(typeof data === 'number') {
    return `${data}`
  }

  if(typeof data === 'boolean') {
    return `${data}`
  }

  if(data === undefined) {
    return 'null';
  }

  if(data === null) {
    return 'null';
  }

  if(typeof data === 'symbol') {
    return 'null';
  }

  if(data instanceof Date) {
    return `"${data.toISOString()}"`;
  }

  if(Array.isArray(data)) {
    const arr = data.map(item => stringify(item));
    return `[${arr.join(',')}]`;
  }

  if(typeof data === 'object') {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if(value === undefined) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, []);

    return `{${arr.join(',')}}`;
  }
}


const x = {
  x: 1,
  y: '123',
  z: new Date(),
  d: undefined,
  a: null,
  t: Infinity,
  e: -Infinity,
  we: () => '123',
  q: NaN,
  b: [1,2,3],
  kl: [{test: 'as12'}],
  obj: {
    key1: [{test: 'as12'}],
    key2: ['asd']
  }
}

console.log(stringify(x));
