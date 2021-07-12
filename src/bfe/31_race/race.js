/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs){
  return function (callback) {
    let handled = false;
    funcs.forEach((func) => {
      return func((error, funcData) => {
        if(!handled) {
          handled = true;
          callback(error, funcData);
        }
      })
    })
  }
}


const async1 = (callback) => {
  setTimeout(() => callback(undefined, 1), 300)
}

const async2 = (callback) => {
  setTimeout(() => callback(undefined, 2), 100)
}

const async3 = (callback) => {
  setTimeout(() => callback(undefined, 3), 200)
}

const first = race(
  [
    async1,
    async2,
    async3
  ]
)

first((error, data) => {
  console.log(data) // 2, since 2 is the first to be given
}, 1)
