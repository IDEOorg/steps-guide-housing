import { SELECT_CARD } from './constants';

const cards = (state = [], action) => {
  switch (action.type) {
    case SELECT_CARD:
      return state.map((c) => {
        if (c.id !== action.id) {
          return c;
        }

        return Object.assign({}, c, {
          selected: !c.selected
        });
      });
    default:
      return state;
  }
};

export default cards;
