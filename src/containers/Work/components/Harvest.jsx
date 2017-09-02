import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'semantic-ui-react';

const Harvest = ({ crop }) => {
  const array = crop.map((wheat, index) => (
    <Table.Row key={`table-element-${index}`}>
      <Table.Cell>{wheat.title}</Table.Cell>
      <Table.Cell>{Math.floor(wheat.surfaceArea)}</Table.Cell>
      <Table.Cell>{Math.floor(wheat.price)}</Table.Cell>
      <Table.Cell>{Math.floor(wheat.pricePerSquareMeter)}</Table.Cell>
      <Table.Cell>{Math.floor(wheat.charges)}</Table.Cell>
    </Table.Row>
  ));
  return (
    <div className="harvest">
      <Card>
        <Card.Content>
          <Card.Header>
            TIME TO FARM
          </Card.Header>
          <Card.Meta>
            <span>
              The first step for a data-scientist is to actually get some data to work with. Here, in our example, we are going to get every informations we can, on all apartments we can find around Toulouse. To do so, we are going to "crawl" a website. It means that we are going to simulate a human being behaviour trying to connect to this distant website, asking for some data, and then save all of this data here, on this page.
            </span>
          </Card.Meta>
        </Card.Content>
      </Card>
      <Table compact className="headTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Surface Area</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Price/square-meter</Table.HeaderCell>
            <Table.HeaderCell>Charges</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
      <div className="tableScroll">
        <Table compact className="bodyTable">
          <Table.Body>
            {array}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

Harvest.propTypes = {
  crop: PropTypes.array,
};

Harvest.defaultProps = {
  crop: [],
};

export default Harvest;
