import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountDown from './CountDown';
import './index.css';
/*import registerServiceWorker from './registerServiceWorker';*/

var item = [
  { name: "$10 Shell Gift Card", img: "/img/$10 Shell Gift Card.jpg" },
  { name: "$50 Walmart Gift Card", img: "/img/$50 Walmart Gift Card.jpg" },
  { name: "15 Voucher Bids", img: "/img/15 Voucher Bids.jpg" },
  { name: "250 Voucher Bids", img: "/img/250 Voucher Bids.jpg" },
  { name: "50 Voucher Bids", img: "/img/50 Voucher Bids.jpg" },
  { name: "Canon Pixma MG Series Wireless Printer", img: "/img/Canon Pixma MG Series Wireless Printer.jpg" },
  { name: "Cuisinart Convection Bread Maker", img: "/img/Cuisinart Convection Bread Maker.jpg" },
  { name: "Discrete Hide a Key Sprinkler Head", img: '/img/Discrete Hide a Key Sprinkler Head.jpg' },
  { name: "Ultra-Soft 1800 Series Sheet Set", img: "/img/Ultra-Soft 1800 Series Sheet Set.jpg" },
  { name: "iPad Pro 9.7 32GB WifFi", img: '/img/iPad Pro 9.7 32GB WifFi.jpg' }
]

let user = ['stevens1434', 'HOrseGirl_19', 'Soccerbooks9', 'SugahQueen220']

ReactDOM.render(
  <App item={item} user={user} />,
  document.getElementById('root')
);
/*registerServiceWorker();*/
