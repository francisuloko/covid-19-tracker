const GET_DATA = 'covid-19-tracking/country/GET_DATA';
const GET_DATA_SUCCESS = 'covid-19-tracking/country/GET_DATA_SUCCESS';
const GET_DATA_ERR = 'covid-19-tracking/country/GET_DATA_ERR';
const FILTER_COUNTRY = 'covid-19-tracking/country/FILTER_COUNTRY';

const initialState = {
  data: {},
  country: 'Afghanistan',
};

const filterCountry = (payload) => ({
  type: FILTER_COUNTRY,
  payload,
});

const CovidReducer = (state = initialState, action) => {
  if (state === undefined || action === undefined) {
    return initialState;
  }
  switch (action.type) {
    case GET_DATA:
      return { ...state };
    case GET_DATA_SUCCESS:
      return { ...state, data: action.data };
    case GET_DATA_ERR:
      return { ...state, error: action.error };
    case FILTER_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export {
  CovidReducer as default,
  filterCountry,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERR,
};
