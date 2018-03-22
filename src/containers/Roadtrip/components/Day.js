import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Button, Image, Rating } from 'semantic-ui-react';

const extractDay = (a) => {
  if (a + 8 < 31) {
    return (a + 8);
  }
  return (((a + 8) % 32) + 1);
};

const extractMonth = (a) => {
  if (a + 8 < 31) {
    return 'Janvier';
  }
  return 'Février';
};

const head = (num, heart) => {
  return (
    <div className="header">
      {`J${num} - ${extractDay(num)} ${extractMonth(num)} 2018`}
      <Rating style={{ marginLeft: '10px' }} icon="heart" defaultRating={heart} maxRating={5} disabled />
    </div>
  );
};

const Landing = ({ num, text, insta, handleOpen, heart }) => (
  <Card className="day">
    <Card.Content header={head(num, heart)} />
    <Card.Content className="corpse">
      <Image src={insta} size="large" style={{ marginBottom: '10px' }} />
      {
        text.map(t => (
          <p>{t}</p>
        ))
      }
    </Card.Content>
    <Card.Content extra>
      <Icon name="picture" />
      Pour les photos de la journée, cliquez ici
      <Button onClick={() => handleOpen(num)} style={{ marginLeft: '5px' }} icon="camera retro" size="tiny" />
    </Card.Content>
  </Card>
);

Landing.propTypes = {
  handleOpen: PropTypes.func,
  num: PropTypes.number,
  heart: PropTypes.number,
  text: PropTypes.array,
};

Landing.defaultProps = {
  handleOpen: () => console.log('ERROR'),
  num: 0,
  heart: 3,
  text: [],
};

export default Landing;
