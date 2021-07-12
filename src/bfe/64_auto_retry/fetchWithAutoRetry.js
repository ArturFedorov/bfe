/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return fetcher().catch(e => {
    if(maximumRetryCount === 0) {
      throw e;
    } else {
      return fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
    }
  })
}


let callCount = 0
let fetcher = () => new Promise((resolve, reject) => {
  callCount += 1
  if (callCount >= 3) {
    resolve('bfe')
  } else {
    reject('error')
  }
})


fetchWithAutoRetry(fetcher, 4)
  .then((r) => console.log(r, 'e'))
  .catch((e) => console.log(e, 'er'))
