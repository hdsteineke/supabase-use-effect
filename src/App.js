import { useEffect, useState } from 'react';
import { fetchAllBirds } from './services/fetch-utils';
import { fetchAllBooks } from './services/fetch-utils';
import { fetchAllPlants } from './services/fetch-utils';
import { fetchAllPlanets } from './services/fetch-utils';
import BirdList from './BirdList';
import BookList from './BookList';
import PlantList from './PlantList';
import PlanetList from './PlanetList';
import './App.css';

function App() {
  const [birds, setBirds] = useState([]);
  const [books, setBooks] = useState([]);
  const [plants, setPlants] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(async () => {
    const birdResponse = await fetchAllBirds();
    const bookResponse = await fetchAllBooks();
    const plantResponse = await fetchAllPlants();
    const planetResponse = await fetchAllPlanets();

    setBirds(birdResponse);
    setBooks(bookResponse);
    setPlants(plantResponse);
    setPlanets(planetResponse);
    setIsLoading(false);
  }, []);


  return (

    <div className="App">
      { 
        isLoading ? <h1>Loading...</h1> : 
          <div>
            <h1>Lists of Things</h1>
            <BirdList 
              birds={birds}
            />
            <BookList
              books={books}
            />
            <PlantList
              plants={plants}
            />
            <PlanetList
              planets={planets}
            />
          </div>
      }
    </div>
  );
}

export default App;
