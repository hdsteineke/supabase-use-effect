import React from 'react';

export default function Planet({ planet }) {
  return (
    <div className='planet'>
      <h3>{planet.planet}</h3>
      <img src={planet.image}/>
      <p><b>Color: </b>{planet.color}</p>
      <p><b>Traits: </b>{planet.traits}</p>
    </div>
  );
}
