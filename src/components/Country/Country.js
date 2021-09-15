import React from 'react';
import { useSelector } from 'react-redux';
import { date } from '../../api/covid';
import Back from './BackButton';

const Country = () => {
  const state = useSelector((state) => state.covid);
  let countries;
  if (state.data.dates[date]) {
    countries = state.data.dates[date].countries;
  }
  if (state.data.dates[date]) {
    return (
      <div>
        <Back />
        <div>
          <h1>
            {state.country}
          </h1>
          <div>
            <h2>
              Total Confirmed Cases
              {
                countries[state.country].today_confirmed
              }
            </h2>
          </div>
        </div>
        <h2>
          More Info
        </h2>
        <ul>
          <li>
            <p>
              {countries[state.country].today_deaths}
            </p>
            <h2>
              Total Confirmed Deaths
            </h2>
          </li>
          <li>
            <p>
              {countries[state.country].today_recovered}
            </p>
            <h2>
              Total Confirmed Recovered
            </h2>
          </li>
          <li>
            <p>
              {countries[state.country].today_new_confirmed}
            </p>
            <h2>
              Todays Confirmed Cases
            </h2>
          </li>
          <li>
            <p>
              {countries[state.country].today_new_deaths}
            </p>
            <h2>
              Todays Deaths
            </h2>
          </li>
          <li>
            <p>
              {countries[state.country].today_new_recovered}
            </p>
            <h2>
              Todays Recovered
            </h2>
          </li>
          <li>
            <p>
              {countries[state.country].today_new_open_cases}
            </p>
            <h2>
              Todays Opened Cases
            </h2>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <h2>No Record Found</h2>
    </div>
  );
};

export default Country;
