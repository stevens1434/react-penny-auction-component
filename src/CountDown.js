import React, { Component } from 'react';
import App from './App';

class CountDown extends Component {
  render() {
    return (
      <div>
        <p>{this.props.tick}</p>

      </div>
    )
  }
}

export default CountDown;
