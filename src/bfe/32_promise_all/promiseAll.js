
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  if(promises.length === 0) {
    return Promise.resolve([]);
  }

  const _promises = promises.map((item) => item instanceof Promise ? item : Promise.resolve(item));

  return new Promise((resolve, reject) => {
    const results = [];
    let isError = false;
    _promises.forEach((promise) => {
      promise.then((value) => {
        if(isError) return;
        results.push(value);
        if(results.length === promises.length) {
          resolve(results);
        }

      }, (error) => {
        if(isError) return;
        isError = true;
        reject(error);
      })
    })
  })
}


let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});

all([]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
