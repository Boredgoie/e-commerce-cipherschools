import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './contexts/authContexts';
import './index.css';
import Layout from './layouts/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Layout>
  </React.StrictMode>
);
