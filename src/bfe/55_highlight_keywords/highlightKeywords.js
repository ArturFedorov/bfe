class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }
}

/**
 * @param {string} html
 * @param {string[]} keywords
 */
function highlightKeywords(html, keywords) {
  const trie = new Trie();
  keywords.forEach((keyword) => {
    trie.insert(keyword);
  });

  let node = trie.root;
  let containedString = '';
  let highlightedString = '';
  for (const char of html) {
    if (!node.children.has(char) && !containedString) {
      highlightedString += char;
      continue;
    }

    if (node.children.has(char)) {
      containedString += char;
      node = node.children.get(char);
      if (node.isEndOfWord && node.children.size === 0) {
        node = trie.root;
      }
      continue;
    }

    highlightedString += `<em>${containedString}</em>${char}`;
    containedString = '';
  }

  if (containedString) {
    highlightedString += `<em>${containedString}</em>`;
  }

  return highlightedString;
};
