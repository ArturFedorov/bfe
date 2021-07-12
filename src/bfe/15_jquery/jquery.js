/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function(property, style) {
      el.style[property] = style;
      return this;
    }
  }
}

const x = $(new HTMLElement())
  .css('color', '#fff')
  .css('backgroundColor', '#000')
  .css('fontWeight', 'bold');

console.log(x);
