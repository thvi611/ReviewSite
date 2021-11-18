import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
        <div class="col">
          <div>
                <h2>MENU</h2>
            </div>
            <div class="col">
                <div class="menu-item-info-box">
                    <span class="menu-item-info-box-icon"><img src="https://th.bing.com/th/id/OIP.jE_t1X_G3Z4dhvAfzc6guwHaE8?pid=ImgDet&rs=1"></img></span>

                    <div class="menu-item-info-box-content">
                      <span class="menu-item-info-box-text">Cup Cake</span>
                      <span class="menu-item-info-box-detail">Cup Cake recheado de Doce de Leite</span>
                      <span class="menu-item-info-box-price">R$ 10,00</span>
                    </div>
                  </div>

                <div class="menu-item-info-box">
                    <span class="menu-item-info-box-icon"><img src="https://th.bing.com/th/id/OIP.jE_t1X_G3Z4dhvAfzc6guwHaE8?pid=ImgDet&rs=1"></img></span>

                    <div class="menu-item-info-box-content">
                      <span class="menu-item-info-box-text">Donut</span>
                      <span class="menu-item-info-box-detail">Coberto com chantilly</span>
                      <span class="menu-item-info-box-price">R$ 10,00</span>
                    </div>
                  </div>

                <div class="menu-item-info-box">
                    <span class="menu-item-info-box-icon"><img src="https://th.bing.com/th/id/OIP.jE_t1X_G3Z4dhvAfzc6guwHaE8?pid=ImgDet&rs=1"></img></span>

                    <div class="menu-item-info-box-content">
                      <span class="menu-item-info-box-text">Croissant</span>
                      <span class="menu-item-info-box-detail">Recheado com queijo e presunto</span>
                      <span class="menu-item-info-box-price">R$ 10,00</span>
                    </div>
                  </div>


            </div>
            </div>
        );
    }
}

export default Menu;