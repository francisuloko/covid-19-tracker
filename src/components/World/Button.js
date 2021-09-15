import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCountry } from '../../redux/covid/covid';

const Button = (properties) => {
  const dispatch = useDispatch();
  const { select, path } = properties;
  return (
    <button type="button" onClick={() => { dispatch(filterCountry(select)); }}>
      <NavLink to={`/${path}`}>
        View Details
      </NavLink>
    </button>
  );
};

export default Button;
