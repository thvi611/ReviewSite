import React, { Component } from 'react';
import Carousel from './Carousel';
import ServiceInfo from './ServiceInfo';
import './serviceDetail.css'
import RecommendSlide from './RecommendSlide';
import CommentPost from './CommentPost';
import WriteComment from './WriteComment';
class ServiceDetail extends Component {
    render() {
        return (
            <div>
                <div className ="container">
                    <div className="row  mt-5">
                        <div className= "col-6 mt-5">
                            <ServiceInfo/>
                        </div>
                        <div className= "col-6 mt-5">
                            <Carousel/>
                        </div>
                    </div>
                    <hr/>
                    {/* end row */}
                    <h2>Recommend for you</h2>
                    <div className="row">
                        <div className ="row-12">
                             <RecommendSlide/>
                             
                        </div>
                    </div>
                    <hr/>
                    <h2>About</h2>
                    <div className="row">
                        <div className="col-6">
                            <div className="ratings"> <span className="product-rating">4.6</span><span>/5</span>
                                <div className="stars"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> </div>
                                <div className="rating-text"> <span>46 ratings &amp; 15 reviews</span> </div>
                            </div>
                        </div>
                        <div className="col-6">
                         <button type="button" class="btn btn-outline-secondary btn-lg ">Write a review</button>
                        </div>
                    </div>
                    <div className="row">
                    <h2>Comments</h2>
                        <WriteComment/>
                        <CommentPost/>
                        <CommentPost/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceDetail;