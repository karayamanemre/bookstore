import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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
      <div className="form-container">
        <h2>ADD NEW BOOK</h2>
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
          <select name="category" id="category" onChange={inputHandler}>
          <option value="">Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comic Book">Comic Book</option>
        </select>
          <button className="form-btn" type="submit">ADD BOOK</button>
        </form>
      </div>
    </>
  );
}
