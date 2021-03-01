import React from 'react';
import FullPageLayout from 'components/full-page-layout';
import LoginForm from 'components/login-form';
import { useAuth } from 'context/auth-context';

const Login = () => {
  const { login, authInProgress, authError } = useAuth();
  const onFormSubmit = ({ email, password }) => {
    login(email, password);
  };
  return (
    <FullPageLayout>
      <LoginForm
        onSubmit={onFormSubmit}
        loading={authInProgress}
        error={authError}
      />
    </FullPageLayout>
  );
};

export default Login;
