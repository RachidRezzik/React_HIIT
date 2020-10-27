import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Preferences from './components/Preferences'



class App extends Component {
  render(){
    return (
      <div className="App">
        <Header  />
        <Preferences />
      </div>
    );
  }
}

export default App;
