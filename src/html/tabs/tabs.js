import { Component } from '../component/Component.js';

export class Tabs extends Component {
  constructor(root, { tabs = []}) {
    super(root, { className: 'tabs', listeners: ['click']});
    this.tabs = tabs;
    this.activeIndex = 0;
    this.onClick = this.onClick.bind(this);
  }

  onClick(ev) {
    const index = +ev.target.dataset.tab;
    if(ev.target.dataset.tab) {
      this.activeIndex = index;
      this.render();
    }
  }

  toHtml() {
    const activeTab = this.tabs[this.activeIndex];
    return `
      <div class="tabs-list">
        ${this.createTabElements(this.tabs)}
      </div>
      <div class="tabs-content">
        ${activeTab.content}
      </div>
    `
  }

  createTabElements(tabs) {
    return tabs.map(({ name }, index) => {
      const active = this.activeIndex === index ? 'tabs-list-element-active' : '';
      return `<div
                data-tab="${index}"
                class="tabs-list-element ${active}"
                aria-selected="${!!active}"
                role="tab">
                    ${name}
                </div>`.trim();
    }).join('').trim();
  }
}


const root = document.getElementById('app');
const content = (i) => `
<section>
    <h1>Hello from content ${i}</h1>
    <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
</section>
`;

const tabs = [1, 2, 3, 4].map((num) => ({
  name: `Tab ${num}`, content: content(num)
}));


const component = new Tabs(root, {tabs});
component.render();
