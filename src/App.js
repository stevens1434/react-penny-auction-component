import React, { Component } from 'react';
import ItemList from './ItemList'
import CountDown from './CountDown.js';
import _ from 'lodash';
import $ from 'jquery';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: this.item,
      itemArr: props.item,
      userArr: props.user,
      tick: 2,
      stopTick: false,
      price: 0,
      i: 0

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

  itemBid(e, index) {
    this.state.i = this.state.i % this.state.userArr.length;
    let newPrice = this.state.price + 1.00;
    let newBidder = this.state.i + 1;
    /*console.log("i: ", this.state.i)*/
    if(this.state.i === this.state.userArr.length) {
      this.setState({
        price: newPrice,
        tick: 4,
        i: 0,
        stopTick: true
      })
    } else {
      this.setState({
        price: newPrice,
        tick: 4,
        i: newBidder,
        stopTick: true
      })
    }
  }

  render() {
    let itemsList = this.state.itemArr.map( (item, index) => (
      <ItemList item={item} key={index} />
    ))
    let user = this.state.userArr.map( (item, index) => (
      <ItemList user={item} key={index} />
    ))

    /*let i = 0;*/
    let bidder = user[this.state.i].props.user;
    let price = this.state.price;

    if(this.state.tick === 0 && this.state.stopTick === false) { //refreshes clock on zero
      this.state.tick = 3;
      console.log("tick in render")
      this.timer = setInterval(this.tick, 1000)
    }
    var mappedUser = this.state.userArr.map(function(item, index) {
      return ([
        <p key={index}> {user} </p>
        ])
      })
    var mappedItems = this.state.itemArr.map(function(item, index) {
      return([
        <div key={index} id="item1" name="item1" className="itemdiv">
          <p> {item.name} </p>
          <img src={item.img} />
          <p>${price}</p>
          <button type="submit" id="1" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {item.name}</button>
        </div>
        ])
      })
    return (
      <div className="App">
      <div id="item1" name="item1" className="itemdiv">
        <p> {mappedItems} </p>
        <CountDown />

      </div>
        <h1>Things to buy:</h1>
        <div id="item1" name="item1" className="itemdiv">
          <p key="id" className="title">{itemsList[0].props.item.name}</p>
          <hr />
          <img src={itemsList[0].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>${(this.state.price + .36).toFixed(2)}</p>
          <p className="bidder">{bidder}</p>
          <button type="submit" id="1" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[0].props.item.name}</button>
        </div>
        <div id="item2" name="item2" className="itemdiv">
          <p className="title">{itemsList[1].props.item.name}</p>
          <hr />
          <img src={itemsList[1].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>${(this.state.price + .95).toFixed(2)}</p>
          <p className="bidder">{bidder}</p>
          <button type="submit" id="2" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[1].props.item.name}</button>
        </div>
        <div id="item3" className="itemdiv">
          <p className="title">{itemsList[2].props.item.name}</p>
          <hr />
          <img src={itemsList[2].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>${(this.state.price + .89).toFixed(2)}</p>
          <p className="bidder">{bidder}</p>
          <button type="submit" id="3" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[2].props.item.name}</button>
        </div>
        <div id="item4" className="itemdiv">
          <p className="title">{itemsList[3].props.item.name}</p>
          <hr />
          <img src={itemsList[3].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>${(this.state.price + .49).toFixed(2)}</p>
          <p className="bidder">{bidder}</p>
          <button type="submit" id="4" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[3].props.item.name}</button>
        </div>
        <div id="item5" className="itemdiv">
          <p className="title">{itemsList[4].props.item.name}</p>
          <hr />
          <img src={itemsList[4].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>${(this.state.price + .57).toFixed(2)}</p>
          <p className="bidder">{bidder}</p>
          <button type="submit" id="5" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[4].props.item.name}</button>
        </div>


      </div>
    );
  }
}

export default App;
