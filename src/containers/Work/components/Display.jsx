import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.jsx';

const Display = ({ crop }) => {
  const dataArray = crop.reverse().map((wheat, index) => {
    if (wheat.blurInfo.position.lat && wheat.blurInfo.position.lon) {
      return (
        <Marker
          key={`marker-${index}`}
          lat={wheat.blurInfo.position.lat}
          lng={wheat.blurInfo.position.lon}
        />
      );
    }
    return '';
  });
  return (
    <div className="display">
      <Card>
        <Card.Content>
          <Card.Header>
            SHOW ME WHAT YOU GOT
          </Card.Header>
          <Card.Meta>
            <span>
              Just show our data in a simple array is an ugly way to visualize it you don't think? So let's use the GPS coordinate we also get within the meta-data for each flat.
            </span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <GoogleMapReact
        defaultCenter={{ lat: 43.602698, lng: 1.443169 }}
        defaultZoom={12}
      >
        {dataArray}
      </GoogleMapReact>
    </div>
  );
};

Display.propTypes = {
  crop: PropTypes.array,
};

Display.defaultProps = {
  crop: [],
};

export default Display;
