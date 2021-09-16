import React from 'react';
import Button from './Button';

const Card = (properties) => {
  const {
    select, country, path, handle,
  } = properties;
  return (
    <div
      key={country[0]}
      className="grid-item"
      value={country[0]}
    >
      <h5>{country[0]}</h5>
      <span>{country[1].today_confirmed}</span>
      <Button
        select={select}
        path={path}
        onClick={handle}
      />
    </div>
  );
};

export default Card;
