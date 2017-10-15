import React, { Component } from 'react';
import App from './App';

class ItemList extends Component {
  render() {
    return (
      <div>
        <p>{this.props.item}</p>
        <p>{this.props.user}</p>

      </div>
    )
  }
}

export default ItemList;
