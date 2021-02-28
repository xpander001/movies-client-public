import React, { useState } from 'react';
import Input from 'components/input';
import Button from 'components/button';
import './login-form.css';

const LoginForm = ({ onSubmit, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const updateEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const updatePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };
  return (
    <form className="login-form" onSubmit={submitHandler}>
      <Input
        label="Email address"
        labelHidden
        value={email}
        onChange={updateEmail}
        type="email"
        id="loginEmail"
        placeholder="Email"
      />
      <Input
        label="Password"
        labelHidden
        value={password}
        onChange={updatePassword}
        type="password"
        id="loginPassword"
        customClasses="mb-4"
        placeholder="Password"
      />
      <Button disabled={loading} primary type="submit" fullWidth size="large">
        Sign in
      </Button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};

export default LoginForm;
