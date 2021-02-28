import React from 'react';
import FullPageLayout from 'components/full-page-layout';
import SignUpForm from 'components/signup-form';

const Signup = ({ signUp }) => {
  const onFormSubmit = ({ name, email, password }) => {
    signUp(name, email, password);
  };
  return (
    <FullPageLayout>
      <SignUpForm onSubmit={onFormSubmit} />
    </FullPageLayout>
  );
};

export default Signup;
