import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes} from 'react-router-dom';
import { getBook } from './redux/books/books';
import Books from './Components/BookList';
import Categories from './Components/Categories';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
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
