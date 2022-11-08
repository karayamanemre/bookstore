const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Jzfhn2xi1gRn7mIc6ML5';

const SHOW_BOOKS = 'bookstore/books/SHOW_BOOKS';

export const showBooks = (data) => ({
  type: SHOW_BOOKS,
  data,
});

export const getBook = () => (dispatch) => {
  fetch(`${apiUrl}/books/`)
    .then((response) => response.json())
    .then((json) => dispatch(showBooks(json)));
};

export const addBook = (id, title, author, category = 'Other') => (dispatch) => {
  fetch(`${apiUrl}/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  }).then(() => dispatch(getBook()));
};

export const delBook = (id) => (dispatch) => {
  fetch(`${apiUrl}/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).then(() => dispatch(getBook()));
};

export default function booksReducer(state = {}, action) {
  switch (action.type) {
    case SHOW_BOOKS:
      return action.data;
    default:
      return state;
  }
}
