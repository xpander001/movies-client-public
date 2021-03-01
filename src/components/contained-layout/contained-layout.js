import React from 'react';
import GeneralLayout from 'components/general-layout';

const ContainedLayout = ({ children }) => {
  return (
    <GeneralLayout>
      <div className="container">{children}</div>
    </GeneralLayout>
  );
};

export default ContainedLayout;
