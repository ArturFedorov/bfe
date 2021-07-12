
const isObject = (obj) => typeof obj === 'object' && obj !== null;
/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  if('$push' in command) {
    if(!Array.isArray(data)) {
      throw new Error('$push can be only with Array');
    }

    return [...data, ...command['$push']];
  }

  if('$merge' in command) {
    if(!isObject(data)) {
      throw new Error('merge can be only with Objects');
    }

    return {
      ...data,
      ...command['$merge']
    }
  }

  if('$apply' in command) {
    if(typeof command['$apply'] !== 'function') {
      throw new Error('apply can be only with functions');
    }
    return command['$apply'](data);
  }

  if('$set' in command) {
    return command['$set'];
  }

  if (!isObject(data)) {
    throw new Error('not object for complex data')
  }

  let newData = Array.isArray(data) ? [...data] : {...data};

  for(const key of Object.keys(command)) {
    // console.log(newData[key]);
    //console.log(command[key]);
    newData[key] = update(newData[key], command[key]);
  }

  return newData;
}

const arr = [1, 2, 3, 4];
const newArr = update(arr, {$push: [5, 6]});
console.log(newArr); // [1, 2, 3, 4, 5, 6]

const state = {
  a: {
    b: {
      c: 1
    }
  },
  d: 2
}

const newState = update(
  state,
  {a: {b: { c: {$set: 3}}}}
)

console.log(newState);

/*
{
  a: {
    b: {
      c: 3
    }
  },
  d: 2
}
*/

const arrSet = [1, 2, 3, 4]
const newArrSet = update(
  arrSet,
  {0: {$set: 0}}
);

console.log(newArrSet);
//  [0, 2, 3, 4]



const state2 = {
  a: {
    b: {
      c: 1
    }
  },
  d: 2
}

const newStateMerge = update(
  state2,
  {a: {b: { $merge: {e: 5}}}}
);

console.log(newStateMerge);
/*
{
  a: {
    b: {
      c: 1,
      e: 5
    }
  },
  d: 2
}
*/


const arrApply = [1, 2, 3, 4]
const newArrApply = update(arrApply, {0: {$apply: (item) => item * 2}})
console.log(newArrApply);
// [2, 2, 3, 4]
