import React from 'react';

const UserExtraDetails = ({ id, createdAt, userIpAddress, userAgent }) => (
  <div>
    <p>id: {id}</p>
    <p>created: {createdAt}</p>
    <p>ip address: {userIpAddress}</p>
    <p>user agent: {userAgent}</p>
  </div>
);

export default UserExtraDetails;
