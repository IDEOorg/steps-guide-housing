import { GENERATE_OPTIONS } from './constants';
import cardsData from '../../store/data/cards';

const selectedOptions = (state = [], action) => {
  switch (action.type) {
    case GENERATE_OPTIONS: {
      let cardIds = action.cardIds;
      let optionIds = [];
      for(let i = 0; i < cardIds.length; i++) {
        let options = cardsData[cardIds[i]].options;
        for(let j = 0; j < options.length; j++) {
          let optionId = options[j];
          if(!optionIds.includes(optionId)) {
            optionIds.push(optionId);
          }
        }
      }
      return optionIds;
    }
    default:
      return state;
  }
};

export default selectedOptions;
