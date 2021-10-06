import React, { Component } from 'react';

class RecommendCard extends Component {
    render() {
        return (
            <div>
                <div className="col-md-3" style={{float: 'left'}}>
                    <div className="card mb-2">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                        <a className="btn btn-primary">Button</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecommendCard;