import React from 'react';

import axios from 'axios';

import BannerCard from '../Components/BannerCard/BannerCard';
import MediumCard from '../Components/MediumCard/MediumCard';
import MiniCard from '../Components/MiniCard/MiniCard';

import './Home.css'

export default class Home extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:1337/api/items`)
      .then(res => {
        const data = res.data;
        const products = data.result
        this.setState({ products });
      })
  }

  render() {
    return (
      <div>
        { this.state.products.map(product => (
          <div>
            <div className="gridLayout">
              <BannerCard
                key={`${product.id}banner`}
                container={product.package_unit_type}
                image={product.image_thumb_url}
                inventory={product.inventory_count}
                name={product.name}
                percentage={product.alcohol_content}
                price={product.price_in_cents}
                primaryCat={product.primary_category}
                productNumber={product.product_no}
                secondaryCat={product.secondary_category}
                volume={product.package_unit_volume_in_milliliters} />
              <div className="medRow">
                <MediumCard
                  key={`${product.id}medCard1`}
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  productNumber={product.product_no}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />
                <MediumCard
                  key={`${product.id}medCard2`}
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  productNumber={product.product_no}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />
              </div>
              <div className="miniRow">
                <MiniCard
                  key={`${product.id}miniCard1`}
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  productNumber={product.product_no}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />              
                <MiniCard
                  key={`${product.id}miniCard2`}
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  productNumber={product.product_no}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} /> 
                <MiniCard
                  key={`${product.id}miniCard3`}
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  productNumber={product.product_no}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />                
              </div>
            </div>
            <div className="singleCol">
              <MediumCard
                key={`${product.id}singleColCard`}
                container={product.package_unit_type}
                image={product.image_thumb_url}
                inventory={product.inventory_count}
                name={product.name}
                percentage={product.alcohol_content}
                price={product.price_in_cents}
                primaryCat={product.primary_category}
                productNumber={product.product_no}
                secondaryCat={product.secondary_category}
                volume={product.package_unit_volume_in_milliliters} />              
            </div>
          </div>
        ))}
      </div>
    );
  }
}
