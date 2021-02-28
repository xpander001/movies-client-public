import React, { useEffect } from 'react';
import AuthenticatedApp from 'authenticated-app';
import UnauthenticatedApp from 'unathenticated-app';
import {
  signup as authSignup,
  login as authLogin,
  getToken,
  me as authMe,
} from 'utils/auth-utils';
import useApiCall from 'hooks/use-api-call';

const getUser = async () => {
  let user = null;

  const token = await getToken();
  if (token) {
    const userData = await authMe(token);
    user = userData;
  }

  return user;
};

const App = () => {
  const { run, data: user, loaded, setData: setUser } = useApiCall();

  useEffect(() => {
    run(getUser());
  }, [run]);

  const signUp = (name, email, password) => {
    authSignup(name, email, password).then((user) => setUser(user));
  };

  const login = (email, password) => {
    authLogin(email, password).then((user) => setUser(user));
  };

  if (!loaded) {
    return <p>loading</p>;
  }

  return user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp signUp={signUp} login={login} />
  );
};

export default App;
