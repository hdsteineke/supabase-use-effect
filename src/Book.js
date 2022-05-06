import React from 'react';

export default function Book({ book }) {
  return (
    <div className='book'>
      <h3>{book.title}</h3>
      <p><b>Genre:</b> {book.genre}</p>
      <p><b>Chapterbook:</b> {book.is_chapterbook}</p>
      <p><b>Copies sold:</b> {book.copies_sold}</p>
    </div>
  );
}
