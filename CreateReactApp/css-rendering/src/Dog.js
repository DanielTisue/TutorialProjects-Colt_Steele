import React, { Component } from 'react';
import image from './gold.jpg';
import './Dog.css';


class Dog extends Component {
  render(){
    return(
      <div className="Dog">
        <h1>DOG!</h1>
        <img className="Dog-image" src={image} />
      </div>
    );
  }
}

export default Dog; 