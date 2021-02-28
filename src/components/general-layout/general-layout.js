import React from 'react';
import Header from 'components/header';

const GeneralLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </div>
  );
};

export default GeneralLayout;
