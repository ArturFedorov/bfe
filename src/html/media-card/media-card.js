import { Component } from '../component/Component.js';

export class MediaCard extends Component {
  constructor(root, { image, author, title, content }) {
    super(root, {className: 'media-card', listeners: [] });
    this.image = image;
    this.author = author;
    this.title = title;
    this.content = content;
  }

  toHtml() {
    return `
      <div
      class="media-card__image"
      style="background-image: url(${this.image})">
      </div>
       <div class="media-card__author">
          <p>${this.author}</p>
      </div>
      <article class="media-card__article">
          <h3 class="media-card__title">${this.title}</h3>
           ${this.content}
      </article>
    `.trim();
  }
}

const root = document.getElementById('app');
const component = new MediaCard(root, {
  image: "https://avatars0.githubusercontent.com/u/14332713?s=460&u=7a7b055e76332c2ab5dbb28ca5e364fd463c5142&v=4",
  title: "You're not prepared!",
  author: `Art, ${new Date().toISOString()}`,
  content: `
     <p>
        Practice makes perfect. Motivation is not an answer. Discipline is the key
     </p>
    `
});

component.render();
