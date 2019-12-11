import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';

const DataGrid = ({ data, rowsCount }) => {
  const [prevColumn, setPrevColumn] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState('id');
  const [direction, setDirection] = useState('ascending');
  const [sortedData, setSortedData] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handleSelectColumn = useCallback(selectedColumn => {
    setSelectedColumn(selectedColumn);
    if (prevColumn !== selectedColumn) {
      setPrevColumn(selectedColumn);
      setDirection('ascending');
    } else {
      setDirection(direction === 'ascending' ? 'descending' : 'ascending');
    }
  });

  // Triggered when the data changes. Set current page back to 1
  useEffect(() => {
    setActivePage(1);
  }, [data]);

  // Triggered when either the data changes or user clicks on column headers to sort
  useEffect(() => {
    const temp = [...data].sort((a, b) => {
      const x = a[selectedColumn];
      const y = b[selectedColumn];

      // Special case to handle numeric comparison
      if (selectedColumn === 'id') {
        return x - y;
      }

      if (x === y) {
        return 0;
      }
      return x > y ? 1 : -1;
    });

    setSortedData(direction === 'ascending' ? temp : temp.reverse());
  }, [selectedColumn, direction, data]);

  const totalPages = sortedData.length / rowsCount;
  const indexOfLast = activePage * rowsCount;
  const indexOfFirst = indexOfLast - rowsCount;
  const activePageData = sortedData.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <Table sortable celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={selectedColumn === 'id' ? direction : null}
              onClick={() => handleSelectColumn('id')}
            >
              ID
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={selectedColumn === 'name' ? direction : null}
              onClick={() => handleSelectColumn('name')}
            >
              Name
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={selectedColumn === 'jobDescription' ? direction : null}
              onClick={() => handleSelectColumn('jobDescription')}
            >
              Job
            </Table.HeaderCell>

            <Table.HeaderCell
              sorted={selectedColumn === 'userEmail' ? direction : null}
              onClick={() => handleSelectColumn('userEmail')}
            >
              Email
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {activePageData.map(({ id, name, jobDescription, userEmail }) => {
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
        onPageChange={(event, data) => setActivePage(data.activePage)}
      />
    </div>
  );
};

DataGrid.propTypes = {
  data: PropTypes.array,
  rowsCount: PropTypes.number
};

export default DataGrid;
