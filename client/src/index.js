import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorPage } from './Pages/ErrorPage';
import { Home } from './Pages/Home';
import { PopularMovies } from './Pages/PopularMovies';
import { PopularSeries } from './Pages/PopularSeries';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: '/popular-movies',
        element:<PopularMovies />
      }, 
      {
        path: '/popular-series',
        element:<PopularSeries />
      }
    ]
  }

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
