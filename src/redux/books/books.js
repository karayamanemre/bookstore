const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DEL_BOOK = 'bookstore/books/DEL_BOOK';
const INITIAL_STATE = [];

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function delBook(id) {
  return { type: DEL_BOOK, payload: id };
}

export default function booksReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.payload);
    case DEL_BOOK:
      return {
        ...state,
        payload: state.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
}
