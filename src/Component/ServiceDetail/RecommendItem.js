// import styled from "styled-components";

// export default styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 250px;
//   width: 280px;
//   background-color: #00008B;
//   color: #fff;
//   margin: 0 15px;
//   font-size: 4em;
// `;
import React, { Component } from 'react'

export default class RecommendItem extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="container-card">
          <img src="http://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="Avatar" />
        </div>
      </div>
    )
  }
}

