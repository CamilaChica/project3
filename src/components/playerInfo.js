require('normalize.css/normalize.css');
require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class PlayerInfo extends React.Component {

  render() {
    return (
    <div class="col-md-3 p-0 back_coin">
        <div class="namePlayer">
            <p>Name Player</p>
            <h3>1,123 Coins</h3>
            <h5>Per seconds 120</h5>
        </div>
        <div class="coin">
            <img src="imagenes/dollar.png" alt=""/>
        </div>
        <div class="level">
            <h3>Level 1</h3>
            <img src="imagenes/medal.png" alt=""/>
        </div>
    </div>
    );
  }
}

export default PlayerInfo;