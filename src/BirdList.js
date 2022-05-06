import React from 'react';
import Bird from './Bird.js';

export default function BirdList({ birds }) {
  
  return (
    <div className='bird-list'>
      {birds.map((bird, i) => 
        <Bird key={`${bird.species}-${i}`} 
          bird={bird}
        />)}
    </div>
  );
}
