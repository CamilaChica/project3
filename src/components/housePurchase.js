require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class Container extends React.Component {

  render() {
    return (
    <div class="col-md-3 p-0">
        <div class="row">
            <div class="items_plus">
                <ul>
                    <li><img src="imagenes/plus.png" alt=""/></li>
                    <li><img src="imagenes/plus2.png" alt=""/></li>
                    <li><img src="imagenes/plus3.png" alt=""/></li>
                    <li><img src="imagenes/plus4.png" alt=""/></li>
                    <li><img src="imagenes/plus5.png" alt=""/></li>
                    <li><img src="imagenes/plus6.png" alt=""/></li>
                    <li><img src="imagenes/plus7.png" alt=""/></li>
                    <li><img src="imagenes/plus8.png" alt=""/></li>
                    <li><img src="imagenes/plus.png" alt=""/></li>
                    <li><img src="imagenes/plus8.png" alt=""/></li>
                    <li><img src="imagenes/plus6.png" alt=""/></li>
                    <li><img src="imagenes/plus.png" alt=""/></li>
                    <li><img src="imagenes/plus5.png" alt=""/></li>
                    <li><img src="imagenes/plus3.png" alt=""/></li>
                    <li><img src="imagenes/plus.png" alt=""/></li>
                    <li><img src="imagenes/plus2.png" alt=""/></li>
                    <li><img src="imagenes/plus.png" alt=""/></li>
                    <li><img src="imagenes/plus4.png" alt=""/></li>
                </ul>
            </div>
        </div>
        <div class="sell">
            <p>Buy</p>
            <p>Sell</p>
            <p>1</p>
            <p>10</p>
        </div>
        <div class="items_count">
            <div class="item_house_cont">
                <img src="imagenes/plot.png" alt=""/>
                <div class="date_cont">
                    <h3>Plot</h3>
                    <img src="imagenes/dollar.png" alt=""/><p>324.345</p>
                </div>
                <h2>32</h2>
            </div>
            <div class="item_house_cont">
                <img src="imagenes/house1.png" alt=""/>
                <div class="date_cont">
                    <h3>House</h3>
                    <img src="imagenes/dollar.png" alt=""/><p>324.345</p>
                </div>
                <h2>32</h2>
            </div>
            <div class="item_house_cont">
                <img src="imagenes/house2.png" alt=""/>
                <div class="date_cont">
                    <h3>House</h3>
                    <img src="imagenes/dollar.png" alt=""/><p>324.345</p>
                </div>
                <h2>32</h2>
            </div>
            <div class="item_house_cont">
                <img src="imagenes/condo.png" alt=""/>
                <div class="date_cont">
                    <h3>Condo</h3>
                    <img src="imagenes/dollar.png" alt=""/><p>324.345</p>
                </div>
                <h2>32</h2>
            </div>
            <div class="item_house_cont">
                <img src="imagenes/building.png" alt=""/>
                <div class="date_cont">
                    <h3>Building</h3>
                    <img src="imagenes/dollar.png" alt=""/><p>324.345</p>
                </div>
                <h2>32</h2>
            </div>
            <div class="item_house_cont">
                <img src="imagenes/mansion.png" alt=""/>
                <div class="date_cont">
                    <h3>Mansion</h3>
                    <img src="imagenes/dollar.png" alt=""/><p>324.345</p>
                </div>
                <h2>32</h2>
            </div>
        </div>
      </div>  
    );
  }
}

export default Container;