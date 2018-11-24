import React from 'react';
import './Navbar.css';
import filter from '../../images/filter.png';

function Navbar() {
  return (
    <div className="navbarTitleWrapper borderBottom">
      <h1 className="navTitle">Drynk</h1>
      <img className="navFilter" alt="Filter icon" src={filter} />
    </div>
  );
}

export default Navbar;
