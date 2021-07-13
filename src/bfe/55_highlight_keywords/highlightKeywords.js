/**
 * @param {string} html
 * @param {string[]} keywords
 */
class TrieNode {
  constructor() {
    this.children = new Map();
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children.get(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    }
    node.end = true;
  }

  highlightWords(s) {
    let res = '';
    let temp = '';
    let node = this.root;
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (node.children.get(char)) {
        temp += char;
        node = node.children.get(char);
      } else if (this.root.children.get(char)) {
        temp += char;
        node = this.root.children.get(char);
      } else {
        if (temp) {
          res += `<em>${temp}</em>` + char;
          temp = '';
        } else {
          res += char;
        }
        node = this.root;
      }
    }
    if (temp) {
      res += `<em>${temp}</em>`;
    };
    return res;
  }
}

function highlightKeywords(html, keywords) {
  const trie = new Trie();
  keywords.forEach(word => trie.addWord(word));
  return trie.highlightWords(html);
};
