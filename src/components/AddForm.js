import React from 'react';

export default function AddForm() {
  return (
    <div className="add-book">
      <h3>Add New Book</h3>
      <form>
        <input placeholder="Title" />
        <input placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
