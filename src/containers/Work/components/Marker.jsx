import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ color }) => (
  <div
    className="marker"
    style={{ backgroundColor: color }}
  />
);

Marker.propTypes = {
  color: PropTypes.string,
};

Marker.defaultProps = {
  color: '',
};

export default Marker;
