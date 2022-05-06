import React from 'react';
import Planet from './Planet';

export default function PlanetList({ planets, i }) {
  return (
    <div className='planet-list'>
      {planets.map((planet) => 
        <Planet key={`${planet.planet}-${i}`}
          planet={planet}
        />
      )}
    </div>
  );
}
