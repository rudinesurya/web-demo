import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const Toolbar = ({
  onSearchCategoryChange,
  onSearchTermChange,
  searchTerm
}) => {
  return (
    <SearchBar
      searchTerm={searchTerm}
      onSearchTermChange={onSearchTermChange}
      onSearchCategoryChange={onSearchCategoryChange}
    />
  );
};

Toolbar.propTypes = {
  onSearchTermChange: PropTypes.func,
  onSearchCategoryChange: PropTypes.func,
  searchTerm: PropTypes.string
};

export default Toolbar;
