import { GENERATE_OPTIONS, SELECT_OPTION } from './constants';

export function generateOptions(ids) {
  return {
    type: GENERATE_OPTIONS,
    cardIds: ids
  };
}

export function selectOption(id) {
  return {
    type: SELECT_OPTION,
    id
  };
}
