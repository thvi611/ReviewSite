import React, { Component } from 'react';

class RmdCard extends Component {
    render() {
        return (
            <div className="card-container">
                <div className="card">
                    <div className="row content">
                        <div className="col-6 img-left">
                            <a href="/#"><img src={this.props.stay["images"][Math.floor(Math.random() * 4)]} alt="img"/></a>
                        </div>
                        <div className="col-6 info-right">
                            <div className="stay-name">
                                <p>{this.props.stay["stayName"]}</p>
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
                                    <p>{this.props.stay["reviewsCount"]} reviews</p> 
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