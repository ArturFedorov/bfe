class FakeTimer {
  taskQueue = [];
  time = 0;
  install() {
    // setTimeout(), clearTimeout(), and Date.now()
    // are replaced
    this.originalTimeout = window.setTimeout;
    this.originalClearTimeout = window.clearTimeout;
    this.originalDateNow = Date.now;

    window.setTimeout = (callback, wait) => {
      wait += this.time;
      const newTask = {
        callback,
        wait,
      }
      let index
      for(let i = 0;i <= this.taskQueue.length; i++) {
        if(i === this.taskQueue.length) {
          index = i
          this.taskQueue[i] = newTask
          break
        }
        if(this.taskQueue[i].wait >= newTask.wait) {
          index = i
          this.taskQueue.splice(i, 0, newTask)
          break
        }
      }
      return index;
    };

    window.clearTimeout = (timerId) => {
      this.taskQueue.splice(timerId, 1);
    };

    Date.now = () => this.time;
  }

  uninstall() {
    // restore the original APIs
    // setTimeout(), clearTimeout() and Date.now()
    window.setTimeout = this.originalTimeout;
    window.clearTimeout = this.originalClearTimeout;
    Date.now = this.originalDateNow;
  }

  tick() {
    // run all the schedule functions in order
    while (this.taskQueue.length) {
      const { callback, wait } = this.taskQueue.shift();
      this.time = wait;
      callback();
    }
  }
}
