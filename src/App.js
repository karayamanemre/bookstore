import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';
import { getBook } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getBook()));
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
