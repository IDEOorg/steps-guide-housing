import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initialState from './store/initialState';
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Routes from './routes';
import '../vendors/sanitize.min.css';
import './index.less';

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('app')
);
