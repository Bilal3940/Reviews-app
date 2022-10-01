import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App';
import Header from './Header';
import Review from './Review';

const router = createBrowserRouter([
    {
      path: "/reviews-app",
      element: <App/>,
    },
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );