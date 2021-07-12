/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (error, data) => {
        if(error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
}


const exampleFn = function (a, b, cb) {
  cb(a + b);
}
const promisified = promisify(exampleFn);
promisified(5, 15).then(res => console.log(res)); //20
