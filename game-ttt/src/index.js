import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxWebsocket from 'react-redux-websocket';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'

import App from './App';
import * as serviceWorker from './serviceWorker';

import * as Secrets from './secrets'

const socket = new WebSocket(`wss://connect.websocket.in/v2/${Secrets.wsChannelId}?token=${Secrets.token}`);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxWebsocket(socket))))
const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
