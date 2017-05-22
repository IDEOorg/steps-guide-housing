import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initialState from './store/initialState';
import configureStore from './store/configureStore';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/App';
import MainPage from './containers/MainPage';
import OptionsPage from './containers/OptionsPage';
import '../vendors/sanitize.min.css';
import './index.less';

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={MainPage} />
        <Route path="/options" component={OptionsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
