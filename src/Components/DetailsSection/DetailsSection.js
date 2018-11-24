import React from 'react';
import './DetailsSection.css';
import checkmark from '../../images/checkmark.png';

function DetailsSection() {
  return (
    <div className="detailsContainer">
      <div className="infoWrapper">
        <p>Pinot Noir/Chardonnay</p>
        <p>750 mL bottle • 12.5% Alcohol</p>
      </div>
      <div className="priceWrapper">
        <p>$89.95</p>
        <div className="stockWrapper">
          <img src={checkmark} alt="Checkmark Icon" />
          <p>In Stock</p>
        </div>
      </div>        
    </div>
  );
}

export default DetailsSection;
