import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(formData));
    setFormData({
      id: uuidv4(),
      title: '',
      author: '',
      category: '',
    });
  };
  const inputHandler = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Book title"
          value={formData.title}
          name="title"
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Book author"
          value={formData.author}
          name="author"
          onChange={inputHandler}
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
