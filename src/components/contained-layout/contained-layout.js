import React from 'react';
import GeneralLayout from 'components/general-layout';

const ContainedLayout = ({ user, logout, children }) => {
  return (
    <GeneralLayout user={user} logout={logout}>
      <div className="container">{children}</div>
    </GeneralLayout>
  );
};

export default ContainedLayout;
