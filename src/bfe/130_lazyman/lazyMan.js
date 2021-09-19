
// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

class ALazyMan {
  constructor(name, logFn) {
    this.name = name;
    this.logFn = logFn;

    this.normalTasks = [];
    this.urgentTasks = [];

    this.greet();

    setTimeout(() => {
      this._triggerNext();
    }, 0);
  }

  greet() {
    this.normalTasks.push(['greet']);
    return this;
  }

  eat(food) {
    this.normalTasks.push(['eat', food]);
    return this;
  }

  sleep(time) {
    this.normalTasks.push(['sleep', time]);
    return this;
  }

  sleepFirst(time) {
    this.urgentTasks.push(['sleep', time]);
    return this;
  }

  _triggerNext() {
    let task = this.urgentTasks.shift();

    if(!task) {
      task = this.normalTasks.shift();
    }

    if(!task) {
      return;
    }

    const [action, param] = task;

    switch (action) {
      case 'greet':
        this.logFn(`Hi, I'm ${this.name}.`);
        this._triggerNext();
        return;
      case 'eat':
        this.logFn(`Eat ${param}.`);
        this._triggerNext();
        return;
      case 'sleep':
        setTimeout(() => {
          this.logFn(`Wake up after ${param} second${param > 1 ? 's' : ''}.`);
          this._triggerNext();
          return;
        }, param * 1000);
    }
  }
}

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {ALazyMan}
 */
function LazyMan(name, logFn) {
  return new ALazyMan(name, logFn);
}


LazyMan('Jack', console.log)
  .eat('banana')
  .sleepFirst(1)
  .eat('apple')
  .sleep(1)
