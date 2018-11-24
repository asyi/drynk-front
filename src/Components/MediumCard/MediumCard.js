import React from 'react';

import DetailsSection from '../DetailsSection/DetailsSection';

import placeholder from '../../images/placeholder.png';

import './MediumCard.css';

function MediumCard() {
  return (
    <div className="mediumCardWrapper">
      <img className="drinkImage__medium" src={placeholder} alt="Veuve Clicqot Ponsardin Rose" />
      <div className="detailsContainer__medium">
        <h2 className="productName__medium">Veuve Clicqot Ponsardin Rose</h2>
        <DetailsSection />
      </div>
    </div>
  );
}

export default MediumCard;
