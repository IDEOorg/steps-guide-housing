import { GENERATE_OPTIONS, SELECT_OPTION, MARK_TRIED, TOGGLE_OPTION } from './constants';

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
