import { TrieNode } from './TrieNode.js';

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for(let i = 0; i < word.length; i++) {
      const char = word[i];

      if(!node.children.has(char)) {
        const newNode = new TrieNode(char);
        newNode.parent = node;
        node.children.set(char, newNode);
      }

      node = node.children.get(char);

      if(i === word.length) {
        node.end = true;
      }
    }
  }

  contains(word) {
    let node = this.root;

    for(let i = 0; i < word.length; i++) {
      const char = word[i];
      if(node.children.has(char)) {
        node = node.children.get(char);
      } else {
        return false;
      }
    }

    return  node.end;
  }

  find(prefix) {
    let node = this.root;
    const output = [];

    for(let i = 0; i < prefix.length; i++) {
      const char = prefix[i];

      if(node.children.has(char)) {
        node = node.children.get(char);
      } else {
        return output;
      }
    }

    findAllWords(node, output);

    return output;
  }

  getAllWords() {
    const words = [];
    let search = function (node = this.root, str) {
      if(node.children.size !== 0) {
        for(let letter of node.children.keys()) {
          search(node.children.get(letter), str.concat(letter));
        }
        if(node.end) {
          words.push(str);
        }
      } else {
        str.length > 0 ? words.push(str) : undefined;
        return;
      }
    }

    search(this.root, new String());
    return words.length > 0 ? words : null;
  }
}

function findAllWords(node, arr) {
  if(node.end) {
    arr.unshift(node.getWord());
  }

  const childrenKeys = Array.from(node.children.keys());

  childrenKeys.forEach((child) => {
    findAllWords(node.children.get(child), arr);
  })
}
