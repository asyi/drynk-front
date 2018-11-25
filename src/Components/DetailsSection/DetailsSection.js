import React from 'react';
import './DetailsSection.css';
import checkmark from '../../images/checkmark.png';

function DetailsSection(props) {
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
    <div className="detailsWrapper">
      <div className="infoWrapper">
        <p className="productType">{props.primaryCat}/{props.secondaryCat}</p>
        <p className="productSize">{props.volume} mL {props.container} • {percentage}% Alcohol</p>
      </div>
      <div className="priceWrapper">
        <p className="productPriceWrapper">$ <span className="productPrice">{dollarPrice}</span></p>
        <div className="stockWrapper">
          <img className="checkIcon" src={checkmark} alt="Checkmark Icon" />
          <p className="productStock">{stock()}</p>
        </div>
      </div>        
    </div>
  );
}

export default DetailsSection;
