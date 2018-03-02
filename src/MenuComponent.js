import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MenuComponent extends Component {
  constructor(props){
  super(props);

    this.buttonClicked = this.buttonClicked.bind(this);
    
    let buttons = [
        {
          "id": 1,
          "type": "Home",
        },
        {
          "id": 2,
          "type": "About",
        },
        {
          "id": 3,
          "type": "Contact",
        },
      ]

      this.state = {
        buttons: buttons,
        globId: 0,
      };   
  }

    buttonClicked(e, ID){

      this.setState({
        globId: ID
      })
    }

  render() {
    let btnArray = this.state.buttons.map((btn) => (
      <button className = {this.state.globId === btn.id ? "About-acive" : "About-notactive"} value = {btn.type} onClick={(event) => {this.buttonClicked(event, btn.id)}}>{btn.type}</button>
    ))
    return (
      <div className="Menu">
       {btnArray}
      </div>
    );
  }
}

export default MenuComponent;

