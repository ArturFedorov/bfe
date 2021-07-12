const obj = {
  value: "hello",
  printTenTimes: function () {
    for(var i = 0; i < 10; i++) {
      setTimeout( function () {
        console.log(i, this.value);
      }, 0)
    }
  }
}

obj.printTenTimes()


// console.log((() => {}) === (() => {}))


// function foo() {
//   // "use strict"
//   x = 1;
// }
// foo();
// console.log(x); // 1



// var foo;
// console.log(foo);
// console.log(foo === undefined);
// console.log(typeof foo === 'undefined');
// console.log(foo == null);
// function bar() {}
// var baz = bar();
// console.log(baz);

