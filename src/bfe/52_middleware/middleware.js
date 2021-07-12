class Middleware {
  constructor() {
    this.callbacks = [];
    this.errHandlers = [];
  }

  /**
   * @param {MiddlewareFunc} func
   */
  use(func) {
    if(func.length === 2) {
      this.callbacks.push(func)
    }

    if(func.length === 3) {
      this.errHandlers.push(func)
    }
  }

  /**
   * @param {Request} req
   */
  start(req) {
    let idx = 0;
    let errIdx = 0;
    let self = this;

    function next(nextError) {
      let args = [req, next];
      let func;
      if(nextError) {
        func = self.errHandlers[errIdx++];
        args.unshift(nextError);
      } else {
        func = self.callbacks[idx++];
      }

      try {
        func && func(...args);
      } catch (error) {
        next(error);
      }
    }
    next();
  }
}


const middleware = new Middleware();

middleware.use((req, next) => {
  req.a = 1
  next()
})

middleware.use((req, next) => {
  req.b = 2
  next()
})


middleware.use((req, next) => {
  console.log(req)
})

middleware.start({});
