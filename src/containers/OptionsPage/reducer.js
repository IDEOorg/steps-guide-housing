import { GENERATE_OPTIONS, SELECT_OPTION } from './constants';
import cardsData from '../../store/data/cards';

const selectedOptions = (state = [], action) => {
  switch (action.type) {
    case GENERATE_OPTIONS: {
      let cardIds = action.cardIds;
      let distinctOptionIds = [];
      for(let i = 0; i < cardIds.length; i++) {
        let optionIds = cardsData[cardIds[i]].options;
        for(let j = 0; j < optionIds.length; j++) {
          let optionId = optionIds[j];
          if(!distinctOptionIds.includes(optionId)) {
            distinctOptionIds.push(optionId);
          }
        }
      }
      let outcome = distinctOptionIds.map((id, i) => {
        let option = {
          id,
          selected: false
        };
        if(i === 0) {
          return {
            ...option,
            selected: true
          };
        }
        return option;
      });
      return outcome;
    }
    case SELECT_OPTION: {

      return state.map((option) => {
        if(option.id === action.id) {
          return {
            ...option,
            selected: true
          }
        }
        return {
          ...option,
          selected: false
        };
      });
    }
    default:
      return state;
  }
};

export default selectedOptions;
