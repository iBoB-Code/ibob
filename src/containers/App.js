/*
  Base.js

  The "root" component that persists throughout the app,
  contains client router logic
*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Favicon from 'react-favicon';

import BaseRoutes from '../routing/BaseRoutes.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // good for debugging - avoid excessive rendering
    this.renderCount = 0;
  }

  render() {
    this.renderCount++;
    console.log('RENDERS:', this.renderCount);
    // --> /src/routing/BaseRoutes.js
    return (
      <div className="app">
        <Favicon url="../../../assets/img/logo2.ico" />
        <BaseRoutes location={this.props.location} />
      </div>
    );
  }
}

export default withRouter(connect()(App));
