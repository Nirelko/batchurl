import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/profile'>Profile</Link>
  </nav>
);