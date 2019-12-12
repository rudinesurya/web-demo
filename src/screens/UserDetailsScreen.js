import React, { Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAction } from 'reducers/userReducer';
import { fetchLocationAction } from 'reducers/geoReducer';
import {
  Container,
  Grid,
  Dimmer,
  Loader,
  Form,
  Image
} from 'semantic-ui-react';

const UserDetailsScreen = props => {
  const [user, setUser] = useState(null);
  const [hidden, setHidden] = useState(true);
  const users = useSelector(state => state.user.users);
  const pending = useSelector(state => state.user.pending);
  const location = useSelector(state => state.geo.location);
  const errorMessage = useSelector(state => state.user.error);
  const geoErrorMessage = useSelector(state => state.geo.error);
  const dispatch = useDispatch();

  // Triggered once when screen load
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  // Triggered when data come in
  useEffect(() => {
    const id = props.match.params.id;
    if (users !== null && users.length > 0) {
      const temp = users.find(u => u.id === id);

      if (temp) {
        setUser(temp);
        dispatch(fetchLocationAction(temp.userIpAddress));
      }
    }
  }, [users]);

  if (pending || user === null || user === undefined)
    return (
      <Container>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Container>
    );

  return (
    <Container>
      {errorMessage ? <p>{errorMessage}</p> : null}
      {geoErrorMessage ? <p>{geoErrorMessage}</p> : null}
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
                  <label>Country</label>
                  <input value={location.country_name} readOnly />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input value={location.city} readOnly />
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
