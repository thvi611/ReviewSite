import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

export default class ImgSlider  extends Component {
  
    render() {
      const images = [
        { url: "https://banahills.sunworld.vn/wp-content/uploads/2020/05/image9-2.png" },
        { url: "https://banahills.sunworld.vn/wp-content/uploads/2020/02/thiet-ke-an-tuong-cau-vang.png" },
        { url: "https://baodanang.vn/dataimages/202004/original/images1557744_20_4__ANH_CAU_VANG.jpg" },
      ];
      return (
        <div>
          <SimpleImageSlider
            width={500}
            height={450}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      );
      }
}
