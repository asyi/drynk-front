import React from 'react';

import DetailsSection from '../DetailsSection/DetailsSection';

import './BannerCard.css';

function BannerCard(props) {
  let name = props.name.replace(/\s+/g, '-').toLowerCase();
  let productNumber = props.productNumber;
  let link = `https://www.lcbo.com/lcbo/product/${name}/${productNumber}`

  return (
    <div className="bannerWrapper">
      <img className="drinkImage" src={props.image} alt={props.name} />
      <div className="detailsContainer">
        <a target="none" className="link" href={link}><h2 className="productName">{props.name}</h2></a>
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
