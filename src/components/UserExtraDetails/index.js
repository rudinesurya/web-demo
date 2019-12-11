import React from 'react';
import { Accordion } from 'semantic-ui-react';

const UserExtraDetails = ({ id, createdAt, userIpAddress, userAgent }) => {
  return (
    <Accordion
      defaultActiveIndex={[]}
      panels={{
        key: 'panel-1a',
        title: 'Level 1A',
        content: 'Level 1A Contents'
      }}
      exclusive={false}
      fluid
    />
  );
};

export default UserExtraDetails;
