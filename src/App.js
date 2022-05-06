import { useEffect, useState } from 'react';
import { fetchAllBirds } from './services/fetch-utils';
import { fetchAllBooks } from './services/fetch-utils';
import BirdList from './BirdList';
import BookList from './BookList';
import './App.css';

function App() {
  const [birds, setBirds] = useState([]);
  const [books, setBooks] = useState([]);
  
  useEffect(async () => {
    const birdResponse = await fetchAllBirds();
    const bookResponse = await fetchAllBooks();

    setBirds(birdResponse);
    setBooks(bookResponse);
  }, []);


  return (
    <div className="App">
      <div>
        <BirdList 
          birds={birds}
        />
        <BookList
          books={books}
        />
      </div>
    </div>
  );
}

export default App;
