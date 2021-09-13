import axios from 'axios';

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
const baseUrl = `https://api.covid19tracking.narrativa.com/api/${today}/country`;
const countryUrl = ''

const getCountry = (country) => {
  switch (country) {
    case 'spain':
      countryUrl = `${baseUrl}/${country}`;
      break;
    case 'brazil':
      countryUrl = `${baseUrl}/${country}`;
      break;
    default:
      break;
  }
}

const getData = async () => {
  const response = await axios.get(url);
  return response;
}

export { getCountry, getData };
