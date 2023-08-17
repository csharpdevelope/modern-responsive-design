import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './i18n';
import LanguageProvider from './LanguageProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
        <App />
    </LanguageProvider>
  </React.StrictMode>
);
