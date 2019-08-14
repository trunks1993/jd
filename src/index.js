import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/router';
import appStore from '@/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import '@/styles/index.scss';
import '@/mock/index';

const store = createStore(appStore, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
