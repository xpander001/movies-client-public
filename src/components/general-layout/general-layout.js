import React from 'react';
import Header from 'components/header';

const GeneralLayout = ({ user, logout, children }) => {
  return (
    <div>
      <Header user={user} logout={logout} />
      <main>{children}</main>
    </div>
  );
};

export default GeneralLayout;
