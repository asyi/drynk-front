import React from 'react';

import BannerCard from '../Components/BannerCard/BannerCard';
import MediumCard from '../Components/MediumCard/MediumCard';
import MiniCard from '../Components/MiniCard/MiniCard';

import './Home.css'

function Home() {
  return (
    <div className="gridLayout">
      <BannerCard />
      <div className="medRow">
        <MediumCard />
        <MediumCard />
      </div>
      <div className="miniRow">
        <MiniCard/>
        <MiniCard/>
        <MiniCard/>
      </div>
    </div>
  );
}

export default Home;
