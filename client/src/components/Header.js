import React from 'react';
import { IoMdNotificationsOutline  } from 'react-icons/io';


const Header = () => {
  return (
    <header className="bg-white shadow-lg pt-2 pb-2">
      <div className="container mx-auto py-1">
        <div className="flex items-center justify-between">
          {/* Search Bar */}
          <div className="w-1/3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Notification Bar */}
          <div className="w-1/3 text-center">
            {/* Notification content goes here */}
          </div>

          {/* Login/Logout Button */}
          <div className=" text-right flex flex-row gap-3">
            <IoMdNotificationsOutline className="w-6 h-6 text-indigo-500"/>
            <button className="px-2 py-1 rounded-md bg-blue-400 text-white hover:bg-blue-500">
              Login/LogOut
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;