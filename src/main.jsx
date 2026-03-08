// React core and the modern client API (React 18+)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Global styles and toast notification styles (must be imported once, typically at root)
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

// createRoot replaces the legacy ReactDOM.render; attaches React to the DOM node #root
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps surface side-effects and deprecated APIs in development only
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
