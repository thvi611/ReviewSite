import React, { Component } from 'react'
import './AreaDetail.css'
import AreaInfo from './AreaInfo';
import ImgSlider from './ImgSlider';
import data from './data.json'
import ServicesCarousel from './ServicesCarousel';
export default class AreaDetail extends Component {
    render() {
        return (
                <div className ="container">
                    <div className="row mt-10">
                            <div className="col-12 top">
                                <div className="area-name">
                                    <div className="explo">
                                        <h1>EXPLORER</h1>
                                        <h2>{data[0].areaName.toUpperCase()}</h2>
                                    </div>
                                    <div className="all-post">
                                        <button type="button" className="btn btn-outline-primary button">All reviews</button>
                                    </div>

                                    <div className="combo">
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">
                                            Services
                                            </button>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Food and Drink</a>
                                            <a className="dropdown-item " href="#">Stay</a>
                                            <a className="dropdown-item " href="#">Things to do</a>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        <div className=" col border">
                            <div className= "col-6 mt-5 slide">
                                <ImgSlider/>
                            </div>
                            <div className= "col-6 info">
                                <AreaInfo area={data[0]}/>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    {/* end row */}

                    <div className="row mt-5 border pink">
                        <div className="col-2 mt-5">
                            <div className="services-info">
                                <div className="title">
                                    <h4>Things to do</h4>
                                </div>
                                
                                <p className="service-desc">
                                    ??n ch??i bay lag c??c th??? 
                                </p>
                                <div className="all-btn">
                                    <button type="button" className="btn btn-outline-primary button">All</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 ">
                            <ServicesCarousel/>
                        </div>
                    </div>

                    <div className="row mt-2 border">
                        <div className="col-2 mt-5">
                            <div className="services-info">
                                <div className="title">
                                    <h4>Stay</h4>
                                </div>
                                
                                <p className="service-desc">
                                    nh?? h??ng kh??ch s???n vip pro
                                </p>
                                <div className="all-btn">
                                    <button type="button" className="btn btn-outline-primary button">All</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <ServicesCarousel/>
                        </div>
                    </div>

                    <div className="row mt-2 border pink">
                        <div className="col-2 mt-5">
                            <div className="services-info">
                                <div className="title">
                                    <h4>Food and Drink</h4>
                                </div>
                                
                                <p className="service-desc">
                                    ??n u???ng nh???u nh???t c??c th??? 
                                </p>
                                <div className="all-btn">
                                    <button type="button" className="btn btn-outline-primary button">All</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 ">
                            <ServicesCarousel/>
                        </div>
                    </div>
                </div>
        );
    }
}
