import React from 'react';
import { Image, Button, Header, Popup } from 'semantic-ui-react';
import me from '../../../assets/img/ID.jpg';

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

const Landing = () => (
  <div className="landing">
    <div className="overlay" />
    <div className="container">
      <div className="subContainer">
        <div className="backContainer">
          <Image shape="circular" src={me} />
        </div>
        <div className="frontContainer">
          <div className="coverImg">
            <div className="imgOverlay">
              <div className="buttonContainer">
                <Button inverted color="grey">My experience</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header as="h1" textAlign="center">{'Hi, I\'m Dylan. I\'m a Data-Scientist'}</Header>
      <div className="social">
        <Popup
          trigger={<Button circular color="linkedin" icon="linkedin" onClick={(event) => { event.preventDefault(); window.open('https://www.linkedin.com/in/dylanheirstraeten'); }} />}
          position="bottom center"
          hoverable
        >
          <span>Visit my Linkedin</span>
        </Popup>
        <Popup
          trigger={<Button circular color="black" icon="github" onClick={(event) => { event.preventDefault(); window.open('https://github.com/iBoB-Code'); }} />}
          position="bottom center"
          hoverable
        >
          <span>Explore my Github</span>
        </Popup>
        <Popup
          trigger={<Button circular color="red" icon="like" onClick={(event) => { event.preventDefault(); window.open('https://cremedelacreme.io'); }} />}
          position="bottom center"
          hoverable
        >
          <span>Need my services? Cremedelacreme.io</span>
        </Popup>
        <Popup
          trigger={<Button circular color="twitter" icon="twitter" onClick={(event) => { event.preventDefault(); window.open('https://twitter.com/heirst_d'); }} />}
          position="bottom center"
          hoverable
        >
          <span>Follow me on Twitter</span>
        </Popup>
        <Popup
          trigger={<Button circular color="youtube" icon="youtube" onClick={(event) => { event.preventDefault(); window.open('https://www.youtube.com/channel/UCDwN2FuZgKcCLo1O8ONGTaQ'); }} />}
          position="bottom center"
          hoverable
        >
          <span>Take a look at my Youtube channel</span>
        </Popup>
      </div>
      <div className="scroller">
        <div className="scroll-container" role="presentation" onClick={e => scrollTo(document.getElementById('work'), e)}>
          <div className="arrows">
            <span />
            <span />
            <span />
          </div>
          <h5>DEMONSTRATION</h5>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
