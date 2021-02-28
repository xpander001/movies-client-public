import React from 'react';
import GeneralLayout from 'components/general-layout';
import './full-page-layout.css';

const FullPageLayout = ({ children }) => {
  return (
    <GeneralLayout>
      <div className="full-page-layout">{children}</div>
    </GeneralLayout>
  );
};

export default FullPageLayout;
