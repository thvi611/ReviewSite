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
                                    <i className="fa fa-star" /> 
                                    <i className="fa fa-star" /> 
                                    <i className="fa fa-star" /> 
                                    <i className="fa fa-star gray-star" /> 
                                    <i className="fa fa-star gray-star" />
                                    
                                </div>
                                <div className="rating-text"> <p>15 reviews</p> </div>
                        </div>
                        
                        <div className="time">
                            <div className="open-time">
                                <p><i className="fa fa-check"></i> Open: <p>08:00 AM</p></p>
                            </div>
                            <div className="close-time">
                                <p><i className="fas fa-times "></i> Close:<p>16:00 PM</p></p>
                            </div>
                        </div>
                        <hr/>
                        <div className="payment">
                            <div className="pay-method">
                                <i className="fab fa-cc-paypal" style={{fontSize: '48px', color: '#ff5860'}}></i>
                                <i className="fab fa-cc-mastercard" style={{fontSize: '48px', color: '#ff5860'}}></i>
                                <i className="fab fa-cc-visa" style={{fontSize: '48px', color: '#ff5860'}}></i>
                                <div className="price">
                                    <p>$56000</p>
                                </div>
                            </div>
                        </div>
                        <div className="about">
                            <h5>About</h5>
                            <p>Minh House - To Hien Thanh is one kind of ecological apartment which is equipped with the modern and luxury things. Just walking a few steps, you can reach to the legendary My Khe beach. It takes you 4km to the airport, 1km to the center and 500m to the beach.Minh House - To Hien Thanh is one kind of ecological apartment which is equipped with the modern and luxury things. Just walking a few steps, you can reach to the legendary My Khe beach. It takes you 4km to the airport, 1km to the center and 500m to the beach. You can enjoy the specialties everywhere. Welcome to Minh House.</p>
                        </div>             
                    </div>  
                </div>             
     
            </div>
        );
    }
}

export default ServiceInfo;