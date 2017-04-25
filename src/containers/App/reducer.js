import { CHANGE_PAGE } from './constants';

const nav = (state = [], action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return 'options';
    default:
      return state;
  }
};

export default nav;
