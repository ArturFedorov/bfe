import { Component } from '../component/Component.js';

class StarRating extends Component {
  constructor(root, { starSize = 5 }) {
    super(root, { className: 'star-rating', listeners: ['click', 'mouseover', 'mouseleave'] });
    this.root = root;
    this.starSize = starSize;
    this.rating = 0;
    this.onClick = this.onClick.bind(this);
    this.onMouseleave = this.onMouseleave.bind(this);
    this.onMouseover = this.onMouseover.bind(this);
  };

  afterRender() {
    this.stars = this.el.querySelectorAll('.star');
  }

  toHtml() {
    return this.generateStar();
  }

  generateStar() {
    return Array(this.starSize).fill(null).map((_, index) => {
      const val = index + 1;
      const active = val <= this.rating ? 'star--active' : '';
      return `
        <div
            class="star ${active}"
            aria-label="Set rating to ${val}"
            title="Set rating to ${val}"
            aria-selected="${this.rating === val}"
            data-value="${val}">
        </div>
      `;
    }).join('').trim();
  }

  selectStars(value) {
    for(const star of this.stars) {
      const current = +star.dataset.value;
      if(current <= value) {
        star.classList.add('star--active');
      } else {
        star.classList.remove('star--active');
      }
    }
  }

  onClick(ev) {
    const value = +ev.target.dataset.value;
    if(value) {
      this.rating = value;
      this.render();
    }
  }

  onMouseover(ev) {
    const hovered = +ev.target.dataset.value;
    if(hovered) {
      this.selectStars(hovered);
    }
  }

  onMouseleave(ev) {
    this.selectStars(this.rating);
  }
}

const root = document.getElementById('app');
const component = new StarRating(root, { starSize: 6 });
component.render();
