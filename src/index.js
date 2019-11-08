import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/fn/object/assign';
import homePuchase from './components/housePurchase'
import playerInfo from './components/playerInfo'
import Houses from './components/houses'

import * as serviceWorker from './serviceWorker';


class App extends React.Component {
    render() {
        return(
         <div class="row general">
            <playerInfo/>
            <Houses/>
            <homePurchase/>
        </div>
        );
    }
  }
  
  
  ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
