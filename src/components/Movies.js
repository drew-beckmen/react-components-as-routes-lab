import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)

  const listGenres = (arr) => {
    const toBeReturned = arr.map(genre => {
      return (
        <li>{genre}</li>
      )
    })
    return <ul>{toBeReturned}</ul>
  }

  const listMovies = movies.map(movie => {
    return (
      <div>
        <h2>Title: {movie.title}</h2>
        <h3>Time: {movie.time}</h3>
        <p>Genres:{listGenres(movie.genres)}</p>
      </div>
    )
  })

  
  return (
    <div>
        <h1>Movies Page</h1>
        <p>{listMovies}</p>
    </div>
  );
};

export default Movies;
