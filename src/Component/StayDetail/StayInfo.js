import React, { Component } from 'react';

class ServiceInfo extends Component {
    render() {
        return (
            <div className = "info-side">
                <div className="pad border-round">
                    <div>
                        <div className="stay-name">
                            <h3 className="text-center">{this.props.stay['stayName']}</h3>
                        </div> 
                        <div className="mt-2 location">
                            <p><i className="fas fa-map-marker-alt"></i>{this.props.stay['address']}</p>
                        </div>
                        <div className="rate">
                                <div className="stars"> 
                                    {
                                        Array(5).fill(0)
                                        .map((_,index) =>{
                                            return(
                                                index < Math.floor(parseInt(this.props.stay["rating"]))?
                                                <i key={index} className="fa fa-star" />:
                                                <i key={index} className="fa fa-star gray-star" />
                                            )
                                        })
                                    }
                                </div>
                                <div className="rating-text"> <p>{this.props.stay["reviewsCount"]} reviews</p> </div>
                        </div>
                        
                        <div className="time">
                            <div className="open-time">
                                <p><i className="fa fa-check"></i> Open: <p>{this.props.stay["open"]}</p></p>
                            </div>
                            <div className="close-time">
                                <p><i className="fas fa-times "></i> Close:<p>{this.props.stay["close"]}</p></p>
                            </div>
                        </div>
                        <hr/>
                        <div className="payment">
                            <div className="pay-method">
                                <i className="fab fa-cc-paypal" style={{fontSize: '48px', color: '#ff5860'}}></i>
                                <i className="fab fa-cc-mastercard" style={{fontSize: '48px', color: '#ff5860'}}></i>
                                <i className="fab fa-cc-visa" style={{fontSize: '48px', color: '#ff5860'}}></i>
                                <div className="price">
                                    <p>¥ {this.props.stay["price"]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="about">
                            <h5>About</h5>
                            <p>{this.props.stay["about"]}</p>
                        </div>             
                    </div>  
                </div>             
     
            </div>
        );
    }
}

export default ServiceInfo;