import { Link } from 'react-router-dom';
import img1 from '../../images/Union.png';
import React, { useContext, useState } from 'react';
// import React from 'react';
import Login from '../Login/Login';
import { dataContext } from '../../context';

function Nav() {
  const { show, setShow } = useContext(dataContext);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToServices = () => {
    const aboutSection = document.getElementById('services');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    const aboutSection = document.getElementById('home');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const aboutSection = document.getElementById('contact');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="fixed w-[100%] top-0 p-0  bg-white z-20">
      <nav className="w-[100%] h-12 shadow-md text-center max-sm">
        <div className="flex justify-between w-[90%] mx-auto  mt-4  ">
          <div className="text-base">
            <img src={img1} class="" alt="" />
          </div>
          <div className="flex gap-4">
            <ul className="flex gap-4 text-blue-900 text-lg font-semibold cursor-pointer">
              <li onClick={scrollToHome}>Home</li>
              <li onClick={scrollToAbout}>About</li>
              <li onClick={scrollToServices}>Services</li>
              <li onClick={scrollToContact}>Contact Us</li>
            </ul>
            <Link to="" onClick={() => setShow(true)}>
              <button className="text-blue-900 text-lg font-semibold border-2 rounded-3xl p-1 border-blue-900">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {show ? <Login /> : null}
    </div>
  );
}
export default Nav;
