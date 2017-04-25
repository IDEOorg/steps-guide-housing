import { SELECT_CARD } from './constants';

export function selectCard(id) {
  return {
    type: SELECT_CARD,
    id
  };
}
