function* id() {
  let counter = 0;
  while (true) {
    yield counter++;
  }
}

export class CachedNode {
  constructor(value, node) {
    this.value = value;
    this.node = node;
  }
}

export class DomStore {
  static STORE_KEY_ID = 'storeId';
  nextId = id();
  store = {};

  get(node) {
    const id = this.getId(node);

    return id ? this.store[id].value : null;
  }

  /**
   *
   * @param {HTMLElement} node
   * @param value
   */
  set(node, value) {
    const id = this.getId(node) || this.nextId.next();
    console.log(id);
    if(this.has(node)) {
      this.store[id].value = value;
    } else {
      this.store[id] = new CachedNode(value, node);
    }
    console.log(this.store[id]);
    this.store[id].node.node.dataset[DomStore.STORE_KEY_ID] = id;
  }

  has(node) {
    const id = this.getId(node);
    return !!this.store[id];
  }

  /**
   *
   * @param {HTMLElement} node
   * @return {null|*}
   */
  getId(node) {
    if(!node) return null;
    return node.dataset?.[DomStore.STORE_KEY_ID];
  }
}
