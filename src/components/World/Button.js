import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCountry } from '../../redux/covid/covid';

const Button = (properties) => {
  const dispatch = useDispatch();
  const { select, path } = properties;
  return (
    <NavLink to={`/${path}`} className="btn btn-primary text-white ms-1 py-1 px-3" onClick={() => { dispatch(filterCountry(select)); }}>
      Filter
    </NavLink>
  );
};

export default Button;
