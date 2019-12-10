import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown, Pagination } from 'semantic-ui-react';
import DataGrid from './DataGrid';

const UserDataGrid = ({ data, rowsCount }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCatagory] = useState('name');
  const [searchResults, setSearchResults] = useState([]);
  const [prevColumn, setPrevColumn] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState('id');
  const [direction, setDirection] = useState(null);
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

  // Triggered when either the data changes or user clicks on column headers to sort
  useEffect(() => {
    const temp = [...searchResults].sort((a, b) => {
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
  }, [selectedColumn, direction, searchResults]);

  // Triggered when user enters a new search term
  useEffect(() => {
    const results = data.filter(item =>
      item[searchCategory].toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setActivePage(1);
  }, [data, searchTerm, searchCategory]);

  // Triggered when user change the search category
  useEffect(() => {
    setSearchTerm('');
  }, [searchCategory]);

  const totalPages = sortedData.length / rowsCount;
  const indexOfLast = activePage * rowsCount;
  const indexOfFirst = indexOfLast - rowsCount;
  const activePageData = sortedData.slice(indexOfFirst, indexOfLast);

  const options = [
    { key: 'name', text: 'Name', value: 'name' },
    { key: 'jobDescription', text: 'Job', value: 'jobDescription' },
    { key: 'userEmail', text: 'Email', value: 'userEmail' }
  ];

  return (
    <div>
      <Input
        icon='users'
        iconPosition='left'
        type='text'
        placeholder='Search...'
        action={
          <Dropdown
            button
            basic
            floating
            options={options}
            defaultValue='name'
            onChange={(event, data) => setSearchCatagory(data.value)}
          />
        }
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <DataGrid
        data={activePageData}
        selectedColumn={selectedColumn}
        setSelectedColumn={handleSelectColumn}
        direction={direction}
      />
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

UserDataGrid.propTypes = {
  data: PropTypes.array,
  rowsCount: PropTypes.number
};

export default UserDataGrid;