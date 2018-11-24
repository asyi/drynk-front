import React from 'react';

import DetailsSection from '../DetailsSection/DetailsSection';

import './BannerCard.css';


function BannerCard() {
  return (
    <div className="bannerWrapper">
      <img src="https://www.placebear.com/195/260" alt="Veuce Clicqot Ponsardin Rose" />
      <h2>Veuve Clicqot Ponsardin Rose</h2>
      <hr />
      <DetailsSection />
    </div>
  );
}

export default BannerCard;
