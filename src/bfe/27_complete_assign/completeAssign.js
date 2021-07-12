function completeAssign(target, ...sources) {
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
