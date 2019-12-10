import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

const DataGrid = ({ data, selectedColumn, setSelectedColumn, direction }) => {
  return (
    <div>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={selectedColumn === 'id' ? direction : null}
              onClick={() => setSelectedColumn('id')}
            >
              ID
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={selectedColumn === 'name' ? direction : null}
              onClick={() => setSelectedColumn('name')}
            >
              Name
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={selectedColumn === 'jobDescription' ? direction : null}
              onClick={() => setSelectedColumn('jobDescription')}
            >
              Job
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={selectedColumn === 'userEmail' ? direction : null}
              onClick={() => setSelectedColumn('userEmail')}
            >
              Email
            </Table.HeaderCell>
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
};

DataGrid.propTypes = {
  data: PropTypes.array,
  selectedColumn: PropTypes.string,
  setSelectedColumn: PropTypes.func,
  direction: PropTypes.string
};

export default DataGrid;
