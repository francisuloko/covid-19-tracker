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
      <div data-testid="detailsContainer">
        <div className="p-0 m-0 text-end">
          <div className="row m-0">
            <div className="col-6 themed-grid-col grid-item text-start">
              <Back />
            </div>
            <div className="col-6 themed-grid-col grid-item">
              <h2 data-testid="country">
                {state.country}
              </h2>
              <span>
                {countries[state.country].today_confirmed}
              </span>
            </div>
          </div>
        </div>
        <ul className="country-data m-0 p-0" data-testid="ul">
          <li>
            <span>
              Total Confirmed Deaths
            </span>
            <span>
              {countries[state.country].today_deaths}
            </span>
          </li>
          <li>
            <span>
              Total Confirmed Recovered
            </span>
            <span>
              {countries[state.country].today_recovered}
            </span>
          </li>
          <li>
            <span>
              Todays Confirmed Cases
            </span>
            <span>
              {countries[state.country].today_new_confirmed}
            </span>
          </li>
          <li>
            <span>
              Todays Deaths
            </span>
            <span>
              {countries[state.country].today_new_deaths}
            </span>
          </li>
          <li>
            <span>
              Todays Recovered
            </span>
            <span>
              {countries[state.country].today_new_recovered}
            </span>
          </li>
          <li>
            <span>
              Todays Opened Cases
            </span>
            <span>
              {countries[state.country].today_new_open_cases}
            </span>
          </li>
        </ul>
        <p className="text-center m-0 p-2">
          {
            `Source: ${countries[state.country].source}`
          }
        </p>
      </div>
    );
  }
  return (
    <div>
      <span>No Record Found</span>
    </div>
  );
};

export default Country;
