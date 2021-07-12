Function.prototype.mycall = function(thisArg, ...args) {
  let context = thisArg || window;
  context = Object(context);
  let func = Symbol();
  context[func] = this;
  let result = context[func](...args);
  delete context[func];

  return result;
}
