
/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max){
  const results = [];
  async function doWork(iterator) {
    for(let [index, item] of iterator) {
      const result = await item();
      results[index] = result;
    }
  }

  const iterator = Array.from(funcs).entries();
  const workers = Array(max).fill(iterator).map(doWork);

  return Promise.all(workers).then(() => results);
}


const a = Array.from([() => {}, () => {}, () => {}]).entries()

for ([index, item] of a) {
  console.log(index)
   break
}


for ([index, item] of a) {
  console.log(index)
  break
}
