import React from 'react';
import { delBook } from '../redux/books/books';
import { useDispatch, useSelector } from 'react-redux';

const Book = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(delBook(id));
  };

  return (
    <div className="book-item">
      {books.map((book) => (
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <button type="button" onClick={() => deleteHandler(book.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Book;
