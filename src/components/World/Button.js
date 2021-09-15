import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCountry } from '../../redux/covid/covid';

const Button = (properties) => {
  const dispatch = useDispatch();
  const { select, path } = properties;
  return (
    <button className="border border-0" type="button" onClick={() => { dispatch(filterCountry(select)); }}>
      <NavLink to={`/${path}`} className="btn btn-primary text-white ms-1 py-0 px-3">
        Filter
      </NavLink>
    </button>
  );
};

export default Button;
