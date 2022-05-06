import React from 'react';
import Bird from './Bird.js';

export default function BirdList({ birds }) {
  const [species, setSpecies] = ('');
  const [color, setColor] = ('');
  const [habitat, setHabitat] = (['']);
  const [wingspan, setWingSpan] = ('0');
  
  return (
    <div>BirdList
      {birds.map((bird, i) => 
        <Bird key={`${bird.species}-${i}`} 
          bird ={{
            species: species,
            color: color,
            habitat: habitat,
            wingspan: wingspan
          }}
        />)}
    </div>
  );
}
