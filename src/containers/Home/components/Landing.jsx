import React from 'react';
import { Image, Button, Header, Popup } from 'semantic-ui-react';
import me from '../../../assets/img/ID.jpg';

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
          trigger={<Button circular color="linkedin" icon="linkedin" onClick={(event) => { event.preventDefault(); window.open(this.makeHref('https://www.linkedin.com/in/dylanheirstraeten')); }} />}
          position="bottom center"
          hoverable
        >
          <span>Visit my Linkedin</span>
        </Popup>
        <Popup
          trigger={<Button circular color="black" icon="github" onClick={(event) => { event.preventDefault(); window.open(this.makeHref('https://github.com/iBoB-Code')); }} />}
          position="bottom center"
          hoverable
        >
          <span>Explore my Github</span>
        </Popup>
        <Popup
          trigger={<Button circular color="red" icon="like" onClick={(event) => { event.preventDefault(); window.open(this.makeHref('https://cremedelacreme.io')); }} />}
          position="bottom center"
          hoverable
        >
          <span>Need my services? Cremedelacreme.io</span>
        </Popup>
        <Popup
          trigger={<Button circular color="twitter" icon="twitter" onClick={(event) => { event.preventDefault(); window.open(this.makeHref('https://twitter.com/heirst_d')); }} />}
          position="bottom center"
          hoverable
        >
          <span>Follow me on Twitter</span>
        </Popup>
        <Popup
          trigger={<Button circular color="youtube" icon="youtube" onClick={(event) => { event.preventDefault(); window.open(this.makeHref('https://www.youtube.com/channel/UCDwN2FuZgKcCLo1O8ONGTaQ')); }} />}
          position="bottom center"
          hoverable
        >
          <span>Take a look at my Youtube channel</span>
        </Popup>
      </div>
    </div>
  </div>
);

export default Landing;
