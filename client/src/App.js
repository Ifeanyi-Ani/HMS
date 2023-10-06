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
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}
export default App;
