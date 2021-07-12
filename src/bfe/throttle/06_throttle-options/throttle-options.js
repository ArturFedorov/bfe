export function throttle(func, wait,  options = { leading: true, trailing: false }) {
  let timer = null;
  let stashed = null;

  const startThrottle = () => {
    timer = setTimeout(check, wait);
  }

  const check = () => {
    timer = null;
    if(stashed) {
      func.apply(stashed[0], stashed[1]);
      stashed = null;
      startThrottle();
    }
  }

  return function (...args) {
    if(timer !== null) {
      if(options.trailing) {
        stashed = [this, args];
      }

      return;
    }

    if(options.leading) {
      func.apply(this, args);
      startThrottle();

      return;
    }

    if(options.trailing) {
      stashed = [this, args];
      startThrottle();
    }
  }
}
