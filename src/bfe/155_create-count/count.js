const count = (() => {
  let num = 0;
  const func = () => ++num;
  func.reset = () => num = 0;
  return func;
})();

function counter() {
  let counter = 0;
  const increment = () => counter+=1;
  let reset = () => counter = 0;

  increment.reset = reset;
  return increment
}

const count = counter()

console.log(count());
console.log(count());
console.log(count());
console.log(count.reset());
console.log(count());
