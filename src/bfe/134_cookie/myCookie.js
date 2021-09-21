
// enable myCookie
function install() {
  const store = new Map();

  Object.defineProperty(document, 'myCookie', {
    get() {
      const result = [];

      for(let [key, entry] of store.entries()) {
        if(entry.maxAge !== undefined) {
          if(Date.now() - entry.createdAt >= entry.maxAge) {
            store.delete(key);
            continue;
          }
        }

        result.push(`${key}=${entry.value}`);
      }

      return result.join('; ');
    },

    set(valueStr) {
      const [keyValuePair, ...options] = valueStr.replace(/ /g, '').split(';');
      const [key, value] = keyValuePair.split('=');
      if(!key || !value) return;

      const entry = {
        value,
        createdAt: new Date()
      }

      options.forEach((option) => {
        const [key, value] = option.split('=');
        if(!key || !value) return;

        if(key === 'max-age') {
          const maxAge = parseInt(value, 10);

          if(Number.isNaN(maxAge)) return;
          entry.maxAge = maxAge * 1000;
        }
      });

      store.set(key, entry);
    },

    configurable: true
  })
}

// disable myCookie
function uninstall() {
  delete document.myCookie;
}
