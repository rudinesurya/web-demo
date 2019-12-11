import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAction } from 'reducers/userReducer';
import { Image, Item, Button } from 'semantic-ui-react';
const UserExtraDetails = lazy(() => import('components/UserExtraDetails'));

const UserDetailsScreen = props => {
  const [user, setUser] = useState(null);
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
    <Item.Group>
      <Item>
        <Item.Image size='small' src={user.avatar} />

        <Item.Content>
          <Item.Header as='a'>{user.name}</Item.Header>
          <Item.Meta>Description</Item.Meta>
          <Item.Description>
            <p>email: {user.userEmail}</p>
            <p>job: {user.jobDescription}</p>
          </Item.Description>
          <Item.Extra>Additional Details</Item.Extra>
          <Item.Description>
            <Suspense fallback={<h1>Still Loading…</h1>}>
              <UserExtraDetails
                id={user.id}
                createdAt={user.createdAt}
                userIpAddress={user.userIpAddress}
                userAgent={user.userAgent}
              />
            </Suspense>
          </Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default UserDetailsScreen;
