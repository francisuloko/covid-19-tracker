import React from 'react';
import { useSelector } from 'react-redux';
import Country from './selectCountry';

const World = () => {
  const state = useSelector((state) => state.covid);
  const covidTotal = state.data.total;
  return (
    <>
      {covidTotal && (
        <div className="container p-0 m-0 text-end">
          <div className="row m-0">
            <div className="col-6 themed-grid-col grid-item">
              <h2>Covid-19 Reports</h2>
              <span>
                {covidTotal.source}
              </span>
            </div>
            <div className="col-6 themed-grid-col grid-item">
              <h2>World</h2>
              <span>{covidTotal.today_confirmed}</span>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-12 themed-grid-col text-start text-secondary">
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
