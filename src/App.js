import React, { Component } from 'react';

import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App background">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
