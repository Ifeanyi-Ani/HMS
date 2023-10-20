import { Outlet } from 'react-router-dom';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
