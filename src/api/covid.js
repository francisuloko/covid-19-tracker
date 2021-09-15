import { GET_DATA, GET_DATA_SUCCESS } from '../redux/covid/covid';

// const dateObj = new Date();
// const date = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDate()}`;
// const url = `https://api.covid19tracking.narrativa.com/api/${date}`;

const placeholder = new Date(Date.now());
const date = `${placeholder.getFullYear()}-0${(placeholder.getMonth() + 1)}-0${placeholder.getDate()}`;
const appUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;

const getData = () => async (dispatch) => {
  dispatch({ type: GET_DATA });
  const response = await fetch(appUrl);
  const data = await response.json();
  return dispatch({ type: GET_DATA_SUCCESS, data });
};

export { getData as default, date };
