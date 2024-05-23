import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@/assets/styles/main.scss';
import { ProfileContextProvider } from './context/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </React.StrictMode>
);
