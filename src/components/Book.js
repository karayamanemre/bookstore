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
      <div className="book-container">
        {books.map((book) => (
          <div className="book-item" key={book.id}>
            <div className="book-left">
              <div className="book-info">
                <p className="category">{book.category}</p>
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
              </div>
              <div className="buttons">
                <button type="button" className="btn">Comment</button>
                <button type="button" className="btn" onClick={() => deleteHandler(book.id)}>Delete Book</button>
                <button type="button" className="btn">Edit</button>
              </div>
            </div>
            <div className="book-right">
              <div className="circle-container">
                <div className="circle" />
                <div className="circle-text">
                  <span className="percentage">75%</span>
                  <span className="completed-text">Completed</span>
                </div>
              </div>
              <div className="chapter-container">
                <p className="current-chapter">CURRENT CHAPTER</p>
                <p className="chapter-no">Chapter 17</p>
                <button type="button" className="chapter-button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
