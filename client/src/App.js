import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/';
import Nav from './components/Navbar/Nav';
import HomePage from './components/Homepage/HomePage';

import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*<Route path="/login" element={<Login />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/users" element={<Users />} />
        <Route path="/registration" element={<Registration />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/users/:id" element={<SingleUser />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}
export default App;
