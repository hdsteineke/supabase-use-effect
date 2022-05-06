import React from 'react';

export default function Plant({ plant }) {
  return (
    <div className='plant'>
      <h3>{plant.name}</h3>
      <img src={plant.image}/>
      <p><b>Season: </b>{plant.seasons}</p>
      <p><b>Native: </b>{plant.is_pnw_native ? 'true' : 'false'}</p>
    </div>
  );
}
