import React, { Component } from 'react';

class ServiceInfo extends Component {
    render() {
        return (
            <div className = "info-side">
                <div className="pad border-round">
                    <div>
                        <div>
                            <h3 className="text-left">{this.props.stay['stayName']}</h3>
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
                            <div className="">
                                <p><i className="fa fa-check"></i> Opening Hours: {this.props.stay["open"]} - {this.props.stay["close"]}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="about">
                            <h5>About</h5>
                            <p><b>CUISINES</b><br></br>{this.props.stay["CUISINES"]}<br></br>
                            <b>MEALS</b><br></br>{this.props.stay["MEALS"]}<br></br>
                            <b>FEATURES</b><br></br>{this.props.stay["FEATURES"]}</p><br></br>
                        </div>             
                    </div>  
                </div>             
     
            </div>
        );
    }
}

export default ServiceInfo;