import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { SliderData } from './SliderData';
class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            slidesToScroll:1,
            className: "slides"
          };
        return (
            <div>
                <Slider {...settings}>
                    {SliderData.map((val, index) =>{
                        return (
                            <div className="col-lg-6">
                                <img src={val.image} alt="img"/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}

export default ImageSlider;