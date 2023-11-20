import React, { useEffect, useContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DataProvider } from './context/';
import HomePage from './components/Homepage/HomePage';

import Patient from './Page/Patient';
import Admin from './Page/Admin';
import Receptionist from './Page/Receptionist';
import NotFoundPage from './components/NotFoundPage';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';

import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login/Login';
import { loggedIn } from './redux/features/authSlice';

function App() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    if (loading) {
      dispatch(loggedIn());
      setloading(false);
    }
  }, [loading, dispatch]);
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: 'nurse',
          element: <Patient />,
        },
        {
          path: 'receptionist',
          element: <Receptionist />,
        },
        {
          path: 'accountant',
          element: <Patient />,
        },
        {
          path: 'patient',
          element: <Patient />,
        },
        {
          path: 'doctor',
          element: <Patient />,
        },
        {
          path: 'pharmacy',
          element: <Patient />,
        },
        {
          path: 'admin',
          element: <Admin />,
        },
      ],
    },
    {
      path: '/*',
      element: <NotFoundPage />,
    },
  ]);
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}
export default App;
