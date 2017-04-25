import { combineReducers } from 'redux';
import cards from '../../containers/CardsPage/reducer';
import selectedOptions from '../../containers/OptionsPage/reducer';

const rootReducer = combineReducers({
  cards,
  selectedOptions
});

export default rootReducer;
