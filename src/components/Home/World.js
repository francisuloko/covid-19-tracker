import React from 'react';
import { useSelector } from 'react-redux';

const World = () => {
  const state = useSelector((state) => state.covid);
  const covidTotal = state.data.total;
  return (
    <>
      {covidTotal && (
        <div className="container">
          <h1>World Page - Covid Situation Report</h1>
          <h2>Worldwide Info - Up to date</h2>
          <div>
            <p>
              {covidTotal.today_confirmed}
            </p>
            <h2>Confirmed Cases</h2>
          </div>
          <div>
            <div>
              <p>
                {covidTotal.today_deaths}
              </p>
              <h2>Confirmed Deaths</h2>
            </div>
            <div>
              <p>
                {covidTotal.today_recovered}
              </p>
              <h2>Recovered</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default World;
