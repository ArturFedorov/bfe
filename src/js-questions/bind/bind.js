Function.prototype.bind = function (bind, ...args) {
  const fn = this;
  return function binded() {
    return fn.call(fn, ...args, ...arguments);
  }
}
