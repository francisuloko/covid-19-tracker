import React from 'react';
import { NavLink } from 'react-router-dom';

const Back = () => (
  <button type="button">
    <NavLink to="/">
      Back
    </NavLink>
  </button>
);

export default Back;
