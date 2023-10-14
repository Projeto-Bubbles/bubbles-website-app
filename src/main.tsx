import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/AppRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
