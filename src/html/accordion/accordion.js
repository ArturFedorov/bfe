import { Component } from '../component/Component.js';

export class Accordion extends Component {
  constructor(root, { header, content }) {
    super(root, { className: 'accordion', listeners: ['click'] });
    this.root = root;
    this.header = header;
    this.content = content;
    this.isOpen = true;
    this.el = null;
    this.onClick = this.onClick.bind(this);
  }

  afterRender() {
    const accordionMod = this.isOpen ? 'accordion-open' : 'accordion-closed';
    this.el.classList.add(accordionMod);
  }

  onClick(ev) {
    console.log(ev.target.dataset.part);
    if(ev.target.dataset.part === 'accordion-header') {
      this.isOpen = !this.isOpen;
      this.render();
    }
  }

  toHtml() {
    return `
      <div data-part="accordion-header" class="accordion-header">
        ${this.header}
      </div>
      <div class="accordion-content">${this.content}</div>
    `.trim();
  }
}


const root = document.getElementById('app');
const accordion = new Accordion(root, {
  header: 'Show and Hide content',
  content: `
            <h3>Intro section</h3>
            <p>
                This is a vanilla accordion. Test it out. I hope we won't have any advanced component styling on the interview
            </p>
            `.trim()
});

accordion.render();
