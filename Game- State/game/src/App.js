import React, { Component } from 'react';
import Game from './game';
import Demo from './Demo';
// import Rando from './Rando';
import Button from './Button';
import './App.css';
import BrokenClick from './BrokenClick';

class App extends Component {
  render() {
    return <div className="App">
      MY APP
      <Game />
      <Demo animal="Bobcat" food="Pineapple" />
      <Button />
      <BrokenClick />
      </div>
  }
}

new Demo({animal: "Bobcat"});

export default App;
