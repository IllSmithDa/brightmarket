import React, { Component } from 'react';
import Item from '../Item/Item';
import "./PopularItems.css";

export default class PopularItems extends Component {
  constructor() {
    super();
    this.state = {
      popularItems: [ {
        itemName: "Lenova Laptop",
        url:"https://image.shutterstock.com/z/stock-photo-laptop-isolated-on-white-background-with-clipping-path-393956974.jpg",
        description: "old laptop that my grandfather used",
        sellerName:"kidrock23",
        itemPrice:20,
        itemCondition:"poor",
        key: "3wd29329"
      },
      {
        itemName: "Microswerve tablet for kids",
        url: "https://image.shutterstock.com/image-vector/tablet-flat-icon-ipad-style-450w-393987937.jpg",
        description: "used tablet for kid's learning",
        sellerName:"tupacssun1",
        itemPrice:300,
        itemCondition:"very good",
        key:"jf2323k9"
      },
      {
        itemName: "Hb 2008 a5 quad core Desktop",
        url:"https://image.shutterstock.com/z/stock-photo-desctop-computer-on-wooden-desk-1170846982.jpg",
        description: "used computer still works great",
        sellerName:"joesrightgun2",
        itemPrice:200,
        itemCondition:"okay",
        key:"a2900320"
      },
      {
        itemName: "Predatorware silent gaming tablet",
        url:"https://image.shutterstock.com/z/stock-vector-tablet-in-ipad-style-black-color-with-blank-touch-screen-isolated-on-white-background-stock-vector-522160927.jpg",
        description: "new and unopened. Free Expediate shipping",
        sellerName:"masterchief117",
        itemPrice: 800,
        itemCondition:"new",
        key:"v923swe0"
      },
      {
        itemName: "Imoc a7 quad core 2018",
        url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
        description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
        sellerName:"Balmart",
        itemPrice: 2500,
        itemCondition:"new",
        key:"rie23233"
      },
      {
        itemName: "Imoc a7 quad core 2018",
        url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
        description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
        sellerName:"Balmart",
        itemPrice: 2500,
        itemCondition:"new",
        key:"rie23233"
      },
      {
        itemName: "Imoc a7 quad core 2018",
        url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
        description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
        sellerName:"Balmart",
        itemPrice: 2500,
        itemCondition:"new",
        key:"rie23233"
      },    {
        itemName: "Imoc a7 quad core 2018",
        url:"https://image.shutterstock.com/z/stock-photo-laptop-with-blank-screen-on-table-340152863.jpg",
        description: "new Imoc with all accessories included. Comes with 2 year Orange care warranty",
        sellerName:"Balmart",
        itemPrice: 2500,
        itemCondition:"new",
        key:"rie23233"
      },]
    }
  }
  render () {
    const { popularItems } = this.state;
    return(
      <div class="popular-container">
        <h2 class="popular-title">Popular Items</h2>
        <Item items={popularItems} />
      </div>
    )
  }
} 