import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCountry } from '../../redux/covid/covid';

const Button = (props) => {
  const dispatch = useDispatch();
  const { select, path } = props;
  return (
    <button type="button" onClick={() => { dispatch(filterCountry(select)); }}>
      <NavLink to={path}>
        <span>Back To Home Page</span>
      </NavLink>
    </button>
  );
};

Button.propTypes = {
  select: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;
