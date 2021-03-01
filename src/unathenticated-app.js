import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from 'screens/login';
import SignupScreen from 'screens/signup';
import { routes } from 'utils/constants';

const AuthenticatedApp = () => {
  return (
    <Switch>
      <Route path={routes.login}>
        <LoginScreen />
      </Route>
      <Route path={routes.signup}>
        <SignupScreen />
      </Route>
      <Route path={routes.all}>
        <Redirect to={routes.login} />
      </Route>
    </Switch>
  );
};

export default AuthenticatedApp;
