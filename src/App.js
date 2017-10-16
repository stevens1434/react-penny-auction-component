import React, { Component } from 'react';
import ItemList from './ItemList'
import CountDown from './CountDown';
import _ from 'lodash';
import $ from 'jquery';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemArr: props.item,
      userArr: props.user,
      tick: 2,
      price: 0,
      i: 0
    }
    this.timer = 0;
    this.tick = this.tick.bind(this);
    if(this.timer === 0) {
      this.timer = setInterval(this.tick, 1000)
    }
  }

  tick(e) {
    let tick = this.state.tick -1;
    this.setState({
      tick: tick
      });
      if (tick === 0) {
        clearInterval(this.timer);
      }
  }

  itemBid(e) {
    console.log(this.state.userArr.length);
    this.state.i = this.state.i % this.state.userArr.length;
    let newPrice = this.state.price + 1.00;
    let newBidder = this.state.i + 1;
    console.log("i: ", this.state.i)
    if(this.state.i === this.state.userArr.length) {
      this.setState({
        price: newPrice,
        tick: 4,
        i: 0
      })
    } else {
      this.setState({
        price: newPrice,
        tick: 4,
        i: newBidder
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
    let price = 0.00;

    if(this.state.tick === 0) {
      this.state.tick = 3;
      this.timer = setInterval(this.tick, 1000)
    }

    return (
      <div className="App">
      <ItemList />

        <h1>Things to buy:</h1>
        <div id="item1" name="item1" className="itemdiv">
          <p className="title">{itemsList[0].props.item.name}</p>
          <hr />
          <img src={itemsList[0].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>{(this.state.price + .36).toFixed(2)}</p>
          <p>{bidder}</p>
          <button type="submit" id="1" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[0].props.item.name}</button>
        </div>
        <div id="item2" name="item2" className="itemdiv">
          <p className="title">{itemsList[1].props.item.name}</p>
          <hr />
          <img src={itemsList[1].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>{(this.state.price + .95).toFixed(2)}</p>
          <p>{bidder}</p>
          <button type="submit" id="2" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[1].props.item.name}</button>
        </div>
        <div id="item3" className="itemdiv">
          <p className="title">{itemsList[2].props.item.name}</p>
          <hr />
          <img src={itemsList[2].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>{(this.state.price + .89).toFixed(2)}</p>
          <p>{bidder}</p>
          <button type="submit" id="3" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[2].props.item.name}</button>
        </div>
        <div id="item4" className="itemdiv">
          <p className="title">{itemsList[3].props.item.name}</p>
          <hr />
          <img src={itemsList[3].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>{(this.state.price + .49).toFixed(2)}</p>
          <p>{bidder}</p>
          <button type="submit" id="4" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[3].props.item.name}</button>
        </div>
        <div id="item5" className="itemdiv">
          <p className="title">{itemsList[4].props.item.name}</p>
          <hr />
          <img src={itemsList[4].props.item.img}/>
          <p>{this.state.tick}</p>
          <p>{(this.state.price + .57).toFixed(2)}</p>
          <p>{bidder}</p>
          <button type="submit" id="5" className="button" onClick={ (e) => this.itemBid(e) }>Bid on {itemsList[4].props.item.name}</button>
        </div>


      </div>
    );
  }
}

export default App;
