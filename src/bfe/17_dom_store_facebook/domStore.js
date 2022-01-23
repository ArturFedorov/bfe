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


class NodeStore {
  constructor () {
    this.state = [];
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node.__storageId__ = this.state.length;
    this.state[node.__storageId__] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.state[node.__storageId__];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return '__storageId__' in node;
  }
}
