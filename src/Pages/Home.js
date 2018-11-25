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
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />
              <div className="medRow">
                <MediumCard
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />
                <MediumCard
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />
              </div>
              <div className="miniRow">
                <MiniCard
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />              
                <MiniCard
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} /> 
                <MiniCard
                  container={product.package_unit_type}
                  image={product.image_thumb_url}
                  inventory={product.inventory_count}
                  name={product.name}
                  percentage={product.alcohol_content}
                  price={product.price_in_cents}
                  primaryCat={product.primary_category}
                  secondaryCat={product.secondary_category}
                  volume={product.package_unit_volume_in_milliliters} />                
              </div>
            </div>
            <div className="singleCol">
              <MediumCard />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
