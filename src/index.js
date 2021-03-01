import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './main-app';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalProviders from 'context/global-providers';

ReactDOM.render(
  <GlobalProviders>
    <App />
  </GlobalProviders>,
  document.getElementById('root'),
);
