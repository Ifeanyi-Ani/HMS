import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Navbar/Nav";
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Services from './components/pages/Services';
// import Blog from './components/pages/Blog';
// import Contact from './components/pages/Contact';
// import Counter from "./components/Counter";
// import Product from "./components/pages/Product";
// import Users from "./components/Users";
// import SingleUser from "./components/SingleUser";
// import Registration from "./components/pages/Registration";
// import Login from "./components/pages/login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
    </BrowserRouter>
  );
}
export default App;

