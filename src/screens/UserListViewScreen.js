import React, { useEffect } from 'react';
import UserDataGrid from 'components/UserDataGrid';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAction } from 'reducers/userReducer';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

const UserListViewScreen = () => {
  const users = useSelector(state => state.user.users);
  const pending = useSelector(state => state.user.pending);
  const errorMessage = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  if (pending) {
    return (
      <Container>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Container>
    );
  }

  return (
    <Container>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <UserDataGrid data={users} rowsCount={10} />
    </Container>
  );
};

export default UserListViewScreen;
