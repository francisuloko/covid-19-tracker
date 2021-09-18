import { GET_DATA_SUCCESS } from '../redux/covid/covid';

const dateObj = new Date(Date.now());
const date = `${dateObj.getFullYear()}-0${(dateObj.getMonth() + 1)}-${dateObj.getDate() - 1}`;
const baseUrl = `https://api.covid19tracking.narrativa.com/api/${date}`;

const getData = () => async (dispatch) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return dispatch({ type: GET_DATA_SUCCESS, data });
};

export { getData as default, date };
