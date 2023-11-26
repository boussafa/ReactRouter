// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';

const App = () => {
  // Sample movie data
  const movies = [
    {
      id: 1,
      title: 'Movie Title 1',
      description: 'Description for Movie 1',
      trailerLink: 'embed-link-1',
    },
    {
      id: 2,
      title: 'Movie Title 2',
      description: 'Description for Movie 2',
      trailerLink: 'embed-link-2',
    },
    // Add more movies as needed
  ];

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home movies={movies} />} />
        <Route path="/movie/:id" render={(props) => <MovieDetails {...props} movies={movies} />} />
      </Switch>
    </Router>
  );
};

export default App;

