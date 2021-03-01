import React from 'react';
import Header from 'components/header';

const GeneralLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default GeneralLayout;
