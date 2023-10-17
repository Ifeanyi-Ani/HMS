import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Nav from "./components/Navbar/Nav";
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
import Dashboard from "./Page/Dashboard";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Employees from "./components/Employees";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashHolder from "./components/DashHolder";
import Merge from "./components/Merge";
import GlobalProvider from "./components/context/GlobalContext";
// import Nav from "./components/Navbar/Nav";

function App() {
  return (
   <GlobalProvider> <BrowserRouter>
   {/* <Nav /> */}
    {/* <DashHolder /> */}
   <Routes>
   <Route path="/" element={<Dashboard />} />
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<SignUp />} />
   <Route path="/employees" element={<Employees />} />


   </Routes>
 </BrowserRouter></GlobalProvider>
  );
}
export default App;

