import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import './index.css';
import App from './App.tsx';

// Initialize Vercel Web Analytics
inject();

// Initialize theme on page load
document.documentElement.setAttribute('data-theme', 'dark');

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <App />
  </StrictMode>
);
