import { Component } from '../component/Component.js';
import { Trie } from '../trie/Trie.js';

export class AutoComplete extends Component {
  constructor(root, { data, label, placeholder }) {
    super(root, { className: 'auto-complete', tag: 'div', listeners: ['focusin', 'input', 'focusout'] });
    this.data = [...data];
    this.label = label;
    this.placeholder = placeholder;
    this.onInput = this.onInput.bind(this);
    this.onFocusout = this.onFocusout.bind(this);
    this.onFocusin = this.onFocusin.bind(this);
    this.fillDictionary();
    this.searchValue = '';
  }

  fillDictionary() {
    const trie = new Trie();
    this.data.forEach((word) => trie.insert(word));
    this.dictionary = trie;
  }

  toHtml() {
    return `
      <label>${this.label}</label>
      <input class="auto-complete-input" placeholder="${this.placeholder}" />
      <ul id="list" class="auto-complete-list">
        ${this.buildDropDownList()}
      </ul>
    `
  }

  buildDropDownList() {
    console.log(this.dictionary.getAllWords())
    return this.dictionary.getAllWords()
      .sort()
      .filter(() => this.dictionary.find(this.searchValue))
      .map((word) => `<li class="auto-complete-item">${word}</li>`)
      .join('')
      .trim();
  }

  onFocusout(event) {
    const list = document.getElementById('list');
    list.classList.remove('is-visible');
  }

  onInput(event) {
    console.log(event.target.value);
  }

  onFocusin(event) {
    const list = document.getElementById('list');
    list.classList.add('is-visible');
  }
}
