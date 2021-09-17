import React from 'react';
import { useSelector } from 'react-redux';
import Country from './selectCountry';

const World = () => {
  const state = useSelector((state) => state.covid);
  const covidTotal = state.data.total;
  return (
    <>
      {covidTotal && (
        <div className="p-0 m-0 text-end">
          <div className="row m-0">
            <div className="col-6 themed-grid-col grid-item">
              <h2>Global Covid-19</h2>
              <span data-testid="source">
                {covidTotal.source}
              </span>
            </div>
            <div className="col-6 themed-grid-col grid-item">
              <h2 data-testid="world">Cases</h2>
              <span>
                {
                  covidTotal.today_confirmed
                }
              </span>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-6 themed-grid-col grid-item">
              <h2>Deaths</h2>
              <span data-testid="source">
                {covidTotal.today_deaths}
              </span>
            </div>
            <div className="col-6 themed-grid-col grid-item">
              <h2 data-testid="world">Recovered</h2>
              <span>
                {
                  covidTotal.today_recovered
                }
              </span>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-12 themed-grid-col text-start text-secondary">
              Filtered by Country
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
