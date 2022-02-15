
let TimeMap = function() {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
  if(!this.map.has(key)) {
    this.map.set(key, []);
  }

  this.map.get(key).push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
  if(!this.map.has(key)) return "";

  const pairs = this.map.get(key);
  const n = pairs.length;

  let left = 0;
  let right = n;

  while(left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const [value, prevTimestamp] = pairs[mid];

    if(prevTimestamp <= timestamp) {
      left = mid + 1;
    } else {
      right = mid;
    }

    if(right === 0) return '';
  }

  return pairs[right - 1][0];
};
