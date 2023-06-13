import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './error-page.tsx';

import LikedTitleById from './routes/LikedTitles/LikedTitleById.tsx';
import LikedTitles, { likedTitlesLoader } from './routes/LikedTitles/LikedTitles.tsx';
import Login, { loginAction, loginLoader } from './routes/Login.tsx';
import Root, { rootAction, rootLoader } from './routes/Root.tsx';

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/login/",
        element: <Login />,
        errorElement: <ErrorPage />,
        loader: loginLoader,
        action: loginAction,
      },
      {
        path: '/liked-titles',
        element: <LikedTitles />,
        errorElement: <ErrorPage />,
        loader: likedTitlesLoader,
      },
      {
        path: "/liked-titles/:titleId",
        element: <LikedTitleById />,
        errorElement: <ErrorPage />,
        loader: likedTitlesLoader
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
