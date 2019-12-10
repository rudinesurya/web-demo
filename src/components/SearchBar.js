import React from 'react';
import PropTypes from 'prop-types';
import { Input, Dropdown } from 'semantic-ui-react';

const SearchBar = ({
  onSearchCategoryChange,
  onSearchTermChange,
  searchTerm,
  searchCategory
}) => {
  const options = [
    { key: 'name', text: 'Name', value: 'name' },
    { key: 'jobDescription', text: 'Job', value: 'jobDescription' },
    { key: 'userEmail', text: 'Email', value: 'userEmail' }
  ];

  return (
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
          onChange={(event, data) => onSearchCategoryChange(data.value)}
        />
      }
      value={searchTerm}
      onChange={event => onSearchTermChange(event.target.value)}
    />
  );
};

SearchBar.propTypes = {
  onSearchTermChange: PropTypes.func,
  onSearchCategoryChange: PropTypes.func,
  searchTerm: PropTypes.string
};

export default SearchBar;
