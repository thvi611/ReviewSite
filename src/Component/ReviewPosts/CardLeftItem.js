import React, { Component } from 'react'

export default class CardRightItem extends Component {
    render() {
        return (
        <div class="card-rows">
          <div class="card border-success bg-light flex-md-row mb-4 box-shadow h-md-250">
            <div className="vi_left">
                <a href="https://magic.reactjs.net/htmltojsx.htm"><img class="card-img-left flex-auto d-none d-md-block" src={this.props.image} alt="Card image cap"></img></a>
            </div>
            <div class="card-body d-flex flex-column align-items-start">
              <h3 class="mb-0">
                <a class="card-title" href="#">{this.props.title}</a>
              </h3>
              <div class="mb-1 text-muted">{this.props.date}</div>
              <p class="card-text mb-auto">{this.props.content}</p>
              <a class="green" href="#">Continue reading</a>
            </div>
          </div>
        </div>
        )
    }
}