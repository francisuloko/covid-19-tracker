import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERR,
} from '../../api/covid';

const initialState = {
  data: {},
  loading: false,
  error: {},
  country: 'Afghanistan',
};

const CovidReducer = (state = initialState, action) => {
  if (state === undefined || action === undefined) {
    return initialState;
  }
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true };
    case GET_DATA_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case GET_DATA_ERR:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export { CovidReducer as default };
