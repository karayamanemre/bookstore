import React from 'react';
import Book from './Book';
import AddForm from './AddForm';

export default function BookList() {
  const data = [
    {
      title: 'The Dark Tower',
      author: 'Stephen King',
    },
  ];
  return (
    <div>
      {data &&
        data.map((book) => (
          <Book key={1} title={book.title} author={book.author} />
        ))}
      <AddForm />
    </div>
  );
}
