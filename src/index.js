import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WaitlistPage from './pages/WaitlistPage';
import MemosPage from './pages/MemosPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "About",
        element: <AboutPage/>,
      },
      // {
      //   path: "Memos",
      //   element: <MemosPage/>,
      // },
      {
        path: "Waitlist",
        element: <WaitlistPage/>,
      },
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
