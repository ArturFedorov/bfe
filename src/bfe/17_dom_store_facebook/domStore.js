class NodeStore {
  /**
   * @param {Node} node
   * @param {any} value
   */
  constructor() {
    this.cashe = {};
  }

  set(node, value) {
    this.cashe[node.toString()] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.cashe[node.toString()]
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return node.toString() in this.cashe;
  }
}
