import { React, useState } from 'react';
import { addBook } from '../redux/books/books';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export default function AddForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: uuidv4(),
        title,
        author,
      }),
    );
    setTitle('');
    setAuthor('');
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };
  return (
    <div className="add-book">
      <h3>Add New Book</h3>
      <form onSubmit={formHandler}>
        <input placeholder="Title" value={title} onChange={titleHandler} />
        <input placeholder="Author" value={author} onChange={authorHandler} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
