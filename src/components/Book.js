import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const handleClick = (bookDelete) => {
    dispatch(delBook(bookDelete));
  };

  return (
    <div className="book-item">
      {Object.keys(books).map((book) => (
        <div key={book}>
          <p>{books[book][0].category}</p>
          <p>{books[book][0].title}</p>
          <p>{books[book][0].author}</p>
          <button type="button" onClick={() => handleClick(book)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Book;
