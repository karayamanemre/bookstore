import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getBook } from './redux/books/books';// eslint-disable-next-line
import Books from './Components/BookList';// eslint-disable-next-line
import Categories from './Components/Categories';// eslint-disable-next-line
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());// eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
