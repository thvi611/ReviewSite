import React, { Component } from 'react';
import Carousel from './Carousel';
import ServiceInfo from './StayInfo';
import './stayDetail.css'
import RecommendSlide from './RecommendSlide';
import CommentPost from './CommentPost';
import stays from './stays.json'
import Menu from './Menu';
class EatDetail extends Component {
    render() {
        let random = Math.floor(Math.random() * 4);
        return (
            <div className="stay">
                <div className ="container bg-color">
                    {/* row */}
                    <div className="col mt-10">
                        <div className="pad">
                            <div className= "row">
                                <ServiceInfo stay={stays[random]}/>
                            </div>
                            <div className= "row center">
                                <Carousel images={stays[random]["images"]}/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 recommend">
                        <Menu></Menu>
                    </div>
                    {/* row  */}
                    <div className="row mt-5 recommend">
                        <div className="col-12">
                            <h2 className="mt-3">You may also like</h2>
                            <hr/>
                        </div>
                        <div className="col-12">
                            <h5>Popular Nearby</h5>
                        </div>
                        <RecommendSlide otherStays={stays}/>
                        <div className="col-12">
                            <hr/>
                            <h5>Similar Sponsored Properties</h5>
                            
                        </div>
                        <RecommendSlide otherStays={stays}/>
                        <div className="pad-bot">

                        </div>
                    </div>
                    {/* row  */}
                    <div className="row mt-5 comments">
                        <div className="col-6">
                            <div className="ratings"> <span className="product-rating">{stays[random]["rating"]}</span><span>/5</span>
                                <div className="stars"> 
                                {
                                    Array(5).fill(0)
                                    .map((_,index) =>{
                                        return(
                                            index < Math.floor(parseInt(stays[random]["rating"]))?
                                            <i key={index} className="fa fa-star" />:
                                            <i key={index} className="fa fa-star gray-star" />
                                        )
                                    })
                                    }
                                </div>
                                <div className="rating-text"> <span>{stays[random]["reviewsCount"]} reviews</span> </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <button type="button" class="btn btn-outline-primary btn-wrv">See all reviews</button>
                        </div>
                        <div className="cmt">
                            <textarea className="form-control cmt-text" rows={3} placeholder="Write your comment" />
                            <div className="clearfix btn-post ">
                                <button className="btn btn-sm btn-primary pull-right" type="submit"> Post now</button>
                            </div>
                        </div>
                    </div>
                    {/* row  */}
                    <div className="row">
                        <CommentPost/>
                    </div>
                </div>
            </div>
        );
    }
}

export default EatDetail;