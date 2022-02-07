/**
 * @typedef {object} OriginData
 * @property {string} origin
 * @property {number} lastUsed
 * @property {number} size
 * @property {boolean} persistent
 */

class MyLRUStorage  {
  /**
   * @param {number} capacity
   * @param {() => number} getTimestamp
   */
  constructor(capacity, getTimestamp) {
    this.capacity = capacity;
    this.currentCapacity = this.capacity;
    this.getTimestamp = getTimestamp;
    this.cache = new Map();
  }

  /**
   * @param {string} origin
   * @returns {OriginData | undefined}
   */
  getData(origin) {
    if(this.cache.has(origin)) {
      this.cache.get(origin).lastUsed = this.getTimestamp();
      return this.cache.get(origin);
    } else {
      return undefined;
    }
  }

  /**
   * @param {string} origin
   * @param {number} size
   * @returns {boolean}
   */
  setData(origin, size) {
    if(size > this.capacity) return false;
    if(this.cache.has(origin) && size <= this.cache.get(origin).size) {
      this.currentCapacity = this.currentCapacity - this.cache.get(origin).size + size;
      this.cache.set(origin, {
        lastUsed: this.getTimestamp(),
        size,
        persistent: false
      });
    } else {
      while(this.currentCapacity < size) {
        const didEvict = this.evictData();
        if(!didEvict) return false;
      }

      this.cache.set(origin, {
        lastUsed: this.getTimestamp(),
        size,
        persistent: false
      });
      this.currentCapacity -= size;
    }

    return true;
  }

  evictData() {
    const cacheKeys = Array.from(this.cache.keys()).filter(item => {
      return !this.cache.get(item).persistent
    });

    const keyToRemove = cacheKeys.sort((x, y) => this.cache.get(x).lastUsed - this.cache.get(y).lastUsed)[0];
    if(!keyToRemove) return false;
    this.currentCapacity += this.cache.get(keyToRemove).size;
    this.cache.delete(keyToRemove);

    return true;
  }

  /**
   * @param {string} origin
   * @returns {void}
   */
  clearData(origin) {
    const spaceToRelease = this.cache.get(origin).size;
    this.cache.delete(origin);
    this.currentCapacity += spaceToRelease;
  }

  /**
   * @param {string} origin
   * @returns {void}
   */
  makePersistent(origin) {
    this.cache.get(origin).persistent = true;
  }
}
