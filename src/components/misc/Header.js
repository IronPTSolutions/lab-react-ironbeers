import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar bg-primary navbar-dark mb-5">
    <div className="container">
      <Link className="navbar-brand" to="/">Beers</Link>
    </div>
  </nav>
);

export default Header