import React from 'react';

import checkmark from '../../images/checkmark.png';

import './MiniCard.css';

function MiniCard(props) {
  const percentage = (parseInt(props.percentage)/100);
  const dollarPrice = (parseInt(props.price)/100);
  const stock = () => {
    if (props.inventory > 0) {
      return "In Stock"
    }
    else if (props.inventory === 0) {
      return "Out of Stock"
    }
  }

  return (
    <div className="miniCardWrapper">
      <img className="drinkImage__mini" src={props.image} alt={props.name} />
      <div className="detailsContainer__mini">
        <h2 className="productName__mini">{props.name}</h2>
        <div className="detailsWrapper__mini">
        <div className="infoWrapper__mini">
          <p className="productType__mini">{props.primaryCat}/{props.secondaryCat}</p>
          <p className="productSize__mini">{props.volume} mL {props.container} • {percentage}% Alcohol</p>
        </div>
        <div className="priceWrapper__mini">
          <p className="productPriceWrapper__mini">$ <span className="productPrice__mini">{dollarPrice}</span></p>
          <div className="stockWrapper__mini">
            <img className="checkIcon" src={checkmark} alt="Checkmark Icon" />
            <p className="productStock__mini">{stock}</p>
          </div>
        </div>        
      </div>
      </div>
    </div>
  );
}

export default MiniCard;
