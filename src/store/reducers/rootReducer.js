import { combineReducers } from 'redux';
import cards from '../../containers/CardsSection/reducer';
import selectedOptions from '../../containers/OptionsPage/reducer';
import nav from '../../containers/App/reducer';

const rootReducer = combineReducers({
  cards,
  selectedOptions,
  nav
});

export default rootReducer;
