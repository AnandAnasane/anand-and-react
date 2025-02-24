import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const myName = <h1>my Name is Anand from pune</h1>

const customroot = ReactDOM.createRoot(document.getElementById('root'));
customroot.render(myName)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);
