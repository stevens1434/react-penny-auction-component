import React, { Component } from 'react';
import ItemList from './ItemList'
import './App.css';



class App extends Component {

  constructor(props) {
    super()
    this.state = {
      itemArr: props.item,
      userArr: props.user,
      timer: ''
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

    return (
      <div className="App">

        <h1>Things to buy:</h1>
        <div className="itemdiv">
          <p>{itemsList[0].props.item.name}</p>
          <hr />
          <img src={itemsList[0].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>timer</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[1].props.item.name}</p>
          <hr />
          <img src={itemsList[1].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>timer</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[2].props.item.name}</p>
          <hr />
          <img src={itemsList[2].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>timer</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[3].props.item.name}</p>
          <hr />
          <img src={itemsList[3].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>timer</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        <div className="itemdiv">
          <p>{itemsList[4].props.item.name}</p>
          <hr />
          <img src={itemsList[4].props.item.img}/>
          <p>{user[0].props.user}</p>
          <p>timer</p>
          <button type="submit" className="button" onClick={ (e) => this.itemBid(e) }>Bid</button>
        </div>
        {console.log({user})}


      </div>
    );
  }
}

export default App;
