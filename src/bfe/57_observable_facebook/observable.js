class Subscriber {
  constructor(subscriber) {
    if(typeof subscriber === 'function') {
      this.subscriber = { next: subscriber }
    } else {
      this.subscriber = subscriber;
    }

    this.isUnsubscribed = false;
  }

  next(value) {
    if(this.isUnsubscribed) return;
    if(this.subscriber.next) {
      try {
        this.subscriber.next(value);
      } catch (err) {
        this.error(err);
      }
    }
  }

  complete() {
    if(this.isUnsubscribed) return;
    if(this.subscriber.complete) {
      this.subscriber.complete();
    }

    this.unsubscribe();
  }

  error(err) {
    if(this.isUnsubscribed) return;
    if(this.subscriber.error) {
      this.subscriber.error(err)
    }

    this.unsubscribe();
  }

  unsubscribe() {
    this.isUnsubscribed = true;
  }
}

class Observable {

  constructor(setup) {
    this.setup = setup;
  }

  subscribe(subscriber) {
    const sub = new Subscriber(subscriber);
    this.setup(sub);
    return {
      unsubscribe() {
        sub.unsubscribe()
      }
    }
  }
}


module.exports = Observable;
