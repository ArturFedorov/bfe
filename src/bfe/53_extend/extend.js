const myExtends = (SuperType, SubType) => {
  let constructor = function (...args) {
    SuperType.apply(this, args);
    SubType.apply(this, args);
    Object.setPrototypeOf(this, SubType.prototype);
  }

  Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
  Object.setPrototypeOf(constructor, SuperType);

  return constructor;
}

function f(num) {
  let res = num;
  console.log(res);

  let func = (num2) => {
    res = res + num2;

    return num2 ? f(num + num2) : num;
  }

  return func;
}

// f(1)(2)(3)

function SuperType(name) {
  this.name = name
  this.forSuper = [1, 2]
  this.from = 'super'
}
SuperType.prototype.superMethod = function() {}
SuperType.prototype.method = function() {}
SuperType.staticSuper = 'staticSuper'

function SubType(name) {
  this.name = name
  this.forSub = [3, 4]
  this.from = 'sub'
}

SubType.prototype.subMethod = function() {}
SubType.prototype.method = function() {}
SubType.staticSub = 'staticSub'

let func = myExtends(SuperType, SubType);
console.log(
  func.staticSuper,
  func.staticSub,
  func.prototype
);
