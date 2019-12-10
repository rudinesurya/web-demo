import React, { useEffect } from 'react';
import UserDataGrid from '../components/UserDataGrid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAction } from '../reducers/userReducer';

const UserListViewScreen = () => {
  const users = useSelector(state => state.user.users);
  const errorMessage = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  return (
    <div>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <UserDataGrid data={users} rowsCount={10} />
    </div>
  );
};

export default UserListViewScreen;
