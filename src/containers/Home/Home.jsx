import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Landing from './components/Landing.jsx';
import Work from '../Work/Work.jsx';

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
        />
        <Work />
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
