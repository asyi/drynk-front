import React, { Component } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import MediumCard from './Components/MediumCard/MediumCard';

class App extends Component {
  render() {
    return (
      <div className="App background">
        <Navbar />
        <div>
          <Home />
          <div className="singleCol">
            <MediumCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
