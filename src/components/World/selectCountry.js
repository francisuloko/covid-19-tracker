import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { date } from '../../api/covid';
import Card from './card';

const selectCountry = () => {
  const state = useSelector((state) => state.covid);
  const [country, setCountry] = useState('Afghanistan');
  let countries;
  let countriesKeys;
  if (state.data.dates) {
    countries = state.data.dates[date].countries;
    countriesKeys = Object.entries(countries);
  }
  const handleSelect = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className="grid-container py-1" name="countries" id="countries">
      {
        countriesKeys.map((obj) => (
          <Card
            select={country}
            country={obj}
            path={country}
            onChange={(e) => { handleSelect(e); }}
            key={obj[0]}
          />
        ))
      }
    </div>
  );
};

export default selectCountry;
