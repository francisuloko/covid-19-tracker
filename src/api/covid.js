const dateObj = new Date();
const date = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`;

const GET_DATA = 'covid-19-tracking/country/GET_DATA';
const GET_DATA_SUCCESS = 'covid-19-tracking/country/GET_DATA_SUCCESS';
const GET_DATA_ERR = 'covid-19-tracking/country/GET_DATA_ERR';
const url = `https://api.covid19tracking.narrativa.com/api/${date}`;

const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  const response = await fetch(url);
  const data = await response.json();
  return dispatch({ type: GET_DATA_SUCCESS, data });
};

export {
  getData as default,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERR,
  date,
};
