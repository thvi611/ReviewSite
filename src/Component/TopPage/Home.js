import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import PlaceCarousel from './PlaceCarousel';
import SearchBar from './SearchBar';
import './topPage.css'

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className ="row">
                
                </div>
                <div className="row align-items-center mt-10">
                    <div className="col-lg-6 pb-3">
                    <ImageSlider/>
                    </div>
                    <div className="col-lg-6 border">
                        <SearchBar/>
                    <h1 className="font-weight-light">About Viet Nam</h1>
                    <p>Vietnam is one of Southeast Asia’s most beautiful countries, attracting travellers to its lush mountains, bustling cities and golden sand beaches. Despite rapid modernisation in Vietnam’s urban centres of Hanoi and Ho Chi Minh, time-honoured traditions remain intact amongst the locals. There are numerous ancient landmarks and colonial structures that have survived throughout the bumps and scrapes of history.</p>
                    <a className="btn btn-primary mg-20" href="#!">Learn more...</a>
                    </div>
                </div>

                <hr/>
                <h2 className="mg-20">エクスプローベトナム</h2>
                <hr/>
                <div className ="row">
                    <div className="col-3">
                        <div className="title text-center">
                                <h3>北部</h3>
                        </div>
                        <div className="border region-card">
                            <div className="text-des">
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-9">
                        <PlaceCarousel/>
                    </div>
                </div>
                <hr/>
                <div className ="row mt-4">
                    <div className="col-3">
                        <div className="title text-center">
                                <h3>中部</h3>
                        </div>
                        <div className="border region-card">
                            <div className="text-des">
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-9">
                        <PlaceCarousel/>
                    </div>
                </div>
                <hr/>
                <div className ="row mt-4">
                    <div className="col-3">
                        <div className="title text-center">
                                <h3>南部</h3>
                        </div>
                        <div className="border region-card">
                            <div className="text-des">
                            </div>
                        </div>
                    </div>
                    <div className="col-9 mt-4">
                        <PlaceCarousel/>
                    </div>
                </div>
            </div>        
        );
    }
}

export default Home;