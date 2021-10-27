import React, { Component } from 'react'

export default class AreaInfo extends Component {
    render() {
        return (
                <div>
                    <div className="p-2 bg-primary text-black rounded about">
                        <h1 className="text-center">About Da Nang</h1>
                    </div> 
                    <div className="mt-2 p-2 ">
                         <h5 className= "ml-3"><i className="fas fa-map-marker-alt"></i> {this.props.area.location} </h5>
                    </div>
                    <div className="mt-2 p-2 ">
                         <h5 >Description</h5>
                         <textarea className="ml-2">{this.props.area.description}</textarea>
                    </div>             
                </div>               
        );
    }
}
