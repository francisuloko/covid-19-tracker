import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { date } from '../../api/covid';
import Button from './Button';

const FilterCountry = () => {
  const state = useSelector((state) => state.covid);
  const [select, setSelect] = useState('Afghanistan');
  let countries;
  let countriesKeys;
  if (state.data.dates) {
    countries = state.data.dates[date].countries;
    countriesKeys = Object.entries(countries);
  }
  const handleFilter = (event) => {
    setSelect(event.target.value);
  };

  return (
    <form className="d-flex my-2">
      <div>
        <span>Filter by Country: </span>
        <label htmlFor="countries">
          <select className="mx-2" name="countries" id="countries" onChange={(e) => { handleFilter(e); }}>
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
      </div>
      <Button select={select} path={select} />
    </form>
  );
};

export default FilterCountry;
