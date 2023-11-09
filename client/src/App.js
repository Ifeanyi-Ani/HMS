import React, { useEffect, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DataProvider } from './context/';
import HomePage from './components/Homepage/HomePage';
import { dataContext } from './context/';

import Patient from './Page/Patient';
import Admin from './Page/Admin';
import Receptionist from './Page/Receptionist';
import NotFoundPage from './components/NotFoundPage';
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
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
