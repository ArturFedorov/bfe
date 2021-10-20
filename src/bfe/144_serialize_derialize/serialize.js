/**
 * @params {Serializable} data
 * @returns {string}
 */
const stringify = (data) => {
  if(typeof data ==='bigint') {
    return `"${data}"`;
  }

  if(typeof data === 'string') {
    return `"${data}"`;
  }

  if(typeof data === 'function') {
    return undefined;
  }

  if(data === Infinity) {
    return 'Infinity';
  }

  if(data === -Infinity) {
    return '-Infinity';
  }

  //NaN case
  if(data !== data) {
    return 'NaN';
  }

  if(typeof data === 'number') {
    return `${data}`
  }

  if(typeof data === 'boolean') {
    return `${data}`
  }

  if(data === undefined) {
    return 'undefined';
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

/**
 * @params {string} data
 * @returns {Serializable}
 */
const parse = (str) => {
  if(str === '') {
    throw new Error();
  }

  if(str[0]==='\'') {
    throw new Error('\'');
  }

  if(str === 'null') {
    return null;
  }

  if(str === 'NaN') {
    return NaN;
  }

  if(str === 'undefined') {
    return undefined;
  }

  if(str === '{}') {
    return {};
  }

  if(str === '[]') {
    return [];
  }

  if(str === 'true') {
    return true;
  }

  if(str === 'false') {
    return false;
  }

  if(str[0] === '"') {
    return str.slice(1, -1);
  }

  if (str[str.length - 1] === "n") {
    let num = Number(str.slice(0, str.length - 1));
    return BigInt(num);
  }

  if(+str === +str) {
    return Number(str);
  }

  if(str[0] === '{') {
    return str.slice(1, -1).split(',').reduce((acc, item) => {
      const index = item.indexOf(':');
      const key = item.slice(0, index);
      const value = item.slice(index + 1);
      acc[parse(key)] = parse(value);
      return acc;
    }, {})
  }
  if(str[0] === '[') {
    return str.slice(1, -1).split(',').map(item => parse(item));
  }
}


console.log(parse(stringify([1n, null, undefined, NaN]))); // [1n, null, undefined, NaN]
console.log(parse(stringify({a: undefined, b: NaN}))); // {a: undefined, b: NaN}
