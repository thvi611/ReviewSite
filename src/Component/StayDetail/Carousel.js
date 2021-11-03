import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div className="carousel-side">
                <div id="demo" className="carousel slide " data-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to={0} className="active" />
                    <li data-target="#demo" data-slide-to={1} />
                    <li data-target="#demo" data-slide-to={2} />
                    <li data-target="#demo" data-slide-to={3} />
                    <li data-target="#demo" data-slide-to={4} />
                    </ul>
                    {/* The slideshow */}
                    <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <img src="https://banahills.sunworld.vn/wp-content/uploads/2020/05/image9-2.png" alt="golden-bridge1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://banahills.sunworld.vn/wp-content/uploads/2020/02/thiet-ke-an-tuong-cau-vang.png" alt="golden-bridge2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://baodanang.vn/dataimages/202004/original/images1557744_20_4__ANH_CAU_VANG.jpg" alt="golden-bridge3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://baodanang.vn/dataimages/202004/original/images1557744_20_4__ANH_CAU_VANG.jpg" alt="golden-bridge3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://baodanang.vn/dataimages/202004/original/images1557744_20_4__ANH_CAU_VANG.jpg" alt="golden-bridge3" />
                    </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Carousel;