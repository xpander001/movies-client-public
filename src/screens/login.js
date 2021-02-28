import React from 'react';
import FullPageLayout from 'components/full-page-layout';
import LoginForm from 'components/login-form';

const Signup = ({ login }) => {
  const onFormSubmit = ({ email, password }) => {
    login(email, password);
  };
  return (
    <FullPageLayout>
      <LoginForm onSubmit={onFormSubmit} />
    </FullPageLayout>
  );
};

export default Signup;
