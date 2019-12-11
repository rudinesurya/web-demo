import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserListViewScreen from 'screens/UserListViewScreen';
import UserDetailsScreen from 'screens/UserDetailsScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={UserListViewScreen} />
        <Route exact path='/:id' component={UserDetailsScreen} />

        {/* Default */}
        <Route component={UserListViewScreen} />
      </Switch>
    </Router>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
