import { combineReducers } from 'redux';
import cards from '../../containers/CardsPage/reducer';

const rootReducer = combineReducers({
  cards
});

export default rootReducer;
