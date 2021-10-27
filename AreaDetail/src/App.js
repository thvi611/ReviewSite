import React from 'react';
import './App.css';
import Navbar from './Component/Navbar.js';
import Body from './Component/Body.js';
import Footer from './Component/Footer.js';
import Carousel1 from'./Component/react-carousel-component-master/src/Carousel';






function App(){
  return(
    <div>
      <Navbar />
      <Body />
      <h2>Việc nên làm</h2>
      <Carousel1 />
      <h2>Khách sạn</h2>
      <Carousel1 />
      <h2>Đồ ăn</h2>
      <Carousel1 />
      <Footer /> 
      
    </div>
  )
}
export default App




