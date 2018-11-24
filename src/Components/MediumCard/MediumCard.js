import React from 'react';

import DetailsSection from '../DetailsSection/DetailsSection';

import placeholder from '../../images/placeholder.png';

import './MediumCard.css';

function MediumCard() {
  return (
    <div className="mediumCardWrapper">
      <img className="drinkImage" src={placeholder} alt="Veuve Clicqot Ponsardin Rose" />
      <div className="detailsContainer">
        <h2 className="productName">Veuve Clicqot Ponsardin Rose</h2>
        <DetailsSection />
      </div>
    </div>
  );
}

export default MediumCard;
