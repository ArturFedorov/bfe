// please complete the implementation
class EventEmitter {
  constructor() {
    this.subscribers = {};
  }
  subscribe(eventName, callback) {
    if(!this.subscribers[eventName]) {
      this.subscribers[eventName] = [callback];
    } else {
      this.subscribers[eventName] = [...this.subscribers[eventName], callback];
    }

    return {
      release: () => {
        const cbIndex =  this.subscribers[eventName].findIndex(fn => fn === callback);
        this.subscribers[eventName].splice(cbIndex, 1);
      }
    }
  }

  emit(eventName, ...args) {
    this.subscribers[eventName].forEach(fn => fn.call(this, ...args));
  }
}

const emitter = new EventEmitter()

const sub1  = emitter.subscribe('event1', () => console.log('1'));
const sub2 = emitter.subscribe('event2', () => console.log('2'));

// same callback could subscribe
// on same event multiple times
const sub3 = emitter.subscribe('event1', () => console.log('3'));
emitter.emit('event1', 1, 2);

sub3.release();
