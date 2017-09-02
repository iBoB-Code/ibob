function scrollTo(to, callback, duration = 800) {
  function move(amount) {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  }

  function position() {
    return window.scrollY;
  }

  const start = position();
  const change = to.offsetTop - start;
  let currentTime = 0;
  const increment = 20;
  const animateScroll = () => {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    move(val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else if (callback && typeof (callback) === 'function') {
      callback();
    }
  };

  animateScroll();
}

Math.easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = (t, b, c, d) => {
  const tc = (t /= d) * t * t;
  return b + c * (tc);
};

Math.inOutQuintic = (t, b, c, d) => {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

export default scrollTo;
