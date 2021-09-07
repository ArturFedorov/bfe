/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
  return function (finalCb) {
    let callback = (err, data) => {
      if(typeof data === 'function') {
        data(callback);
      } else {
        finalCb(err, data);
      }
    }

    callback(null, thunk);
  }
}

const func1 = (cb) => {
  setTimeout(() => cb(null, 'ok'), 10)
}

const func2 = (cb) => {
  setTimeout(() => cb(null, func1), 10)
}

const func3 = (cb) => {
  setTimeout(() => cb(null, func2), 10)
}


flattenThunk(func3)((error, data) => {
  console.log(data) // 'ok'
})
