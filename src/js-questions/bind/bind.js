Function.prototype.bind = function (context, ...args) {
  const fn = this;
  return function binded() {
    return fn.call(context, ...args, ...arguments);
  }
}
