import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import useApiCall from 'hooks/use-api-call';

import {
  login as authLogin,
  logout as authLogout,
  signup as authSignup,
  me as authMe,
  getToken,
} from 'utils/auth-utils';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

const getUser = async () => {
  let user = null;
  const token = await getToken();
  if (token) {
    const userData = await authMe(token);
    user = userData;
  }

  return user;
};

const AuthProvider = (props) => {
  const { run, data: user, loaded, loading, setData: setUser } = useApiCall();
  const [authInProgress, setAuthInProgress] = useState(false);
  const [authError, setAuthError] = useState(null);

  const onAuthSuccess = useCallback(
    (user) => {
      setAuthInProgress(false);
      setUser(user);
      setAuthError(null);
    },
    [setUser],
  );
  const onAuthError = useCallback((err) => {
    setAuthInProgress(false);
    setAuthError(err);
  }, []);

  useEffect(() => {
    run(getUser());
  }, [run]);

  const login = useCallback(
    (email, password) => {
      setAuthInProgress(true);
      authLogin(email, password).then(onAuthSuccess).catch(onAuthError);
    },
    [onAuthSuccess, onAuthError],
  );

  const signup = useCallback(
    (name, email, password) => {
      authSignup(name, email, password)
        .then((user) => {
          setUser(user);
          setAuthInProgress(false);
        })
        .catch((er) => {
          setAuthInProgress(false);
        });
    },
    [setUser],
  );

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
  }, [setUser]);

  const value = useMemo(
    () => ({
      user,
      login,
      signup,
      logout,
      loaded,
      loading,
      authInProgress,
      authError,
    }),
    [user, login, signup, logout, loaded, loading, authInProgress, authError],
  );

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth has to be wrapped within AuthProvider`);
  }
  return context;
};

export default AuthProvider;
