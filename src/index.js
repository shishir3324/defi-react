import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import TokenContextProvider from './TokenContext';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokenContextProvider>
      <App />
    </TokenContextProvider>
  </React.StrictMode>
);

