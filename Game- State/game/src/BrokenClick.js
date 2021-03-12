import React, { Component } from 'react';

//currently using alternate syntax

class BrokenClick extends Component {
  //constructor(props){
    //super(props);
    //this.
    state = {clicked: false};
    //this.handleClick = this.handleClick.bind(this); //have to add bind or else 'this' in the button does not know what to refer to.
    handleClick = (e) => {
      this.setState({clicked: true});
    }
  //}
  // handleClick(e){
  //   this.setState({clicked: true});
  // }
  render() {
    return (
      <div>
        <h1>{this.state.clicked? 'Clicked' : 'Not Clicked'}</h1>
        <button onClick={this.handleClick}>Click me Instead</button>
      </div>
      
    )
  }
}

export default BrokenClick;