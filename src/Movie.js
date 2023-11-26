// Movie.js
import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div>
        {/* Embed video here using movie.trailerLink */}
        <iframe width="560" height="315" src={movie.trailerLink} title={movie.title} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Movie;
