import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from 'context/auth-context';

const GlobalProviders = ({ children }) => {
  return (
    <AuthProvider>
      <Router>{children}</Router>
    </AuthProvider>
  );
};
export default GlobalProviders;
