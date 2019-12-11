import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersAction } from 'reducers/userReducer';
import { Image, Item } from 'semantic-ui-react';
const UserExtraDetails = React.lazy(() =>
  import('components/UserExtraDetails')
);

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
    <Item>
      <Item.Image size='tiny' src={user.avatar} />

      <Item.Content>
        <Item.Header as='a'>{user.name}</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <p>{user.userEmail}</p>
          <p>{user.jobDescription}</p>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
        <Item.Description>
          <Suspense fallback={<div>Loading...</div>}>
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
  );
};

export default UserDetailsScreen;
