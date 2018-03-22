import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Landing from './components/Landing';
import './styles/Home.css';

@connect(store => ({
  socialDesc: store.home.socialDesc,
}))
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Landing
          dispatch={this.props.dispatch}
          socialDesc={this.props.socialDesc}
          history={this.props.history}
        />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  socialDesc: PropTypes.string,
};

Home.defaultProps = {
  dispatch: () => console.log('ERROR'),
  socialDesc: '',
  steps: {},
};
