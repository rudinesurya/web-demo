import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

const DataGrid = ({ data }) => (
  <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Job</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map(({ id, name, jobDescription, userEmail }) => {
          return (
            <Table.Row key={id}>
              <Table.Cell>{id}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{jobDescription}</Table.Cell>
              <Table.Cell>{userEmail}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </div>
);

DataGrid.propTypes = {
  data: PropTypes.array
};

export default DataGrid;
