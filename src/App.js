import { useEffect, useState } from 'react';
import { fetchAllBirds } from './services/fetch-utils';
import BirdList from './BirdList';
import './App.css';

function App() {
  const [birds, setBirds] = useState([]);

  useEffect(async () => {
    const birdResponse = await fetchAllBirds();

    setBirds(birdResponse);
  }, []);


  return (
    <div className="App">
      <div>
        <BirdList 
          birds={birds}
        />
      </div>
    </div>
  );
}

export default App;
