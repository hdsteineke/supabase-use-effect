import React from 'react';
import Plant from './Plant';

export default function PlantList({ plants, i }) {
  return (
    <div className='plant-list'>
      {plants.map((plant) => 
        <Plant key={`${plant.name}-${i}`}
          plant={plant}
        />
      )}
    </div>
  );
}
