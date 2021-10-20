
function html(strings, ...values) {
  let segments = [];

  let i = 0;
  for(; i < values.length; i++) {
    segments.push(strings[i]);
    segments.push(values[i]);
  }
  segments.push(strings[i]);

  return segments.join('');
}


// render the result from html() into the container
function render(result, container) {
  container.innerHTML = result;
}
