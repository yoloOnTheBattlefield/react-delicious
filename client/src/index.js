import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers/index';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

import { Provider } from 'react-redux';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(promiseMiddleware, thunk, historyMiddleware);

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  devtools,
  middleware
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
