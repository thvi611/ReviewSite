import React, { Component } from 'react'
import CardLeftItem from './CardLeftItem'
import './reviewPost.css'
import demoData from "./data.json"
import Test from './Test'

export default class ReviewPost extends Component {
    render() {
        return (
            <div className="container rv-post">
                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark mt-5">
                <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
                <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-md-8">
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                    <Test/>
                </div>
                {/* end col 8  */}
                <div className="col-md-4">
                    <div className="position-sticky">
                        <div className="col ">
                            <div className="col right_nav">
                                <ul>
                                    <li><a className="active " href="#home">Phổ biến</a></li>
                                    <li><a  href="#news">Mới nhất</a></li>
                                </ul>
                            </div>
                            <div className="row mt-3">
                            {
                                demoData.map((value, key) => {
                                    return (
                                    <CardLeftItem key={key} 
                                    image={value.image} 
                                    title={value.title} 
                                    description={value.description} 
                                    id={value.id}/>
                                    )
                                })
                            }
                            </div>
                        </div>
                        {/* end col  */}
                        <div className="col ">
                            <div className="row mt-5 ">
                                <h5>ẨM THỰC MỌI MIỀN</h5>
                            </div>
                            <div className="row mt-3">
                            {
                                demoData.map((value, key) => {
                                    return (
                                    <CardLeftItem key={key} 
                                    image={value.image} 
                                    title={value.title} 
                                    description={value.description} 
                                    id={value.id}/>
                                    )
                                })
                            }
                            </div>
                        </div>
                        {/* end col */}
                    </div>
                    </div>
                {/* end col 4 */}
                </div>
            </div>
        )
    }
}
