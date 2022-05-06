import React from 'react';

export default function Bird({ bird }) {
  return (
    <div className="bird">
      Bird.js
      <h3>{bird.species}</h3>
      <p>{bird.color}</p>
      <p>{bird.habitat}</p>
      <p>{bird.wingspan}</p>
    </div>
  );
}
