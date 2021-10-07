import React, { Component } from 'react';

class PlaceCarousel extends Component {
    render() {
        return (
            <div className="carousel-container">
                <div className="carousel-inner">
                    <div className="track">
                        <div className="card-container">
                            <div className="card">
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                
                            </div>
                        </div>
                        <div className="card-container">
                            <div className="card">
                                
                            </div>
                        </div>
                    </div>
                </div>


                <div className="nav">
                <button className="pre">
                    <i className="material-icons">chevron_left</i>
                </button>
                <button className="next">
                    <i className="material-icons">chevron_right</i>
                </button>
                </div>
            </div>
        );
    }
}

export default PlaceCarousel;