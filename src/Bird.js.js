import React from 'react';

export default function Bird({ bird }) {
  return (
    <div className="bird">
  
      <h3>{bird.species}</h3>
      <p>`<b>Color:</b> {bird.color}</p>
      <p><b>Habitat:</b> {bird.habitat}</p>
      <p><b>Wingspan(in.):</b> {bird.wingspan}</p>
    </div>
  );
}
