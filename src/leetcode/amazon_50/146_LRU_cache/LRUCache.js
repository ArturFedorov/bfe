class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if(this.map.has(key)) {
      const value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if(this.get(key) === -1) {
      if(this.capacity === this.map.size) {
        for(let [key, _] of this.map) {
          this.map.delete(key);
          break;
        }
      }
    }

    this.map.set(key, value);
  }
}
