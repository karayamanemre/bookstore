import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delBook } from '../redux/books/books';

export default function Book() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(delBook(id));
  };

  return (
    <>
      {books.map((book) => (
        <div className="book-item" key={book.id}>
          <p>{book.category}</p>
          <p>{book.title}</p>
          <p>{book.author}</p>
          <div>
            <button type="button" onClick={() => deleteHandler(book.id)}>Delete Book</button>
          </div>
        </div>
      ))}
    </>
  );
}
