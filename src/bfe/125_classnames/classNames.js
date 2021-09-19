/**
 * @param {any[]} args
 * @returns {string}
 */
function classNames(...args) {
  return args.flat(Infinity).reduce((result, item) => {

    if(item === null) return result;

    switch (typeof item) {
      case 'string':
      case 'number':
        result.push(item);
        break;
      case 'object':
        for(let [key, value] of Object.entries(item)) {
          if(!!value) {
            result.push(key);
          }
        }
        break;
    }

    return result;

  }, []).join(' ');
}

