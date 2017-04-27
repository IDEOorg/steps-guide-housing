import { GENERATE_OPTIONS, SELECT_OPTION } from './constants';
import cardsData from '../../store/data/cards';

const selectedOptions = (state = {}, action) => {
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
      if(distinctOptionIds.length === 0) {
        console.log('empty array');
        distinctOptionIds = ["1", "2", "3", "4"];
      }
      return {
        currentOption: distinctOptionIds[0],
        options: distinctOptionIds
      }
    }
    case SELECT_OPTION: {
      return {
        ...state,
        currentOption: action.id
      }
    }
    default:
      return state;
  }
};

export default selectedOptions;
