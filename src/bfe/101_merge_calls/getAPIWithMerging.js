const apiCache = new Map();

function getAPIAndStoreInCache(path, config) {
  if(apiCache.size >= 5) {
    apiCache.delete(apiCache.keys().next().value);
  }

  const key = hasConfig(path, config);
  const value = getAPI(path, config);

  apiCache.set(key, value);

  setTimeout(() => {
    apiCache.delete(key);
  }, 1000);

  return value;
}

function hasConfig(path, config) {
  const keys = Object.keys(config).sort();
  return path + keys.map(key => `?${key}=${config[key]}`).join('');
}

/**
 * @param {string} path
 * @param {object} config
 * only plain objects/array made up serializable primitives
 * @returns {Promise<any>}
 */
function getAPIWithMerging(path, config) {
  const cacheKey = hasConfig(path, config);

  if(apiCache.has(cacheKey)) {
    return apiCache.get(cacheKey);
  }

  return getAPIAndStoreInCache(path, config);
}

getAPIWithMerging.clearCache = () => {
  apiCache.clear();
}


getAPIWithMerging('/list1', { keyword: 'bfe'}).then(console.log)
// 1st call, call callAPI(), add a cache entry
getAPIWithMerging('/list2', { keyword: 'bfe'}).then(console.log)
// 2nd call, call callAPI(), add a cache entry
getAPIWithMerging('/list3', { keyword: 'bfe'}).then(console.log)
// 3rd call, call callAPI(), add a cache entry
getAPIWithMerging('/list4', { keyword: 'bfe'}).then(console.log)
// 4th call, call callAPI(), add a cache entry
getAPIWithMerging('/list5', { keyword: 'bfe'}).then(console.log)
// 5th call, call callAPI(), add a cache entry

getAPIWithMerging('/list6', { keyword: 'bfe'}).then(console.log)
