import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
          <div class="card-deck">
            <div class="card">
              <img class="card-img-top" src="https://wallpapershome.com/images/pages/pic_h/16681.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <a class="card-title text-dark" href="#">Title</a>
                <p class="card-text">Content</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        )
    }
}