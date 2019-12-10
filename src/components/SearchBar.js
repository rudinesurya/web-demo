import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

const SearchBar = () => {
  return <Input placeholder='Search...' onChange={() => console.log('asd')} />;
};

export default SearchBar;
