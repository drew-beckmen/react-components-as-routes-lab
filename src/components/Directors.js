import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const getMovies = (arr) => {
    const toBeReturned = arr.map(movie => <li>{movie}</li>)
    return <ul>{toBeReturned}</ul>
  }

  const listDirectors = directors.map(director => {
    return (
      <div>
        <h2>Name: {director.name}</h2>
        <div>Movies: {getMovies(director.movies)}</div>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {listDirectors}
    </div>
  );
}

export default Directors
