import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import UserListViewScreen from 'screens/UserListViewScreen';

const App = () => {
  return <UserListViewScreen />;
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
