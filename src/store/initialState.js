import { MAIN_PAGE } from '../containers/App/constants';

const initialState = {
  cards: [
    {
      id: 1,
      text: "I've missed rent payments in the past",
      selected: false
    },
    {
      id: 2,
      text: "I don't have any kind of savings",
      selected: false
    },
    {
      id: 3,
      text: "I've missed payments on other utilities",
      selected: false
    },
    {
      id: 4,
      text: "I won't be able to pay my rent in the future",
      selected: false
    },
    {
      id: 5,
      text: "I've gotten eviction notices",
      selected: false
    },
    {
      id: 6,
      text: "I qualify for public benefits",
      selected: false
    },
  ],
  selectedOptions: [
  ],
  nav: MAIN_PAGE
};

export default initialState;
