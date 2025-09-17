import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //checking the issues in the app - renderin all the api calls twice in dev mode
  //<React.StrictMode>
    <App />
 // </React.StrictMode>
);