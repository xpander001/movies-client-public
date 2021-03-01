import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MoviesScreen from 'screens/movies';
import MovieDetailScreen from 'screens/movie-detail';
import { routes } from 'utils/constants';

const AuthenticatedApp = ({ user, logout }) => {
  return (
    <Switch>
      <Route path={routes.home} exact>
        <MoviesScreen user={user} logout={logout} />
      </Route>
      <Route path={routes.movieDetail}>
        <MovieDetailScreen user={user} logout={logout} />
      </Route>
      <Route path={routes.all}>
        <Redirect to={routes.home} />
      </Route>
    </Switch>
  );
};

export default AuthenticatedApp;
