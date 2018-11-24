import React from 'react';
import './DetailsSection.css';
import checkmark from '../../images/checkmark.png';

function DetailsSection() {
  return (
    <div className="detailsWrapper">
      <div className="infoWrapper">
        <p className="productType">Pinot Noir/Chardonnay</p>
        <p className="productSize">750 mL bottle • 12.5% Alcohol</p>
      </div>
      <div className="priceWrapper">
        <p className="productPriceWrapper">$ <span className="productPrice">89.95</span></p>
        <div className="stockWrapper">
          <img className="checkIcon" src={checkmark} alt="Checkmark Icon" />
          <p className="productStock">In Stock</p>
        </div>
      </div>        
    </div>
  );
}

export default DetailsSection;
