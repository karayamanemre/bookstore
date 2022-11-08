import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export default function AddBook() {
  const [book, setBook] = useState({ title: '', author: '' });
  const { title, author } = book;
  const dispatch = useDispatch();

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(uuidv4(), title, author));
    setBook({
      title: '',
      author: '',
    });
  };

  const changeHandler = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-book">
      <h3>Add New Book</h3>
      <form onSubmit={formHandler}>
        <input placeholder="Title" name="title" onChange={changeHandler} />
        <input placeholder="Author" name="author" onChange={changeHandler} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
