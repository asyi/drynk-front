import React from 'react';

import DetailsSection from '../DetailsSection/DetailsSection';

import placeholder from '../../images/placeholder.png';

import './BannerCard.css';


function BannerCard() {
  return (
    <div className="bannerWrapper">
      <img className="drinkImage" src={placeholder} alt="Veuve Clicqot Ponsardin Rose" />
      <div className="detailsContainer">
        <h2 className="productName">Veuve Clicqot Ponsardin Rose</h2>
        <DetailsSection />
      </div>
    </div>
  );
}

export default BannerCard;
