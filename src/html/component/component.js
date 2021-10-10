/**
 * @param type
 * @return {string}
 */
const toEventName = (type) => {
  if(!type) return '';
  else return `on${type[0].toUpperCase()}${type.slice(1)}`;
}

export class Component {
  /**
   *
   * @param root
   * @param listeners
   * @param className
   * @param tag
   */
  constructor(root, { listeners, className, tag = 'div'}) {
    this.root = root;
    this.el = null;
    this.listeners = listeners || [];
    this.events = [];
    this.className = className;
    this.tag = tag;
  }

  /**
   * Init DOM elements and all listeners
   */
  init() {
    this.el = document.createElement(this.tag);
    this.el.classList.add(this.className);
    this.events = this.listeners.map(type => {
      const event = toEventName(type);
      const handler = this[event];

      if(!handler) {
        throw new Error(`handler ${type} is not implemented`);
      }
      this.el.addEventListener(type, handler);
      return { type, handler };
    });
  }

  afterRender() {}

  render() {
    if(this.el) this.destroy();
    this.init();
    this.el.innerHTML = this.toHtml();
    this.root.appendChild(this.el);
    this.afterRender();
  }

  /**
   * Returns component template
   * @return {string}
   */
  toHtml() {
    return '';
  }

  destroy() {
    this.events.forEach(({ type, handler }) => {
      this.el.removeEventListener(type, handler);
    });

    this.events = [];
    this.el.remove();
  }
}
