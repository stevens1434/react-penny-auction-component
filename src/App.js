import React, { Component } from 'react';
import ItemList from './ItemList'
import CountDown from './CountDown';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      itemArr: props.item,
      userArr: props.user,
      ticks: 10,
      price: 0
    }
    this.timer = 0;
    this.tick = this.tick.bind(this);
    if(this.timer === 0 || this.ticks === 0) {
      this.timer = setInterval(this.tick, 1000)
    }
  }

  tick(e) {
    let ticks = this.state.ticks -1;
    this.setState({
      ticks: ticks
      });
      if (ticks === 0) {
        clearInterval(this.timer);
      }
  }

  itemBid(e) {
    console.log("itemBid() clicked", e);

  }

  render() {
    let itemsList = this.state.itemArr.map( (item, index) => (
      <ItemList item={item} key={index} />
    ))
    let user = this.state.userArr.map( (item, index) => (
      <ItemList user={item} key={index} />
    ))
    let bidder = user[0].props.user;

    if(this.state.ticks === 0) {
      this.state.ticks = 10;
      this.timer = setInterval(this.tick, 1000)
    }

    return (
      <div className="App">

        <h1>Things to buy:</h1>
        <div className="itemdiv">
          <p>{itemsList[0].props.item.name}</p>
          <hr />
          <img src={itemsList[0].props.item.img}/>
          <p>{bidder}</p>
          <p>{this.state.ticks}</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[1].props.item.name}</p>
          <hr />
          <img src={itemsList[1].props.item.img}/>
          <p>{bidder}</p>
          <p>{this.state.ticks}</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[2].props.item.name}</p>
          <hr />
          <img src={itemsList[2].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>{this.state.ticks}</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[3].props.item.name}</p>
          <hr />
          <img src={itemsList[3].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>{this.state.ticks}</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[4].props.item.name}</p>
          <hr />
          <img src={itemsList[4].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>{this.state.ticks}</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>


      </div>
    );
  }
}

export default App;
