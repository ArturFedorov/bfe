import { Component} from '../component/Component.js';

const IMAGE_WIDTH = 320;

export class Carousel extends Component {
  constructor(root, { images = [] }) {
    super(root, { className: 'carousel', listeners: ['click'] });
    this.images = images;
    this.activeIndex = 0;
    this.onClick = this.onClick.bind(this);
  }

  toHtml() {
    return `
      <div class="carousel__window">
        <div class="carousel__images">
            ${this.createImageElements(this.images)}
        </div>
        <div class="carousel__controls">
            <div class="carousel__control"
               data-control="left"
               role="button">
               ←
           </div>
            <div class="carousel__control"
                 data-control="right"
                 role="button">
                 →
            </div>
          </div>
      </div>
    `.trim();
  }


  createImageElements(images) {
    return images.map((img, index) => {
      return `<div class="carousel__image-wrapper">
                 <img class="carousel__image"
                      data-index="${index}"
                      src="${img}"
                      alt="carousel image" />
             </div>`
    }).join('').trim();
  }

  onClick(ev) {
    const control = ev.target.dataset.control;
    if(!control) return;

    switch (control) {
      case 'left':
        if(this.activeIndex === 0) return;
        else this.activeIndex--;
        break;
      case 'right':
        if(this.activeIndex === this.images.length - 1) return;
        this.activeIndex++;
        break;
    }

    const list = this.el.querySelector('.carousel__images');
    list.style.transform = `translate(${IMAGE_WIDTH * -this.activeIndex}px, 0)`;
  }
}

const root = document.getElementById('app');
const images = Array(5)
  .fill(['https://picsum.photos/320/240?random='])
  .map((src,i) => src + i);

const component = new Carousel(root, { images });
component.render();

