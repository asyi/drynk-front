import React from 'react';
import './Navbar.css';

import filter from '../../images/filter.png';
import logo from '../../images/logo.png';

function Navbar() {
  return (
    <div className="navbkg">
      <div className="navbarTitleWrapper borderBottom">
        <img className="navFilter" alt="Filter icon" src={filter} />
        <img className="navLogo" alt="Drynk Logo" src={logo} />
      </div>
    </div>
  );
}

export default Navbar;
