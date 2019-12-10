import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';
import DataGrid from './DataGrid';
import SearchBar from './SearchBar';

const UserDataGrid = ({ data, rowsCount }) => {
  const [activePage, setActivePage] = useState(1);

  const totalPages = data.length / rowsCount;
  const indexOfLast = activePage * rowsCount;
  const indexOfFirst = indexOfLast - rowsCount;
  const activePageData = data.slice(indexOfFirst, indexOfLast);

  return (
    <div>
      <SearchBar />
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
