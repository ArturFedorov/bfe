export class TrieNode {
  constructor(key) {
    this.key = key;
    this.end = false;
    this.children = new Map();
    this.parent = null;
  }

  getWord() {
    const output = [];

    let node = this;
    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }

    return output.join('');
  }
}
