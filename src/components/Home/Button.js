import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
  const dispatch = useDispatch();
  const { select, path } = props;
  return (
    <button dataID="button" type="button" onClick={() => { dispatch(filterByCountry(select)); }}>
      <NavLink to={path}>
        {
          <span>Back To Home Page</span>
        }
      </NavLink>
    </button>
  );
};

export default Button;