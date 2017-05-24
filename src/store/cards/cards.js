export const SELECT_CARD = 'SELECT_CARD';
export const SELECT_CHOICE = 'SELECT_CHOICE';

export function selectCard(id) {
  return {
    type: SELECT_CARD,
    id
  };
}

export function selectChoice(cardId, choiceId) {
  return {
    type: SELECT_CHOICE,
    cardId,
    choiceId
  };
}

const cards = (state = [], action) => {
  switch (action.type) {
    case SELECT_CARD:
      alert('reducer');
      alert(action.id);
      return state.map((c) => {
        if (c.id !== action.id) {
          return c;
        }

        return Object.assign({}, c, {
          selected: !c.selected
        });
      });
    case SELECT_CHOICE:
      return state.map((c) => {
        if (c.id !== action.cardId) {
          return c;
        }

        return Object.assign({}, c, {
          selectedChoice: action.choiceId
        });
      });
    default:
      return state;
  }
};

export default cards;
