/**
 * @param {any[]} args
 * @returns {string}
 */
// function classNames(...args) {
//   // your code here
// }


class Hello {
  hello() {
    console.log('hello')
  }

  currentHello() {
    return new Promise((res, rej) => {
      console.log(this);
      this.hello();
      console.log('inside');
      res('pipa');
    })
  }
}


const z = new Hello();
// z.currentHello().then(console.log);


class A{

   method(){
    const this1 = this
    const a = new Promise((res) => {
      const this2 = this;
      res(this1 === this2);
    })

     return a;
  }
}

console.log(new A().method().then(console.log))
