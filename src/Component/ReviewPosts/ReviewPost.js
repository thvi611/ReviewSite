import React, { Component } from 'react'
import CardRightItem from './CardRightItem.js'
import CardLeftItem from './CardLeftItem.js'
import './reviewPost.css'
import demoData from "./data.json"
import Test from './Test'

export default class ReviewPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            sortByDate :true
        }
    }
    onChangeSortType = () =>{
        this.setState({
            sortByDate: !this.state.sortByDate
        })
    }
    showData = () => {

        if(this.state.sortByDate)  return(
                demoData.sort((a,b) => {
                    let date1 = a.date.split('/').reverse().join('');
                    let date2 = b.date.split('/').reverse().join('');
                    return date1 < date2 ? 1 : date1 > date2 ? -1 : 0;
                })
                .slice(0,4)
                .map((value, key) => {
                    return (
                        <CardRightItem key={key} 
                        image={value.image} 
                        title={value.title} 
                        description={value.description} 
                        id={value.id}
                        date={value.date}
                        rate={value.rate}/>
                        )
                })
            )
        else{
            return (
                demoData.sort((a,b) => b.rate - a.rate )
                .slice(0,4)
                .map((value, key) => {
                    return (
                    <CardRightItem key={key} 
                    image={value.image} 
                    title={value.title} 
                    description={value.description} 
                    id={value.id}
                    date={value.date}
                    rate={value.rate}/>
                    )
                })  
            )
        }
    }
    
    render() {
        return (
            <div className="container rv-post">
                <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark mt-10">
                    <div className="col-md-8 px-1">
                        <h1 className="">All review posts of Da Nang</h1>
                        <p className="lead my-3">Hello word! Hello word! Hello word! Hello word! Hello word! Hello word! Hello word! Hello word! </p>
                        <p className="lead mb-0"><a href="#" className="text-white fw-bold">Let's go!</a></p>
                    </div>
                </div>
            <div className="row g-5">
                <div className="col-md-8">
                {
                    
                    demoData.map((value, key) => {
                        return (
                            <CardLeftItem key={key} 
                                image={value.image} 
                                title={value.title} 
                                date={value.date}
                                content={value.content} 
                                id={value.id}/>
                        )
                    })
                }
                </div>
                {/* end col 8  */}
                <div className="col-md-4">
                    <div className="position-sticky">
                        <div className="col ">
                            <div className="col right_nav">
                                <ul>
                                    <li><a className={!this.state.sortByDate? "active": ""} href="#home" onClick={()=>this.onChangeSortType()}>人気</a></li>
                                    <li><a className={this.state.sortByDate? "active": ""} href="#news" onClick={()=>this.onChangeSortType()}>最近</a></li>
                                </ul>
                            </div>
                            <div className="row mt-3">
                            {
                                this.showData()
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
                                this.showData()
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
