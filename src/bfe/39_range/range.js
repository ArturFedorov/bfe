
/**
 * @param {number} from
 * @param {number} to
 */
function range(from, to) {
  let start = from;
  const result = [];

  while (start <= to) {
    result.push(start);
    start++;
  }

  return result;
}


for (let num of range(4, 10)) {
  console.log(num)
}
