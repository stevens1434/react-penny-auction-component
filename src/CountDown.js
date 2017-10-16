import React, { Component } from 'react';
import App from './App';

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: 10,
      stopTick: false
    }
    this.timer = 0;

    if(this.timer === 0 && this.state.stopTick === false) {
      this.tick = this.tick.bind(this);
      console.log("ticks in constructor")
      this.timer = setInterval(this.tick, 1000)
    }
  }
  tick(e) { // tick every second
    if (this.state.tick === 0 && this.state.stopTick === true) {
      let tick = 0;
      this.tick = '';
      this.timer = '';
      this.setState({
        tick: tick
        });
      } else {
        let tick = this.state.tick -1;
        console.log("tick in tick(e): " + tick)
          this.setState({
            tick: tick
          });
          if (tick === 0) {
            clearInterval(this.timer);
          }
      }
    }

  render() {
    this.timer = 0;

    if(this.state.tick === 0 && this.state.stopTick === false) { //refreshes clock on zero
      this.state.tick = 3;
      console.log("tick in render")
      this.timer = setInterval(this.tick, 1000)
    }

    return (
      <div>
        <p>{this.state.tick}</p>

      </div>
    )
  }
}

export default CountDown;
