import { MAIN_PAGE } from '../containers/App/constants';
import cardsData from './data/cards';

const initialState = {
  cards: Object.keys(cardsData).map((id) => {
    return {
      id,
      text: cardsData[id].text,
      selected: false
    };
  }),
  selectedOptions: {
    currentOption: null,
    options: []
  },
  nav: MAIN_PAGE
};

export default initialState;
