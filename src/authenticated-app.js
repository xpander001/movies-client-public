import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MoviesScreen from 'screens/movies';
import MovieDetailScreen from 'screens/movie-detail';
import { routes } from 'utils/constants';

const AuthenticatedApp = () => {
  return (
    <Switch>
      <Route path={routes.home} exact>
        <MoviesScreen />
      </Route>
      <Route path={routes.movieDetail}>
        <MovieDetailScreen />
      </Route>
      <Route path={routes.all}>
        <Redirect to={routes.home} />
      </Route>
    </Switch>
  );
};

export default AuthenticatedApp;
