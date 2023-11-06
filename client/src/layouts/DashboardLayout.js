import img1 from '../images/Union.png';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { dataContext } from '../context';
import { CiSearch } from 'react-icons/ci';

const DashboardLayout = () => {
  const { loggedin } = useContext(dataContext);

  console.log(loggedin);
  return loggedin ? (
    <>
      <div className="fixed w-[100%] top-0 p-0  bg-white z-20">
        <nav className="w-[100%] h-12 shadow-md text-center max-sm">
          <div className="flex justify-between w-[90%] mx-auto  mt-4  ">
            <div className="text-base">
              <img src={img1} class="" alt="" />
            </div>
            <div>
              <div className="relative w-[400px] m-[0_10px]">
                <div className="absolute top-0 right-[1opx]">
                  <CiSearch className="w-full h-[40px]" />
                </div>
                <input
                  type="text"
                  className="w-full h-40px rounded-[40px] p-[5px_20px] ps-[35px] outline-none shadow-md"
                />
              </div>
            </div>
            <div className="flex gap-5 items-end">
              profile
              <div className="relative w-[40px] h-[40px] rounded-[50%] overflow-hidden cursor-pointer">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={img1}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex h-screen">
        <Outlet />
      </div>
    </>
  ) : (
    <div>Access denied login to gain access</div>
  );
};

export default DashboardLayout;
