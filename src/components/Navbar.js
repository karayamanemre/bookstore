import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <ul className="nav-links">
        <li>
          <h1>Bookstore CMS</h1>
        </li>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <span className="material-symbols-rounded user-icon">
        account_circle
      </span>
    </header>
  );
}
