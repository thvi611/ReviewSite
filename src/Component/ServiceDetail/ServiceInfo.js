import React, { Component } from 'react';

class ServiceInfo extends Component {
    render() {
        return (
            <div className = "info ">
                <div className="border" >
                    <div className="p-2 bg-primary text-black rounded">
                        <h1 className="text-center">Golden Bridge</h1>
                    </div> 
                    <div className="mt-2 p-2 ">
                         <h5 className= "ml-3"><i className="fas fa-map-marker-alt"></i> Sun World, Bà Nà Hills, Đà Nẵng</h5>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mt-2 p-2">
                                <h5 className= "ml-3"><i className="fa fa-check"></i>    Open: <h4>08:00 AM</h4></h5>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mt-2 p-2">
                                <h5 className= "ml-3"><i className="fas fa-times "></i>    Close:<h4>16:00 PM</h4></h5>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 p-2 ">
                         <h5 className= "ml-3">Description</h5>
                         <p>The Golden Bridge (Vietnam) is new architectural construction, which sets the location inside the Bana Hills entertainment – tourism complex. This bridge was built at the height of 1.400m above sea level and stretches about 150m long. The root of the name “Golden Bridge” comes from its gilded railing frame. More than being a pure architecture piece, Golden Bridge has been asserting itself as a new symbol of Da Nang’s tourism since the opening in June 2018. </p>
                    </div>             
                </div>               

                       
            </div>
        );
    }
}

export default ServiceInfo;