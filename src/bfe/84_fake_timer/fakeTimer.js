class FakeTimer {
  constructor() {
    this.originalInterval = window.setInterval;
    this.originalClearInterval = window.clearInterval;
    this.originalDateNow = Date.now;

    this.currenTime = 0;
    this.id = 0;
    this.tasks = [];
  }

  install() {
    Date.now = () => this.currenTime;

    window.setInterval = (fn ,wait) => {
      const timer = this.currenTime += wait;

      const task = {
        id: ++this.id,
        fn,
        wait,
        timer
      };

      this.tasks.push(task);
      this.tasks.sort((a, b) => a.timer - b.timer);

      return this.id;
    }

    window.clearInterval = (id) => {
      const idx = this.tasks.findIndex(task => task.id === id);

      if(idx > -1) {
        this.tasks.splice(idx, 1);
      }
    }
  }

  uninstall() {
    window.setInterval = this.originalInterval;
    window.clearInterval = this.originalClearInterval;
    Date.now = this.originalDateNow;
  }

  tick() {
    while(this.tasks.length) {
      const task = this.tasks.shift();
      this.currenTime = task.timer;
      task.timer += task.wait;
      const idx = this.tasks.findIndex(item => item.timer > task.timer);

      if(idx > -1) {
        this.tasks.splice(idx -1, 0, task);
      } else {
        this.tasks.push(task);
      }

      task.fn();
    }
  }
}
