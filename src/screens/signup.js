import React from 'react';
import FullPageLayout from 'components/full-page-layout';
import SignUpForm from 'components/signup-form';
import { useAuth } from 'context/auth-context';

const Signup = () => {
  const { signup } = useAuth();
  const onFormSubmit = ({ name, email, password }) => {
    signup(name, email, password);
  };
  return (
    <FullPageLayout>
      <SignUpForm onSubmit={onFormSubmit} />
    </FullPageLayout>
  );
};

export default Signup;
