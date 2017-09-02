import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Train = ({ crop }) => {
  return (
    <div className="train">
      <Card>
        <Card.Content>
          <Card.Header>
            WHAT IS MY PURPOSE ?
          </Card.Header>
          <Card.Meta>
            <span>
              We got pretty data and so what? Time to MAKE SOME SENSE with all off this : train an neural network based AI that will be able to tell you wether or not an appartment is a good plan or not.
            </span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

Train.propTypes = {
  crop: PropTypes.array,
};

Train.defaultProps = {
  crop: [],
};

export default Train;
