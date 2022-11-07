import { v4 as uuidv4 } from 'uuid';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DEL_BOOK = 'bookstore/books/DEL_BOOK';
const INITIAL_STATE = [
  {
    title: 'The Dark Tower',
    author: 'Stephen King',
    id: uuidv4(),
  },
  {
    title: 'Billy Summers',
    author: 'Stephen King',
    id: uuidv4(),
  },
];

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function delBook(id) {
  return { type: DEL_BOOK, payload: id };
}

export default function booksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.payload);
    case DEL_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
}
