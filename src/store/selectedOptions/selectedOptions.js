import cardsData from '../../data/cards';

export const GENERATE_OPTIONS = 'GENERATE_OPTIONS';
export const SELECT_OPTION = 'SELECT_OPTION';
export const MARK_TRIED = 'MARK_TRIED';
export const TOGGLE_OPTION = 'TOGGLE_OPTION';

export function generateOptions(cards) {
  return {
    type: GENERATE_OPTIONS,
    cards
  };
}

export function selectOption(id) {
  return {
    type: SELECT_OPTION,
    id
  };
}

export function markTried(id) {
  return {
    type: MARK_TRIED,
    id
  };
}

export function toggleOption(id) {
  return {
    type: TOGGLE_OPTION,
    id
  };
}

function getDistinctOptionsFromCards(cards) {
  let distinctOptionIds = [];
  for(let i = 0; i < cards.length; i++) {
    let cardId = cards[i].id;
    let selectedChoice = cards[i].selectedChoice;
    let optionIds = null;
    console.log(cards);
    console.log(selectedChoice);
    if(selectedChoice) {
      optionIds = cardsData[cardId].choices[selectedChoice].options;
    }
    else {
      optionIds = cardsData[cardId].options;
    }
    console.log(optionIds);
    for(let j = 0; j < optionIds.length; j++) {
      let optionId = optionIds[j];
      if(!distinctOptionIds.includes(optionId)) {
        distinctOptionIds.push(optionId);
      }
    }
  }
  return distinctOptionIds;
}
function cardsContainId(cards, id) {
  for(let i = 0; i < cards.length; i++) {
    if(cards[i].id === id) {
      return true;
    }
  }
  return false;
}
const selectedOptions = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_OPTIONS: {
      let cards = action.cards;
      let distinctOptionIds = [];
      if(cardsContainId(cards, "5") && cardsContainId(cards, "6")) {
        distinctOptionIds = ["9"];
      }
      else if(cardsContainId(cards, "1") && cardsContainId(cards, "6")) {
        distinctOptionIds = ["6", "7", "8", "3", "4"];
      }
      else if(cardsContainId(cards, "1") && cardsContainId(cards, "5")) {
        distinctOptionIds = ["4"];
      }
      else if(cardsContainId(cards, "1")) {
        distinctOptionIds = getDistinctOptionsFromCards(["1"]);
      }
      else if(cardsContainId(cards, "5")) {
        distinctOptionIds = getDistinctOptionsFromCards(["5"]);
      }
      else if(cardsContainId(cards, "6")) {
        distinctOptionIds = getDistinctOptionsFromCards(["6"]);
      }
      else {
        distinctOptionIds = getDistinctOptionsFromCards(cards);
        if(distinctOptionIds.length === 0) {
          distinctOptionIds = ["1", "2", "3", "4"];
        }
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
