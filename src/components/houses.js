require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class Houses extends React.Component {

  render() {
    return (
            <div class="col-md-6 p-0">
            <div class="row">
                <div class="col-md-2 p-0">
                    <div class="options"></div>
                    <div class="Stats">Stat</div>
                </div>
                <div class="col-md-8 description"><h3>There are now mansión for your money</h3></div>
                <div class="col-md-2 p-0">
                    <div class="info"></div>
                    <div class="legacy"></div>
                </div>
            </div>

            <div class="row items">
                <div class="item_plot">
                    <ul>
                        <li><img src="imagenes/plot.png" alt=""/></li>
                        <li><img src="imagenes/plot.png" alt=""/></li>
                        <li><img src="imagenes/plot.png" alt=""/></li>
                        <li><img src="imagenes/plot.png" alt=""/></li>
                        <li><img src="imagenes/plot.png" alt=""/></li>
                        <li><img src="imagenes/plot.png" alt=""/></li>
                        <li><img src="imagenes/plot.png" alt=""/></li>
                    </ul>
                </div>

                <div class="item_house">
                    <ul>
                        <li><img src="imagenes/house1.png" alt=""/></li>
                        <li><img src="imagenes/house1.png" alt=""/></li>
                        <li><img src="imagenes/house1.png" alt=""/></li>
                        <li><img src="imagenes/house1.png" alt=""/></li>
                        <li><img src="imagenes/house1.png" alt=""/></li>
                        <li><img src="imagenes/house1.png" alt=""/></li>
                        <li><img src="imagenes/house1.png" alt=""/></li>
                    </ul>
                </div>
                <div class="item_house2">
                    <ul>
                        <li><img src="imagenes/house2.png" alt=""/></li>
                        <li><img src="imagenes/house2.png" alt=""/></li>
                        <li><img src="imagenes/house2.png" alt=""/></li>
                        <li><img src="imagenes/house2.png" alt=""/></li>
                        <li><img src="imagenes/house2.png" alt=""/></li>
                        <li><img src="imagenes/house2.png" alt=""/></li>
                        <li><img src="imagenes/house2.png" alt=""/></li>
                    </ul>
                </div>
                <div class="item_boogaloo">
                    <ul>
                        <li><img src="imagenes/boogaloo.png" alt=""/></li>
                        <li><img src="imagenes/boogaloo.png" alt=""/></li>
                        <li><img src="imagenes/boogaloo.png" alt=""/></li>
                        <li><img src="imagenes/boogaloo.png" alt=""/></li>
                        <li><img src="imagenes/boogaloo.png" alt=""/></li>
                        <li><img src="imagenes/boogaloo.png" alt=""/></li>
                        <li><img src="imagenes/boogaloo.png" alt=""/></li>
                    </ul>
                </div>
                <div class="item_condo">
                    <ul>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                        <li><img src="imagenes/condo.png" alt=""/></li>
                    </ul>
                </div>
                <div class="item_building">
                    <ul>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                        <li><img src="imagenes/building.png" alt=""/></li>
                    </ul>
                </div>
                <div class="item_mansion">
                    <ul>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                        <li><img src="imagenes/mansion.png" alt=""/></li>
                    </ul>
                </div>
            </div>
            </div>

            );
        }
    }

export default Houses;