import React from 'react';
import AuthenticatedApp from 'authenticated-app';
import UnauthenticatedApp from 'unathenticated-app';
import { useAuth } from 'context/auth-context';

const App = () => {
  const { user, loaded } = useAuth();

  if (!loaded) {
    return <p>loading app</p>;
  }

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
