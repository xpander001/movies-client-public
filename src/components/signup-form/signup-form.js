import React, { useState } from 'react';
import './signup-form.css';
import Input from 'components/input';

const SignUpForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = (e) => {
    setEmail(e.currentTarget.value);
  };

  const updateName = (e) => {
    setName(e.currentTarget.value);
  };

  const updatePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({ name, email, password });
  };

  return (
    <form className="signup-form" onSubmit={submitHandler}>
      <label className="sr-only">Name</label>
      <Input
        label="Name"
        labelHidden
        value={name}
        onChange={updateName}
        type="text"
        id="signupName"
        placeholder="Name"
      />
      <label className="sr-only">Email address</label>
      <Input
        label="Email"
        labelHidden
        value={email}
        onChange={updateEmail}
        type="email"
        id="signupEmail"
        placeholder="Email"
      />
      <label className="sr-only">Password</label>
      <Input
        label="Password"
        labelHidden
        value={password}
        onChange={updatePassword}
        type="password"
        id="signupPassword"
        placeholder="Password"
        customClasses="mb-4"
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
