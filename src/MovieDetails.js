// MovieDetails.js
import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const MovieDetails = ({ match, movies }) => {
  const { id } = match.params;
  const movie = movies.find((m) => m.id === parseInt(id, 10));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <Movie movie={movie} />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
