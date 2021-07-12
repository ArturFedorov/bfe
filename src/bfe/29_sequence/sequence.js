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
function sequence(funcs){
  let i = 0;
  return function helper(callback, funcData) {
    if(i === funcs.length) {
      callback(undefined, funcData);
      return;
    }

    funcs[i++]((error, data) => {
      if(error) {
        callback(error);
        return;
      }
      helper(callback, data);
    }, funcData)  ;
  }
}


const asyncTimes2 = (callback, num) => {
  setTimeout(() => callback(null, num * 2), 100)
}


const asyncTimes4 = sequence(
  [
    asyncTimes2,
    asyncTimes2
  ]
)

asyncTimes4((error, data) => {
  console.log(data) // 4
}, 1)
