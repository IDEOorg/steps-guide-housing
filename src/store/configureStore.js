import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

const middleware = routerMiddleware(browserHistory);
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(middleware)
  );
}
