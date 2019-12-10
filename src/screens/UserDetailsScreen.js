import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAction } from '../reducers/userReducer';

const UserDetailsScreen = ({ navigation }) => {
  const users = useSelector(state => state.user.users);
  const errorMessage = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  const id = navigation.getParam('id');
  const user = users.find(u => u.id === id);

  return (
    <div>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.userEmail}</p>
      <p>{user.createdAt}</p>
      <p>{user.userIpAddress}</p>
    </div>
  );
};

export default UserDetailsScreen;
