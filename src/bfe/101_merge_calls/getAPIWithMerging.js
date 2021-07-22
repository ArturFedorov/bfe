// getAPI is bundled with your code, config will only be some plain objects.
// const getAPI = <T>(path: string, config: SomeConfig): Promise<T> => { ... }


// you code here maybe, if you want some outer scope.

/**
 * @param {string} path
 * @param {object} config
 * only plain objects/array made up serializable primitives
 * @returns {Promise<any>}
 */
function getAPIWithMerging(path, config) {
  // your code here
}

getAPIWithMerging.clearCache = () => {
  // your code here
}
