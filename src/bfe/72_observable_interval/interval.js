
/**
 * @param {number} period
 * @return {Observable}
 */
function interval(period) {
  return new Observable((sub) => {
    let count = 0;

    setInterval(() => {
      sub.next(count++)
    }, period);
  })
}
