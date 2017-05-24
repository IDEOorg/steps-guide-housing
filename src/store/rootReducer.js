import { combineReducers } from 'redux';
import cards from './cards/cards';
import selectedOptions from './selectedOptions/selectedOptions';
import nav from './nav/nav';

const rootReducer = combineReducers({
  cards,
  selectedOptions,
  nav,
});

export default rootReducer;
