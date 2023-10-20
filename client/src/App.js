import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DataProvider } from './context/';
import Nav from './components/Navbar/Nav';
import HomePage from './components/Homepage/HomePage';

import './App.css';
import Footer from './components/Footer/Footer';
import Patient from './components/Patient';
import RootLayout from './layouts/RootLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'about',
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
