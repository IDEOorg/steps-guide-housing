import { GENERATE_OPTIONS, SELECT_OPTION, MARK_TRIED, TOGGLE_OPTION } from './constants';
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
        distinctOptionIds = ["1", "2", "3", "4"];
      }
      let distinctOptions = distinctOptionIds.map((id) => {
        return {
          id,
          tried: false
        };
      });
      return {
        currentOption: distinctOptionIds[0],
        options: distinctOptions
      };
    }
    case SELECT_OPTION: {
      return {
        ...state,
        currentOption: action.id
      };
    }
    case MARK_TRIED: {
      let options = state.options.map((option) => {
        let tried = option.id === action.id ? true : option.tried;
        return {
          id: option.id,
          tried
        };
      });
      let currentOption = null;
      for(let i = 0; i < state.options.length; i++) {
        if(action.id === state.options[i].id) {
          if(i < state.options.length - 1) {
            currentOption = state.options[i + 1].id;
          }
        }
      }
      return {
        currentOption,
        options
      };
    }
    case TOGGLE_OPTION: {
      return {
        currentOption: action.id,
        options: state.options
      };
    }
    default:
      return state;
  }

};

export default selectedOptions;
