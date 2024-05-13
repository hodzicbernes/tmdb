import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage.tsx';
import Provider from './context/Context.tsx';
import MovieDetail from './pages/MovieDetail/MovieDetail.tsx';
import TvShowDetail from './pages/TvShowDetail/TvShowDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "movie/:id",
    element: <MovieDetail />
  },
  {
    path: "tv-show/:id",
    element: <TvShowDetail />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
