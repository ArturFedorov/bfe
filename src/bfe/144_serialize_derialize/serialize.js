const wrap = (type, value) => {
  const delimiter = '~';

  return delimiter + (type !== undefined ? `${type}${delimiter}` : '') + (value !== undefined ? `${value}${delimiter}` : '');
};


/**
 * @params {Serializable} data
 * @returns {string}
 */
const stringify = (data) => {
  return JSON.stringify(data, (k, v) => {
    if (typeof v === 'undefined') {
      return wrap('undefined');
    } else if (Number.isNaN(v)) {
      return wrap('NaN');
    } else if (v === -Infinity) {
      return wrap('-Infinity');
    } else if (Object.is(Infinity, v)) {
      return wrap('Infinity');
    } else if (v === null) {
      return wrap('null');
    } else if (typeof v === 'boolean') {
      return wrap('boolean', v);
    } else if (typeof v === 'bigint') {
      return wrap('bigint', v);
    } else if (typeof v === 'string') {
      return v.replaceAll(wrap(), '\\' + wrap());
    } else {
      return v;
    }
  });
}

/**
 * @params {string} data
 * @returns {Serializable}
 */
const parse = (data) => {
  let setToUndefinedLater = Symbol();

  const result = JSON.parse(data, (k, v) => {
    if (typeof v === 'object' || typeof v === 'number') {
      return v;
    } else if (v === wrap('undefined')) {
      if (k) { // is an object property
        return setToUndefinedLater;
      } else { // is a primitive
        return undefined;
      }
    } else if (v === wrap('NaN')) {
      return NaN;
    } else if (v === wrap('-Infinity')) {
      return -Infinity;
    } else if (v === wrap('Infinity')) {
      return Infinity;
    } else if (v === wrap('null')) {
      return null;
    } else if (v.startsWith(wrap('boolean'))) {
      return !!v.split(wrap())[2];
    } else if (v.startsWith(wrap('bigint'))) {
      return BigInt(v.split(wrap())[2]);
    } else {
      return v.replaceAll('\\' + wrap(), wrap());
    }
  });

  const recursiveChangeValue = (obj, oldValue, newValue) => {
    Object.keys(obj).forEach((k) => {
      if (obj[k] !== null && typeof obj[k] === 'object') {
        recursiveChangeValue(obj[k], oldValue, newValue);
      }
      if (obj[k] === oldValue) {
        obj[k] = newValue;
      }
    });
  };

  if (result !== null && typeof result === 'object') {
    recursiveChangeValue(result, setToUndefinedLater, undefined);
  }

  return result;
}
