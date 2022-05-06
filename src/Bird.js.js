import React from 'react';

export default function Bird({ bird }) {
  return (
    <div className="bird">
  
      <h3>{bird.species}</h3>
      <img src={bird.image}/>
      <p><b>Color:</b> {bird.color}</p>
      <p><b>Habitat:</b> {bird.habitat.map((location) => ( 
        <p key={location}>{location}</p>))}</p>
      <p><b>Wingspan(in.):</b> {bird.wingspan}</p>
    </div>
  );
}
