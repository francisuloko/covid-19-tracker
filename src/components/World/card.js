import React from 'react';
import Button from './Button';

const Card = (properties) => {
  const { country } = properties;
  return (
    <div key={country[0]} className="grid-item text-end">
      <Button select={country[0]} path={country[0]} />
      <h4>{country[0]}</h4>
      <span>{country[1].today_confirmed}</span>
    </div>
  );
};

export default Card;
