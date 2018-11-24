import React from 'react';

import checkmark from '../../images/checkmark.png';
import placeholder from '../../images/placeholder.png';

import './MiniCard.css';

function MiniCard() {
  return (
    <div className="miniCardWrapper">
      <img className="drinkImage__mini" src={placeholder} alt="Veuve Clicqot Ponsardin Rose" />
      <div className="detailsContainer__mini">
        <h2 className="productName__mini">Veuve Clicqot Ponsardin Rose</h2>
        <div className="detailsWrapper__mini">
        <div className="infoWrapper__mini">
          <p className="productType__mini">Pinot Noir/Chardonnay</p>
          <p className="productSize__mini">750 mL bottle • 12.5% Alcohol</p>
        </div>
        <div className="priceWrapper__mini">
          <p className="productPriceWrapper__mini">$ <span className="productPrice__mini">89.95</span></p>
          <div className="stockWrapper__mini">
            <img className="checkIcon" src={checkmark} alt="Checkmark Icon" />
            <p className="productStock__mini">In Stock</p>
          </div>
        </div>        
      </div>
      </div>
    </div>
  );
}

export default MiniCard;
