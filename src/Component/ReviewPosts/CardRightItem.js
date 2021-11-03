import React, { Component } from 'react'

export default class CardLeftItem extends Component {
    render() {
        return (
            <div className="list-view">
                <div className="view_item">
                    <div className="vi_left">
                        <a href="https://magic.reactjs.net/htmltojsx.htm"><img src={this.props.image} alt="img"/></a>
                    </div>
                    <div className="vi_right">
                        <a className="title" href >{this.props.title}</a>
                        <div className="info">
                            <div className="rate">
                                <p>{this.props.rate} ⭐</p>
                                <p>Written {this.props.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
