import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAction } from 'reducers/userReducer';
import { Container, Grid, Button, Form, Image, Item } from 'semantic-ui-react';

const UserDetailsScreen = props => {
  const [user, setUser] = useState(null);
  const [hidden, setHidden] = useState(true);
  const users = useSelector(state => state.user.users);
  const errorMessage = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  // Triggered once when screen load
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  // Triggered when data come in
  useEffect(() => {
    const id = props.match.params.id;
    const temp = users.find(u => u.id === id);
    setUser(temp);
  }, [users]);

  if (user === null || user === undefined) return null;

  return (
    <Container>
      <Grid className='segment centered' columns='three'>
        <Grid.Row>
          <Image src={user.avatar} size='small' circular />
        </Grid.Row>
        <Grid.Row>
          <Form style={{ width: '600px', textAlign: 'left' }}>
            <Form.Field>
              <label>Name</label>
              <input value={user.name} readOnly />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input value={user.userEmail} readOnly />
            </Form.Field>

            {hidden ? (
              <p onClick={() => setHidden(false)}>Read more</p>
            ) : (
              <Suspense fallback={<div>Loading...</div>}>
                <Form.Field>
                  <label>User ID</label>
                  <input value={user.id} readOnly />
                </Form.Field>
                <Form.Field>
                  <label>Date Created</label>
                  <input
                    value={new Date(user.createdAt).toLocaleDateString()}
                    readOnly
                  />
                </Form.Field>
                <Form.Field>
                  <label>IP Address</label>
                  <input value={user.userIpAddress} readOnly />
                </Form.Field>
                <Form.Field>
                  <label>Agent</label>
                  <input value={user.userAgent} readOnly />
                </Form.Field>
              </Suspense>
            )}
          </Form>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default UserDetailsScreen;
