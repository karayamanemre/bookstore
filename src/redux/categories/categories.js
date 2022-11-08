const CHECK = 'bookstore/categories/CHECK';
const INITIAL_STATE = [];

export function checkStatus() {
  return { type: CHECK };
}

export default function categoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
}
