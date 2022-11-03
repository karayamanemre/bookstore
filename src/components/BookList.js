import React from 'react';
import Book from './Book';

export default function BookList() {
  const data = [
    {
      title: 'The Dark Tower',
      author: 'Stephen King',
    },
  ];
  return data.map((book) => (
    <Book key={1} title={book.title} author={book.author} />
  ));
}
