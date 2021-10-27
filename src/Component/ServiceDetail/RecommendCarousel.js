import React from "react";
import { Component } from "react";
import Carousel from "react-elastic-carousel";
import RecommendItem from "./RecommendItem";
import './serviceDetail.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

class RecommendCarousel extends Component {
  render() {
    return(
      <div className="App1">
        <Carousel breakPoints={breakPoints}>
          <RecommendItem>One</RecommendItem>
          <RecommendItem>Two</RecommendItem>
          <RecommendItem>Three</RecommendItem>
          <RecommendItem>Four</RecommendItem>
          <RecommendItem>Five</RecommendItem>
        </Carousel>
      </div>
  )};
}

export default RecommendCarousel
