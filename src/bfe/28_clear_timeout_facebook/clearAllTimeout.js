/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  const newTimeout = setTimeout(() => {}, 1);

  for(let i = 0; i<= newTimeout; i++) {
    clearTimeout(i);
  }
}
