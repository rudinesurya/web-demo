import mockApi from 'api/MockApi';

const initialState = {
  pending: false,
  users: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return { ...state, pending: true };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        pending: false,
        users: action.payload
      };
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;

// Actions
export const fetchUsersAction = () => async dispatch => {
  try {
    dispatch({
      type: 'FETCH_USERS_PENDING'
    });

    const response = await mockApi.get('/posts');

    dispatch({
      type: 'FETCH_USERS_SUCCESS',
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: 'FETCH_USERS_ERROR',
      payload: err
    });
  }
};
