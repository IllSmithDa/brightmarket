import React, { Component } from 'react';
import "./Item.css"
export default class Item extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    }
  }
  goItemPage = (itemKey) => {
    window.location.href = `/item/${itemKey}`;
  }
  render() {
    const {items} = this.state;
    console.log(items);
    return(
      <div className="item-container">
        {items.map((item) => {
          return(
            <div className="item">
              <img className="image" src={item.url} onClick={() => {this.goItemPage(item.key)}} alt="product"/>
              <h3 className="margins item-title" onClick={() => {this.goItemPage(item.key)}}>{item.itemName}</h3>
              <p className="margins">{item.description}</p>
              <p className="margins"><b>seller</b>: {item.sellerName}</p>
              <p className="margins"><b>price</b>: ${item.itemPrice}</p>
              <p className="margins"><b>condition</b>: {item.itemCondition}</p>
              <p className="margins"><b>key</b>: {item.key}</p>
            </div>
          );
        })}
    </div>
    );
  }
}