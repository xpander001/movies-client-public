import React from 'react';
// import Header from 'components/header'; // TODO Usamos el header?

const GeneralLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default GeneralLayout;
