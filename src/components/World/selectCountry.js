import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { date } from '../../api/covid';
import Button from './Button';

const selectCountry = () => {
  const state = useSelector((state) => state.covid);
  const [countr3, setCountry] = useState('Afghanistan');
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
    <form>
      <h2>Filter By Country:</h2>
      <div>
        <label htmlFor="countries">
          <select name="countries" id="countries" onChange={(e) => { handleSelect(e); }}>
            {
              countriesKeys.map((country) => (
                <option
                  key={country[0]}
                  value={country[0]}
                >
                  { country[0] }
                </option>
              ))
            }
          </select>
        </label>
      </div>
      <Button select={countr3} path={countr3} />
    </form>
  );
};

export default selectCountry;
