import React from 'react';
import PropTypes from 'prop-types';
import { Image, Button, Header } from 'semantic-ui-react';
import me from '../../../assets/img/ID.jpg';
import scrollTo from '../../../scripts/homemadeScroller';
import { changeSocialDesc } from '../../../actions/homeActions';

const Landing = ({ dispatch, socialDesc = '' }) => (
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
      <span>{socialDesc}</span>
      <div className="social">
        <Button circular color="linkedin" icon="linkedin" onClick={(event) => { event.preventDefault(); window.open('https://www.linkedin.com/in/dylanheirstraeten'); }} onMouseOver={() => dispatch(changeSocialDesc('Visit my Linkedin'))} onMouseOut={() => dispatch(changeSocialDesc(''))} />
        <Button circular color="black" icon="github" onClick={(event) => { event.preventDefault(); window.open('https://github.com/iBoB-Code'); }} onMouseOver={() => dispatch(changeSocialDesc('Explore my Github'))} onMouseOut={() => dispatch(changeSocialDesc(''))} />
        <Button circular color="red" icon="like" onClick={(event) => { event.preventDefault(); window.open('https://cremedelacreme.io/'); }} onMouseOver={() => dispatch(changeSocialDesc('Need my Services?'))} onMouseOut={() => dispatch(changeSocialDesc(''))} />
        <Button circular color="twitter" icon="twitter" onClick={(event) => { event.preventDefault(); window.open('https://twitter.com/heirst_d'); }} onMouseOver={() => dispatch(changeSocialDesc('Follow me on Twitter'))} onMouseOut={() => dispatch(changeSocialDesc(''))} />
        <Button circular color="youtube" icon="youtube" onClick={(event) => { event.preventDefault(); window.open('https://www.youtube.com/channel/UCDwN2FuZgKcCLo1O8ONGTaQ'); }} onMouseOver={() => dispatch(changeSocialDesc('Take a look at my Youtube channel'))} onMouseOut={() => dispatch(changeSocialDesc(''))} />
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

Landing.propTypes = {
  dispatch: PropTypes.func,
  socialDesc: PropTypes.string,
};

Landing.defaultProps = {
  dispatch: () => console.log('ERROR'),
  socialDesc: '',
};

export default Landing;
