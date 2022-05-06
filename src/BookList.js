import React from 'react';
import Book from './Book';

export default function BookList({ books }) {
  return (
    <div className='book-list'>
      {books.map((book, i) => 
        <Book key={`${book.title}-${i}`}
          book={book}
        />
      )}

    </div>
  );
}
