// You can use Observer which is bundled to your code

// class Observer {
//   // subscriber could one next function or a handler object {next, error, complete}
//   constructor(subscriber) { }
//   next(value) { }
//   error(error) { }
//   complete() {}
// }


class Subject {
  constructor() {
    this.observers = new Set();
  }
  subscribe(subscriber) {
    const sub = new Observer(subscriber);
    this.observers.add(sub);
    return {
      unsubscribe: () => {
        this.observers.delete(sub)
      }
    }
  }

  next = (value) => {
    this.observers.forEach((subscriber) => {
      subscriber.next(value);
    })
  }

  error = (error) => {
    this.observers.forEach((subscriber) => {
      subscriber.error(error);
    })
  }

  complete = () => {
    this.observers.forEach((subscriber) => {
      subscriber.complete();
    })
  }
}
