import { getData } from "../api/covid";

const GET_DATA = 'covid-19-tracking/country/GET_STATS';

export const getDataAction = () => async (dispatch) => {
  const data = await getData();
  dispatch({
    type: GET_DATA,
    payload: data,
  })
};

const covidReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DATA:
      return [...state, ...action.payload];
  }
}

export default covidReducer;
