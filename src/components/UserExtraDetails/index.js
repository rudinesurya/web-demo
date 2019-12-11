import React from 'react';
import { Accordion } from 'semantic-ui-react';

const UserExtraDetails = ({ id, createdAt, userIpAddress, userAgent }) => {
  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default UserExtraDetails;
