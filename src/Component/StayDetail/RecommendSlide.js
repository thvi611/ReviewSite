import React, { Component } from 'react';
import RmdCard from './RmdCard';

class RecommendSlide extends Component {
    render() {
        return (
            <div className="recommend-list">
                <RmdCard name={"dsdasd sadsadasd"}/>
                <RmdCard name={"Van Lang"}/>
                <RmdCard name={"Nguyen Xuan Trong"}/>
                <RmdCard name={"dsdasd sadsadasd"}/>
            
            </div>
        );
    }
}

export default RecommendSlide;