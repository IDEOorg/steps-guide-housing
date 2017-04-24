import initialState from '../initialState';

const cards = (state = initialState.cards, action) => {
  switch (action.type) {
    case 'SELECT_CARD':
      return state.map((c) => {
        if (c.id !== action.id) {
          return state;
        }

        return Object.assign({}, state, {
          selected: !state.selected
        });
      });
    default:
      return state;
  }
};

console.log(initialState);
export default cards;
