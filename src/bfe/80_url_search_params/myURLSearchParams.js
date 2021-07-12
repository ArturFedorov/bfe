class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    const pureString = init[0] === '?' ? init.slice(1) : init.slice();
    const items = pureString.split('&');

    this.paramsMap = items.reduce((acc, item) => {
      const [key, value] = item.split('=');
      acc.has(key) ? acc.get(key).push(value) : acc.set(key, [value]);
      return acc;
    }, new Map());

    console.log(this.paramsMap);
  }

  /**
   * @params {string} name
   * @params {any} value
   */
  append(key, value) {
    this.paramsMap.get(key).push(String(value));
  }

  /**
   * @params {string} name
   */
  delete(key) {
    this.paramsMap.delete(key);
  }

  /**
   * @returns {Iterator}
   */
  *entries() {
    for(let [key, value] of this.paramsMap) {
      for (const v of value) {
        yield [key, v];
      }
    }
  }

  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback, thisArgs) {
    for(let [key, value] of this.paramsMap) {
      for(const v of value) {
        callback.call(thisArgs ?? Object.create(null), v, key);
      }
    }
  }

  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(key) {
    return this.paramsMap.has(key) ? this.paramsMap.get(key)[0] : null;
  }

  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(key) {
    return this.paramsMap.get(key) || [];
  }

  /**
   * @params {string} name
   * @return {boolean}
   */
  has(key) {
    return this.paramsMap.has(key);
  }

  /**
   * @return {Iterator}
   */
  *keys() {
    for(let key in this.paramsMap) {
      yield key;
    }
  }

  /**
   * @param {string} name
   * @param {any} value
   */
  set(key, value) {
    this.paramsMap.set(key, [String(value)]);
  }

  // sor all key/value pairs based on the keys
  sort() {
    const sorted = Array.from(this.paramsMap).sort((a, b) => {
      if(a[0] < b[0]) {
        return - 1;
      }

      if(a[0] > b[0]) {
        return 1;
      }
      return 0;
    });

    this.paramsMap = new Map(sorted);
  }

  /**
   * @return {string}
   */
  toString() {
    let result = '';
    const keyValArray = Array.from(this.paramsMap);
    console.log(keyValArray);
    keyValArray.forEach((entry, idx) => {
      const [key, value] = entry;

      if(value.length > 1) {
        value.forEach(pVal => {
          result = result + `${key}=${pVal}&`;
        })
      } else {
        result = result + `${key}=${value}&`;
      }
    });

    return result.slice(0, result.length - 1);
  }

  /**
   * @return {Iterator} values
   */
  *values() {
    for(let [_, values] of this.paramsMap) {
      for (const v of values) yield v;
    }
  }
}


const params = new MyURLSearchParams('?a=1&a=2&b=2')
console.log(params.get('a')); // '1'
console.log(params.getAll('a')); // ['1', '2']
console.log(params.get('b')); // '2'
console.log(params.getAll('b')); // ['2']


params.append('a', 3)
params.set('b', '3')
console.log(params.toString());   // 'a=1&a=2&b=3&a=3'
