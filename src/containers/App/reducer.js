import { CHANGE_NAV } from './constants';

const nav = (state = [], action) => {
  switch (action.type) {
    case CHANGE_NAV:
      return action.page;
    default:
      return state;
  }
};

export default nav;
