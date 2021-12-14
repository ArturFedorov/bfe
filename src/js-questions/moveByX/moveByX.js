const moveByX = (element, distance, time) => {
  let timer = performance.now();
  let finish = timer + time;

  function frame(current) {
    const elapsed = finish - current;
    const progress = elapsed / finish;
    const amount = progress * distance;
    element.style.transform = `translateX(${amount}px)`;
    if(progress < 100) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

export default moveByX;
