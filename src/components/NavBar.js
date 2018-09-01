import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" >Cart</NavLink>
        </li>
      </ul>
    </div>
  )
}
