import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initialState from './store/initialState';
import configureStore from './store/configureStore';
import App from './containers/App';
import '../vendors/sanitize.min.css';
import './index.less';

const store = configureStore(initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
