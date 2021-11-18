import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div className="carousel-side">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                        {
                            Array(parseInt(this.props.images.length))
                            .fill(0)
                            .map((_,i) => {
                                return i===0? 
                                <li data-target="#demo" data-slide-to={i} className="active" />:
                                <li data-target="#demo" data-slide-to={i} />
                            })
                        }
                    </ul>
                    {/* The slideshow */}
                    <div className="carousel-inner rounded">
                        {
                            Array(parseInt(this.props.images.length))
                            .fill(0)
                            .map((_,i) => {
                                return i===0? 
                                (<div className="carousel-item active">
                                    <img src={this.props.images[i]} alt={"image"+i}/>
                                </div>):
                                (
                                <div className="carousel-item">
                                    <img src={this.props.images[i]} alt={"image"+i}/>
                                </div>
                                )
                            })
                        }
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;