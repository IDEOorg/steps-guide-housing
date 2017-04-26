import { combineReducers } from 'redux';
import cards from '../../containers/CardsSection/reducer';
import selectedOptions from '../../containers/OptionsPage/reducer';
import nav from '../../containers/App/reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  cards,
  selectedOptions,
  nav,
  routing: routerReducer
});

export default rootReducer;
