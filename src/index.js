import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {enableBatching} from 'redux-batched-actions';

import reducer from './Reducers';
import App from './Components/App/App'
import GameBoard from './Components/GameBoard/GameBoard'

import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(enableBatching(reducer),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const rootById = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
    <GameBoard>
    <App />
    </GameBoard>
    </Provider>
    </AppContainer>,
    rootById
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
