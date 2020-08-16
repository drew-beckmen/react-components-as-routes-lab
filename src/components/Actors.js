import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const listMovies = (arr) => {
    console.log(arr)
    const toBeReturned = arr.map(movie => <li>{movie}</li>)
    return <ul>{toBeReturned}</ul>
  }

  const listActors = actors.map(actor => {
    return (
      <div>
        <h2>Name: {actor.name}</h2>
        <p>Movies: {listMovies(actor.movies)}</p>
      </div>
      
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {listActors}
    </div>
  );
};

export default Actors;
