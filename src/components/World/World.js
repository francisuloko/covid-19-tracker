import React from 'react';
import { useSelector } from 'react-redux';
import Country from './selectCountry';

const World = () => {
  const state = useSelector((state) => state.covid);
  const covidTotal = state.data.total;
  return (
    <>
      {covidTotal && (
        <div className="container">
          <div className="row mb-3">
            <div className="col-6 themed-grid-col">
              {covidTotal.name}
            </div>
            <div className="col-6 themed-grid-col">
              <h2>Cases</h2>
              <span>{covidTotal.today_confirmed}</span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 themed-grid-col">
              Filter by Country
            </div>
          </div>
          <div className="row mb-3">
            <Country />
          </div>
        </div>
      )}
    </>
  );
};

export default World;
