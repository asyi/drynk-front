import React from 'react';

import BannerCard from '../Components/BannerCard/BannerCard';
import MediumCard from '../Components/MediumCard/MediumCard';

import './Home.css'

function Home() {
  return (
    <div className="gridLayout">
      <BannerCard />
      <div class="medRow">
        <MediumCard />
        <MediumCard />
      </div>
    </div>
  );
}

export default Home;
