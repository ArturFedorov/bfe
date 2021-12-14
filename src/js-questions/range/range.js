function* range (from ,to) {
  while (from < to) {
    yield from++;
  }
}

function rangeIterator(from ,to) {
  let counter = from;
  return {
    next: () => {
      if(counter < to) {
        return { value: counter++, done: false };
      } else {
        return { value: counter, done: true };
      }
    },
    [Symbol.iterator]: function () {
      return this;
    }
  }
}
