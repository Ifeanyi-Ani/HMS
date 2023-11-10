import React, { useEffect, useContext } from 'react';
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
import { fetchReceptionist, selectAll } from './redux/features/users/userSlice';

function App() {
  const dispatch = useDispatch();
  const receptionists = useSelector(selectAll);
  console.log(receptionists);
  useEffect(() => {
    dispatch(fetchReceptionist());
  }, []);
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
