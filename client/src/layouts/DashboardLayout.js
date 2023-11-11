import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import img1 from '../images/Union.png';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { loggedIn, loggedUser } from '../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const DashboardLayout = () => {
  const { currentUser } = useSelector(loggedUser);
  const [isopen, setisOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      console.log(currentUser);
      navigate('/login');
    }
  }, [currentUser]);
  if (currentUser) {
    return (
      <>
        <div className="sticky w-[100%] top-0 p-0  bg-white z-20">
          <nav className="w-[100%] p-4 shadow-md text-center max-sm">
            <div className="flex justify-between w-[90%] mx-auto items-center">
              <div className="">
                <img src={img1} class="" alt="" />
              </div>
              <div>
                <div className="relative w-[400px] m-[0_10px]">
                  <div className="absolute top-0 right-[10px] m-auto">
                    <CiSearch className="w-full h-[30px]" />
                  </div>
                  <input
                    type="text"
                    className="w-full h-40px rounded-[40px] p-[5px_20px] pe-[40px] outline-none shadow-md ring-1 ring-inset ring-gray-300"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-7">
                <IoMdNotificationsOutline className="text-3xl" />
                <div className="relative w-[40px] h-[40px] rounded-[50%] overflow-hidden cursor-pointer">
                  <img
                    src={img1}
                    alt="profile"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="relative flex flex-col items-center rounded-lg w-[240px]">
                  <button
                    onClick={() => setisOpen(open => !open)}
                    className="px-3 py-2 w-full flex items-center justify-between font-semibold text-lg rounded-lg tracking-wider shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Ifeanyi Ani
                    {isopen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
                  </button>
                  {isopen && (
                    <div className="absolute top-20 flex flex-col items-start w-full shadow-lg rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none px-3 py-2">
                      <div className="flex w-full justify-between hover:cursor-pointer hover:bg-gray-50 ">
                        <Link
                          className="text-gray-700 block px-4 py-2 text-sm"
                          to="/#"
                        >
                          Profile Setting
                        </Link>
                      </div>
                      <div className="flex w-full justify-between hover:cursor-pointer hover:bg-gray-50 ">
                        <form>
                          <button
                            type="submit"
                            className="text-gray-700 w-full block text-left text-sm px-4 py-2"
                          >
                            Signout
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex h-screen">
          <Outlet />
        </div>
      </>
    );
  }
};

export default DashboardLayout;
