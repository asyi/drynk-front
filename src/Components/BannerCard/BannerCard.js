import React from 'react';

import DetailsSection from '../DetailsSection/DetailsSection';

import './BannerCard.css';

function BannerCard(props) {
  return (
    <div className="bannerWrapper">
      <img className="drinkImage" src={props.image} alt={props.name} />
      <div className="detailsContainer">
        <h2 className="productName">{props.name}</h2>
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

export default BannerCard;
