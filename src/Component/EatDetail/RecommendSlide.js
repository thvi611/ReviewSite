import React, { Component } from 'react';
import RmdCard from './RmdCard';

class RecommendSlide extends Component {
    render() {
        return (
            <div className="recommend-list">
                {
                    this.props.otherStays
                    .slice(1,5)
                    .map((value, index) => {
                       return <RmdCard stay={value}/>
                    })
                }
            
            </div>
        );
    }
}

export default RecommendSlide;