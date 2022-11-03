import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book-item">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Delete</button>
    </div>
  );
};

export default Book;
