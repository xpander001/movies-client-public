import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MoviesScreen from 'screens/movies';
import MovieDetail from 'screens/movie-detail';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MoviesScreen />
      </Route>
      <Route path="/movies/:id">
        <MovieDetail />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
