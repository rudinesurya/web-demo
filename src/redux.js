import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';

const reducers = combineReducers({
  user: userReducer
});

// Store
export const store = createStore(reducers, applyMiddleware(thunk));
