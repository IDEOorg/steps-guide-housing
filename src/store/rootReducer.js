import { combineReducers } from 'redux';
import cards from './reducers/cards';

const rootReducer = combineReducers({
  cards
});

export default rootReducer;
