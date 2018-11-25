import React from 'react';

import DetailsSection from '../DetailsSection/DetailsSection';

import './MediumCard.css';

function MediumCard(props) {
  return (
    <div className="mediumCardWrapper">
      <img className="drinkImage__medium" src={props.image} alt={props.name} />
      <div className="productNameWrapper__medium">
        <h2 className="productName__medium">{props.name}</h2>
        <DetailsSection
          container={props.container}
          inventory={props.inventory}
          percentage={props.percentage}
          price={props.price}
          primaryCat={props.primaryCat}
          secondaryCat={props.secondaryCat}
          volume={props.volume} />
      </div>
    </div>
  );
}

export default MediumCard;
