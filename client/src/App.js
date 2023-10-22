import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DataProvider } from './context/';
import HomePage from './components/Homepage/HomePage';

import Patient from './components/Patient';
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
        {
          path: 'about',
          element: <Patient />,
        },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: 'patient',
          element: <Patient />,
        },
      ],
    },
  ]);
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}
export default App;
