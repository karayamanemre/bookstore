const CHECK = 'bookstore/categories/CHECK';
const INITIAL_STATE = [];

export default function categoriesReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CHECK:
      return 'Unde construction';
    default:
      return state;
  }
}

export function checkStatus() {
  return { type: CHECK };
}
