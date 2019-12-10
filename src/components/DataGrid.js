import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';

const DataGrid = ({
  data,
  selectedColumn,
  setSelectedColumn,
  direction,
  totalPages,
  onPageChange
}) => {
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

      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={totalPages}
        onPageChange={(event, data) => onPageChange(data.activePage)}
      />
    </div>
  );
};

DataGrid.propTypes = {
  data: PropTypes.array,
  selectedColumn: PropTypes.string,
  setSelectedColumn: PropTypes.func,
  direction: PropTypes.string,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func
};

export default DataGrid;
