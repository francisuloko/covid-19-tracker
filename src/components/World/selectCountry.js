import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { date } from '../../api/covid';
import Button from './Button';

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
    <form>
      <p>Filter By Country:</p>
      <div>
        <label htmlFor="countries">
          <select className="py-1" name="countries" id="countries" onChange={(e) => { handleSelect(e); }}>
            {
              countriesKeys.map((country) => (
                <option
                  key={country[0]}
                  value={country[0]}
                >
                  {country[0]}
                </option>
              ))
            }
          </select>
        </label>
        <Button select={country} path={country} />
      </div>
    </form>
  );
};

export default selectCountry;
