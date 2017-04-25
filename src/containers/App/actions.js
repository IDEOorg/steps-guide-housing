import { CHANGE_NAV } from './constants';

export function changeNav(page) {
  return {
    type: CHANGE_NAV,
    page
  };
}
