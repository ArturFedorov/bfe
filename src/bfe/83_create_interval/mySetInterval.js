const map = new Map();
let globalId = 0;

/**
 * @param {Function} func
 * @param {number} delay
 * @param {number} period
 * @return {number}
 */
function mySetInterval(func, delay, period) {
  let count = 0
  let id = globalId++;

  function run() {
    let _id = setTimeout(() => {
      func();
      count++;
      run();
    }, delay + period * count);

    map.set(id, _id);
  }

  run();

  return id;
}

/**
 * @param { number } id
 */
function myClearInterval(id) {
  clearTimeout(map.get(id));
  map.delete(id);
}


let prev = Date.now()
const func = () => {
  const now = Date.now()
  console.log('roughly ', Date.now() - prev)
  prev = now
}

const id = mySetInterval(func, 100, 200)
