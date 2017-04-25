import { SELECT_CARD } from './constants';
import { GENERATE_OPTIONS } from '../OptionsPage/constants';

export function selectCard(id) {
  return {
    type: SELECT_CARD,
    id
  };
}

export function generateOptions(ids) {
  return {
    type: GENERATE_OPTIONS,
    cardIds: ids
  };
}
