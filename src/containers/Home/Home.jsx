import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Button, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchDummyApi, increment } from '../../actions/dummyActions';
import Landing from './components/Landing.jsx';
import Work from './components/Work.jsx';

@connect(store => ({
  counter: store.dummy.dummyVar,
  response: store.dummy.response,
}))
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.props.dispatch(increment(1));
  }
  render() {
    return (
      <div className="home">
        <Landing />
        <Work />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  counter: PropTypes.number,
  response: PropTypes.string,
};

Home.defaultProps = {
  dispatch: () => console.log('ERROR'),
  counter: -1,
  response: '',
};
