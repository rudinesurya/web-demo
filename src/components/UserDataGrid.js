import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Pagination } from 'semantic-ui-react';
import DataGrid from './DataGrid';

const UserDataGrid = ({ data, rowsCount }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const results = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    setActivePage(1);
  }, [data, searchTerm]);

  const totalPages = searchResults.length / rowsCount;
  const indexOfLast = activePage * rowsCount;
  const indexOfFirst = indexOfLast - rowsCount;
  const activePageData = searchResults.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <Input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <DataGrid data={activePageData} />
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
