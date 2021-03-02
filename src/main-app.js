import React from 'react';
import { useAuth } from 'context/auth-context';

const AuthenticatedApp = React.lazy(() => import('authenticated-app'));
const UnauthenticatedApp = React.lazy(() => import('unathenticated-app'));

const NotLoaded = () => <p>loading app</p>;

const App = () => {
  const { user, loaded } = useAuth();

  if (!loaded) {
    return <NotLoaded />;
  }

  return (
    <React.Suspense fallback={<NotLoaded />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
};

export default App;
