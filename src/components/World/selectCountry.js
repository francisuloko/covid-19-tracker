import React from 'react';
import { useSelector } from 'react-redux';
import { date } from '../../api/covid';
import Card from './card';

const selectCountry = () => {
  const state = useSelector((state) => state.covid);
  let countries;
  let countriesKeys;
  if (state.data.dates) {
    countries = state.data.dates[date].countries;
    countriesKeys = Object.entries(countries);
  }
  return (
    <div className="grid-container py-1 text-right" name="countries" id="countries">
      {
        countriesKeys.map((obj) => (
          <Card
            country={obj}
            key={obj[0]}
          />
        ))
      }
    </div>
  );
};

export default selectCountry;
