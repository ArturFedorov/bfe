Array.prototype.myMap = function(callback, thisObj) {
  const results = [];

  this.forEach((...args) => {
    const index = args[1];
    results[index] = callback.apply(thisObj, args);
  })

  return results;
}
