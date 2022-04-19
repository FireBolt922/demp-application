import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Sentry from '@sentry/react';
import * as customLocalStorage from 'utilities/storage/customLocalStorage';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DNS,
  release: '%REACT_APP_RELEASE_VERSION%',
});
const userEmail = customLocalStorage.getItem('userInfo', [], 'json');
Sentry.setUser({ email: userEmail.email });
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
