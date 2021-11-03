import React, { Component } from 'react';

class RmdCard extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <div className="row content">
                        <div className="col-6 img-left">
                            <a href="/#"><img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/ee/ca/15/adaline-hotel-suites.jpg?w=1200&h=-1&s=1" alt="img"/></a>
                        </div>
                        <div className="col-6 info-right">
                            <div className="stay-name">
                                <p>{this.props.name}</p>
                            </div>
                            <div className="stay-info">
                                <div className="rate">
                                    <div className="stars"> 
                                        <i className="fa fa-star" /> 
                                        <i className="fa fa-star" /> 
                                        <i className="fa fa-star" /> 
                                        <i className="fa fa-star gray-star" /> 
                                        <i className="fa fa-star gray-star" />
                                    </div>
                                    <p>15 reviews</p> 
                                </div>
                                <div className="price">
                                    <p> 5000 $</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default RmdCard;