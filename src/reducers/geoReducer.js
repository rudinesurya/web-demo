import ipStackApi from 'api/IpStackApi';

const initialState = {
  pending: false,
  location: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_LOCATION_PENDING':
      return { ...state, pending: true };
    case 'FETCH_LOCATION_SUCCESS':
      return {
        ...state,
        pending: false,
        location: action.payload
      };
    case 'FETCH_LOCATION_ERROR':
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
export const fetchLocationAction = ipAddress => async dispatch => {
  try {
    dispatch({
      type: 'FETCH_LOCATION_PENDING'
    });

    const key = '161970e84bfee7f425d08e1b6751cae1';
    const response = await ipStackApi.get(`/${ipAddress}?access_key=${key}`);

    dispatch({
      type: 'FETCH_LOCATION_SUCCESS',
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: 'FETCH_LOCATION_ERROR',
      payload: err
    });
  }
};
