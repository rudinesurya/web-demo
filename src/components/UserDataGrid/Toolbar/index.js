import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { CSVLink } from 'react-csv';

const Toolbar = ({
  data,
  onSearchCategoryChange,
  onSearchTermChange,
  searchTerm
}) => {
  return (
    <Menu>
      <Menu.Item>
        <SearchBar
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          onSearchCategoryChange={onSearchCategoryChange}
        />
      </Menu.Item>

      <Menu.Item position='right'>
        <Icon name='download' />
        <CSVLink data={data} filename={'users.csv'}>
          Export to CSV
        </CSVLink>
      </Menu.Item>
    </Menu>
  );
};

Toolbar.propTypes = {
  data: PropTypes.array,
  onSearchTermChange: PropTypes.func,
  onSearchCategoryChange: PropTypes.func,
  searchTerm: PropTypes.string
};

export default Toolbar;
