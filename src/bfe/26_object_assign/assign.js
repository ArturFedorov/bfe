
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if(target === undefined || target === null) {
    throw new Error('err')
  }

  target = Object(target);

  sources.forEach(source => {
    if(source === null || source === undefined) {
      return;
    }

    Object.defineProperties(
      target,
      Object.getOwnPropertyDescriptors(source)
    )
  })

  return target;
}


console.log(objectAssign({a:1}, [{b:2}, {c:3}]))
