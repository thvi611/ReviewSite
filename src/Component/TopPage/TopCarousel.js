import React from "react";
import { Component } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import './topPage.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

class TopCarousel extends Component {
  render() {
    return(
      <div className="App1">
        <Carousel breakPoints={breakPoints}>
          <Item>One</Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          <Item>Five</Item>
        </Carousel>
      </div>
  )};
}

export default TopCarousel
