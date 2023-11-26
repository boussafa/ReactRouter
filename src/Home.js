// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieDetails';

const Home = ({ movies }) => {
  return (
    <div>
      <h1>Movie App</h1>
      <div>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
