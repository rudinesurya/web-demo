import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from 'reducers/userReducer';
import geoReducer from 'reducers/geoReducer';

const reducers = combineReducers({
  user: userReducer,
  geo: geoReducer
});

// Store
export const store = createStore(reducers, applyMiddleware(thunk));
