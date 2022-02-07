

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeros(list) {
  for(let i = list.length - 1; i >= 0; i--) {
    if(list[i] === 0) {
      list.splice(i, 1);
      list.push(0);
    }
  }
}


const list = [1,0,0,2,3,1,0,0,2,3,1,0,0,2,3,1,0,0,2,3,1,0,0,2,3,1,0,0,2,3,1,0,0,2,3]
moveZeros(list)
console.log(list) // [1,2,3,0,0]
