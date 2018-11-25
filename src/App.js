import React, { Component } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App background">
        <Navbar />
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
