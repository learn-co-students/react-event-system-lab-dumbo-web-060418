// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  eventHandler = () => {
    console.log('Entering password...')
  }

  render(){
    return(<div>Password: <input type="password" onKeyUp={this.eventHandler}/></div>)
  }
}
