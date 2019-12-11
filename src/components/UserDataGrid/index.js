import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DataGrid from './Datagrid';
import Toolbar from './Toolbar';

const UserDataGrid = ({ data, rowsCount }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCatagory] = useState('name');
  const [searchResults, setSearchResults] = useState([]);

  // Triggered when user enters a new search term
  useEffect(() => {
    const results = data.filter(item =>
      item[searchCategory].toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [data, searchTerm, searchCategory]);

  // Triggered when user change the search category
  useEffect(() => {
    setSearchTerm('');
  }, [searchCategory]);

  return (
    <div>
      <Toolbar
        searchTerm={searchTerm}
        searchCategory={searchCategory}
        onSearchTermChange={setSearchTerm}
        onSearchCategoryChange={setSearchCatagory}
      />
      <DataGrid data={searchResults} rowsCount={rowsCount} />
    </div>
  );
};

UserDataGrid.propTypes = {
  data: PropTypes.array,
  rowsCount: PropTypes.number
};

export default UserDataGrid;
